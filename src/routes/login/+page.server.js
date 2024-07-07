import { error, invalid, redirect } from "@sveltejs/kit";
// import { validateData } from "$lib/utils";
// import { loginUserSchema } from "$lib/schemas";

export const actions = {
	login: async ({ request, locals }) => {
		// const { formData, errors } = await validateData(
		// 	await request.formData(),
		// 	loginUserSchema,
		// );

		// if (errors) {
		// 	return invalid(400, {
		// 		data: formData,
		// 		errors: errors.fieldErrors,
		// 	});
		// }
		try {
            await locals.pb
            .collection("users")
            .authWithPassword('test@gmail.com', 'test12345');

            console.log("AFTER",locals.pb?.authStore?.model?.verified);
			if (!locals.pb?.authStore?.model?.verified) {
                // console.log("COME IN?")
				locals.pb.authStore.clear();
				return {
					notVerified: true,
				};
			}
		} catch (err) {
			console.log("Error: ", err);
			throw error(err.status, err.message);
		}
        locals.pb.authStore.exportToCookie();
		throw redirect(303, "/");
	},
};
