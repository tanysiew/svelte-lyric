import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({locals}) => {

    const getSongList = async () => {
        try {
            const songs = serializeNonPOJOs(await locals.pb.collection('songs').getList(1, 50));
            return songs;
            

        } catch (error) {
            console.log("Error: ", error)
        }
    }

    return {
        songsList: await getSongList()
    }

}