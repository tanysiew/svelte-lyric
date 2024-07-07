import { serializeNonPOJOs } from '$lib/utils';

export async function load({ locals,fetch, url }) {
    const page = url.searchParams.get('page') || 1;
    // Fetch data for the current page
    const getSongs = async () => {
        try {
            const songs = serializeNonPOJOs(await locals.pb.collection('songs').getList(page, 10))
            // console.log(songs);
            return songs;
        } catch (error) {
            console.log("Error: ", error)
        }
    }
    // const data = await response.json();

    return {
        song: await getSongs(),
        user: locals.user
    }
  }