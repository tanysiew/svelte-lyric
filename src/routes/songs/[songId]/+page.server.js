import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals, params }) => {
    const getSong = async (songId) => {
        try {
            const song = serializeNonPOJOs(await locals.pb.collection('songs').getOne(songId, {'expand': "original_key"}));
            return song;
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    const getChords = async () =>{
        try {
            const chord = serializeNonPOJOs(await locals.pb.collection('music_chords').getList())
            return chord;
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    return {
        song: await getSong(params.songId),
        chords: await getChords()
    }

}