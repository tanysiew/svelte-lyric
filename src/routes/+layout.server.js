import { serializeNonPOJOs } from '$lib/utils';

export async function load({ locals, url }) {
    // console.log()
    return {
        user: locals.user
    }
  }