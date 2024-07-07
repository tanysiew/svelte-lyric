<script>
    import '../app.postcss';
    import { goto } from '$app/navigation';

    function navigate(){
        goto('/login');
    }

    export let data;


</script>

<div class="min-h-full">
    <nav class="navbar bg-base-100 border-b">
        <div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">Logo</a>

		</div>
        <div class="flex-none">
			<a href="/" class="btn btn-ghost normal-case text-xl">Test</a>
			<a href="/" class="btn btn-ghost normal-case text-xl">Test</a>
			<a href="/" class="btn btn-ghost normal-case text-xl">Test</a>
            {#if (!data.user)}
			    <button on:click={navigate} class="btn btn-primary">Login</button>
            {/if}
		</div>
    </nav>
</div>

<div class="py-4">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <slot />
    </div>
</div>