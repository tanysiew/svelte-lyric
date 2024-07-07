<script>
    export let data;
    import { jsPDF } from 'jspdf';
    const chords = data.chords;
    const ori_lyric = data.song.lyric;
    let compose_lyirc = '';
    clean(data.song.original_key);

    function clean(key){
        const oriKey = key;
        const ori_fam_key = chords.items.find(x => x.id === oriKey).family_chords;
        const digitToChar = ori_fam_key.reduce((acc, char, index) => {
            acc[(index + 1) % 10] = char; // To handle 0-9 digits wrapping
            return acc;
        }, {});
        
        // /\d/g
        compose_lyirc = ori_lyric.replace(/:(\d)/g, (match, p1) => digitToChar[p1]);
    }

    function clickChord(e){
        const chordID = e.target.id;
        clean(chordID);
    }

    function downloadPDF() {
        const doc = new jsPDF();
    
        // Add the song title with a larger font size
        doc.setFontSize(18); // Title font size
        const title = data.song.title;
        const titleX = 10;
        const titleY = 10; // Title y-coordinate
        doc.text(title, titleX, titleY); // Title position

        // Underline the title
        const titleWidth = doc.getTextWidth(data.song.title);
        doc.setLineWidth(0.5); // Line thickness
        doc.line(titleX, titleY + 2, titleX + titleWidth, titleY + 2); // Draw line
        
        // Set font size to a smaller value for the lyrics
        doc.setFontSize(10); // Adjust as necessary

        // Calculate the position for the lyrics, below the title
        const titleHeight = 20; // Adjust if needed

        // Split text to fit within page width
        const pageWidth = doc.internal.pageSize.getWidth() - 20; // 10 mm padding on each side
        const splitText = doc.splitTextToSize(compose_lyirc, pageWidth);

        // Add the split text to the PDF, starting below the title
        doc.text(splitText, 10, titleHeight);

        doc.save(`${data.song.title}.pdf`);
    }


</script>

<div class="flex flex-col items-center w-full mt-4">
    <div class="flex-row">
        {#each chords.items as chord}
        <button id ={chord.id} class="btn m-1" on:click={clickChord}>
            {chord.first_chord}
        </button>
    {/each}
    </div>


    <div class="flex mt-3">
        <h1 class="text-2xl font-bold mt-4 ">
            {data.song.title}
        </h1>
        <button class="btn ml-5" on:click={downloadPDF}>
            <i class="fa fa-download" aria-hidden="true"></i>
        </button>
    </div>

    <div class="whitespace-pre">
        <p class="text-xl font-light mt-2">{compose_lyirc}</p>
    </div>
</div>