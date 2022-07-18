export default class Helper {

    bundeslandKeys = [];

    //diese Funktion baut das JSON vom Server in eine neue Struktur um, 
    //damit diese später einfacher verwendet werden kann
    rebuildArray(arr) {
        const bundeslandKeys = Object.keys(arr['states']);
        this.bundeslandKeys = this.exportBlKeys(bundeslandKeys);
        let newData = [];

        for (let i = 0; i < bundeslandKeys.length; i++) {
            let ortKeys = Object.keys(arr['states'][bundeslandKeys[i]]);
            for (let j = 0; j < ortKeys.length; j++) {
                let singleArr = [];
                let brandIndexOrt = Object.entries(arr['states'][bundeslandKeys[i]][j]);

                singleArr["Bundesland"] = bundeslandKeys[i];
                singleArr["Ort"] = brandIndexOrt[0][0];
                singleArr["Index"] = brandIndexOrt[0][1];

                newData.push(singleArr);
            }
        }
        return newData;
    }

    refactorDataforBL(arr, key, sort){    
        let arr2 = arr;

        arr2 = this.filterByBundesland(arr2, key);
    
        if(sort == 'name') arr2 = this.sortDataByOrtAZ(arr2);
        else arr2 = this.sortDataByIndexDesc(arr2);

        return arr2;
    }

    //Sortierfunktion: Ort A-Z
    sortDataByOrtAZ(arr) {
        arr.sort(function (a, b) {
            return a['Ort'].localeCompare(b['Ort']);
        });
        return arr;
    }

    //Sortierfunktion: Index aufsteigend
    sortDataByIndexDesc(arr) {
        arr.sort(function (a, b) {
            return b["Index"] - a["Index"];
        });
        return arr;
    }

    filterByBundesland(arr, key){
        let filter = arr.filter(function(el){
            return el.Bundesland == key
        });

        return filter;
    }

    //export Array with Bundesland-Keys
    exportBlKeys(arr) {
        return arr;
    }
}