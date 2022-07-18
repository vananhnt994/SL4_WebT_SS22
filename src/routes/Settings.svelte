<script>
    import { groupBy, sortBy, updateGroupBy, updateSortBy } from "../stores.js";

    let bGroupBy, bSortBy = "";

    groupBy.subscribe((value) => {
        bGroupBy = value;
    });

    sortBy.subscribe((value) => {
        bSortBy = value;
    });

    function handleChange(){
        updateGroupBy(bGroupBy);
        updateSortBy(bSortBy);
    }


</script>

<!-- Die 2 Radiobutton-Gruppen und die Bindings werden hier gesteuert. Dabei werden Änderung der Werte durch 
     Auswahl eines Buttons in den Store geschrieben -->
<div class="settings">
    <div>
        <div class="form-check form-check-inline"><span>Gruppierung</span></div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio"
                bind:group={bGroupBy}
                name="groupBy"
                id="groupOrt"
                value="ort"
                checked={bGroupBy == "ort"}
                on:change={handleChange}
            />
            <label class="form-check-label" for="groupOrt">Ort</label>
        </div>

        <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                bind:group={bGroupBy}
                name="groupBy"
                id="groupBL"
                value="bl"
                checked={bGroupBy == "bl"}
                on:change={handleChange}
            />
            <label class="form-check-label" for="groupBL">Bundesland</label>
        </div>
    </div>

    <div>
        <div class="form-check form-check-inline"><span>Sortierung</span></div>
        <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                bind:group={bSortBy}
                name="sortBy"
                id="sortName"
                value="name"
                checked={bSortBy == "name"}
                on:change={handleChange}
            />
            <label class="form-check-label" for="sortName">Nach Name</label>
        </div>

        <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                bind:group={bSortBy}
                name="sortBy"
                id="sortIndex"
                value="index"
                checked={bSortBy == "index"}
                on:change={handleChange}
            />
            <label class="form-check-label" for="sortIndex">Nach Index</label>
        </div>
    </div>

</div>

<style>
    .form-check {
        padding: 2rem;
    }

    .form-check span {
        font-size: 1.3rem;
        font-weight: bold;
    }
</style>
