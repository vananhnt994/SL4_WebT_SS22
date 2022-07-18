<script>
    export let data = [];
    export let param = [];
</script>

<div class="container">
    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        <!-- Wenn Daten vorhanden sind, werden aus diesen HTML-Code erzeugt. Dabei werden die Texte und CSS-Klassen teilweise dynamisch zugewiesen -->
        {#if data}
            {#each data as data2}
                <div class="col">
                    <div class="p-3 border {param[data2.Index - 1].class}">
                        <div>{data2.Ort}</div>
                        <p>{param[data2.Index - 1].text}</p>
                    </div>
                </div>
            {/each}
        {:else}
            <div class="col">
                <div class="p-3 border">
                    <div>Keine Daten vorhanden.</div>
                    <p>Bitte überprüfen Sie Ihre Konfiguration.</p>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    .container {
        margin-top: 1rem;
    }

    .col,
    .p-3 {
        min-height: 10rem;
        min-width: 12rem;
        height: 10rem;
    }

    .verylow {
        background: #b8e29b;
    }

    .low {
        background: #d9f8c4;
    }

    .middle {
        background: #f9f9c5;
    }

    .high {
        background: #fad9a1;
    }

    .veryhigh {
        background: #f37878;
    }

    .p-3 div {
        font-weight: bold;
        min-height: 3rem;
    }

    .p-3 p {
        margin-top: 1rem;
    }
</style>
