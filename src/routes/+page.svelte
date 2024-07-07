<script>
    import { currentPage } from '$lib/stores/pagination';
    import { goto } from '$app/navigation';

    export let data;

    function update(p){
        currentPage.set(p);
        goto(`?page=${$currentPage}`)
    }

    function addSong(){
        goto('/songs/create')
    }

</script>

<div class="flex flex-col">
    {#if data.user}
        <button on:click={addSong} class='btn bg-green-500 hover:bg-green-700 text-white shadow-md border-green-500 shadow-gray-500 ml-auto'><i class="fas fa-plus"></i></button>
    {/if}
    <ul role="list" class="p-6 divide-y divide-slate-200">
        {#each data.song.items as song}
            <!-- Remove top/bottom padding when first/last child -->
            <a href="/songs/{song.id}">
                <li class="flex py-4 first:pt-0 last:pb-0 hover:bg-gray-100 text-black rounded-badge">
                    <div class="m-3 ml-3 overflow-hidden">
                        <p class="text-2xl font-medium text-slate-900">{song.title}</p>
                        <p class="text-sm text-gray-400 truncate">{song.lyric_by}</p>
                    </div>
                </li>
            </a>
        {/each}
    </ul>
    <div class="ml-auto">
        <button class="btn" on:click={update($currentPage - 1)} disabled={$currentPage <= 1}>&lt;</button>
        <button class="btn" on:click={update($currentPage + 1)}>&gt;</button>
        <!-- <p>{$currentPage}</p> -->
    </div>
</div>

