import { error, redirect } from '@sveltejs/kit';
import { addSongSchema } from '$lib/schemas';
import { validateData } from '$lib/utils';
import { serializeNonPOJOs } from '$lib/utils';


export const load = async ({ locals, params }) => {

    const getChords = async () =>{
        try {
            const chord = serializeNonPOJOs(await locals.pb.collection('music_chords').getList())
            return chord;
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    return {
        chords: await getChords()
    }

}

export const actions = {
/**
 * 
 * @param {*} param0 
 * @returns 
 */
    create : async ({request, locals}) => {
            
        const body = await request.formData();
        // console.log("HELLO",body);
        body.append('user', locals.user.id);

        const {formData , errors} = await validateData(body, addSongSchema);

        if(errors){
            throw error(403, errors);

        }
        try {
            await locals.pb.collection('songs').create(formData);
        } catch (err) {
            if (err instanceof Error) {
                console.log('Error: ', err);
                throw error(403, err.message);
              }
        }
        
        throw redirect(303, '/songs');

    }

}