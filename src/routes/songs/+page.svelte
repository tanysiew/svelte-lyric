<script>
    import{ onMount } from 'svelte';
    export let data;
    const songList = data.songsList;

    onMount(()=>{
        console.log("Mounted!");

    })
    

</script>

<ul role="list" class="p-6 divide-y divide-slate-200">
    {#each songList.items as song}
      <!-- Remove top/bottom padding when first/last child -->
      <a href="/songs/{song.id}">
        <li class="flex py-4 first:pt-0 last:pb-0 hover:bg-gray-200">
            <div class="m-3 ml-3 overflow-hidden">
                <p class="text-2xl font-medium text-slate-900">{song.title}</p>
                <p class="text-sm text-slate-500 truncate">By: {song.lyric_by}</p>
            </div>
        </li>
        </a>
    {/each}
  </ul>