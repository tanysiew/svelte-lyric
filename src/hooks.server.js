import pb from '$lib/pocketbase';
import { serializeNonPOJOs } from '$lib/utils';

export const csrf = false;
/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const handle = async ({event, resolve}) => {

    event.locals.pb = pb;
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
    // console.log(event.locals.pb.authStore);
    // const cookie = event.request.headers.get('cookie');
	try {
		if (event.locals.pb.authStore.isValid) {
			console.log('Refresh!');
			await event.locals.pb.collection('users').authRefresh();
			event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
		}
	} catch (_) {
        console.log("Hook ERROR: ",_);
		event.locals.pb.authStore.clear();
		event.locals.user = undefined;
	}
	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie());

	return response;

}