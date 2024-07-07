<script>
	import { enhance } from '$app/forms';

	let loading = false;

    const submitLogin = () => {
        loading = true;
        return async ({ result, update }) => {
            // console.log(update);
            switch (result.type) {
                case 'success':
                    await update();
                    break;
                case 'invalid':
                    toast.error('Invalid credentials');
                    await update();
                    break;
                case 'error':
                    toast.error(result.error.message);
                    break;
                default:
                    await update();
            }
            loading = false;
        };
    };
</script>
<form
action="?/login"
method="POST"
class="flex flex-col items-center space-y-2 w-full pt-4"
use:enhance={submitLogin}
>
<div class="w-full max-w-lg pt-2">
    <button type="submit" class="btn btn-primary w-full" disabled={loading}>Login</button>
</div>
</form>