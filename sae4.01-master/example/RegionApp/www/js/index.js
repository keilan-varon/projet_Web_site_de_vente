const btn = document.querySelector("button");
const regionsList = document.querySelector("body");
const loaded = false; // Pour éviter de charger les régions 2 fois

async function getRegions() {
    const res = await fetch("https://geo.api.gouv.fr/regions");
    const data = await res.json();
    return data;
}

btn.addEventListener("click", () => {
    if(!loaded) {
        getRegions().then(data => {
            for(const region of data) {
                const regionDiv = `
                <div class="region-item">
                    <p>Nom : ${region.nom}</p>
                    <p>Code: ${region.code}</p>
                </div>
                `
                regionsList.innerHTML += regionDiv;
            }
        })
    }
    
})
