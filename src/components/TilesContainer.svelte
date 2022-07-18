<script>
    import Tiles from "../components/Tiles.svelte";
    import { groupBy, sortBy } from '../stores.js';
    import Helper from "../helper.js";

    export let data = [];
    export let param = [];
    export let bundesLandKeys = [];

    let helper = new Helper();
    let groupByVal, sortByVal;

    //reagieren auf das Änderungen von der Einstellungseite
	groupBy.subscribe((value) => {
		groupByVal = value;	
    });

	//reagieren auf das Änderungen von der Einstellungseite
    sortBy.subscribe((value) => {
		sortByVal = value;
    });
</script>

<!-- Je nach Einstellung wird hier die Komponente Tiles per Einzelaufruf geladen oder in dem Bootstrap-Akkordeon in Schleife-->
{#if groupByVal == "ort"}
<Tiles {data} {param} />
{:else}
    <div class="accordion" id="accordionPanelsStayOpenExample">    
        {#each bundesLandKeys as bundesLandKey, i}
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-heading{i}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse{i}" aria-expanded="true" aria-controls="panelsStayOpen-collapse{i}">
                    {bundesLandKey}
                    </button>
                </h2>
                <div id="panelsStayOpen-collapse{i}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading{i}">
                    <div class="accordion-body">
                        <span id="data">{data = helper.refactorDataforBL(data, bundesLandKey, sortByVal)}</span>
                        <Tiles  {data} {param}  />
                    </div>
                </div>
            </div>
        {/each}
    </div>
{/if}

<style>
    span#data{
        display:none;
    }
</style>