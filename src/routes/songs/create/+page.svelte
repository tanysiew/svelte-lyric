<script>
    import { Input, TextArea } from '$lib/components';
	export let form;
    export let data;

    let chords = data.chords.items;


</script>

<div class="flex flex-col items-center h-full w-full">
    <h2 class="text-center">
        Create a New Song
    </h2>
    <form class="flex flex-col items-center space-y-2 w-full pt-4" action='?/create' method="post">
        <Input id='title' label='Title' value={form?.data?.title} errors=''></Input>
        <!-- <Input id='song_tempo' label='Tempo' value={form?.data?.song_tempo} errors=''></Input> -->
        <!-- <Input id='original_key' label='Original Key' value={form?.data?.original_key} errors=''></Input> -->
        <div class="form-control w-full max-w-lg mb-2">
            <label for='original_key' class=" label font-medium pb-1">
                <span class="label-text">Original Key</span>
            </label>
            <select label='Original Key' name='original_key' id='original_key' value={form?.data?.original_key} class="border border-gray-300 rounded-lg p-3">
                {#each chords as chord, i}
                  <option value={chord.id}>{chord.first_chord}</option>
                {/each}
            </select>
        </div>
        <Input id='lyric_by' label='Lyric By' value={form?.data?.lyric_by} errors=''></Input>
        <Input id='music_by' label='Music By' value={form?.data?.music_by} errors=''></Input>
        <TextArea id='lyric' label='Lyric' value={form?.data?.lyric} errors=''></TextArea>
        <!-- <Input id='song_title' label='Title' value='' errors=''></Input> -->
        <div class="w-full max-w-lg pt-3">
            <button type='submit' class="btn btn-primary w-full max-w-lg">Create</button>
        </div>
    </form>

</div>