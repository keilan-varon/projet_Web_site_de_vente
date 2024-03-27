import { apiURL } from "./config.js";
import { fetchOptionsPOST } from "./config.js";

export interface Favori {
  num_prod: string;
  nom_prod: string;
  desc_prod: string;
  prix: string;
  image_var: string;
}

export class FavorisController {
    public errorMessage: string;
    public currentFavoris: Favori[] | null;

    constructor() {
        this.errorMessage = "";
        this.currentFavoris = null;
    }

    async getFavoris() {
        const res = await fetch(`${apiURL}/api/routes/favoris`);
        const data = await res.json();

        if(res.status !== 200) {
            this.errorMessage = data.errorMessage;
        } else if (res.status === 200) {
            this.currentFavoris = data as Favori[];
        }

        return data as Favori[];
    }

    async addFavori(num_prod: string) {
        const res = await fetch(`${apiURL}/api/routes/favoris`, {
            ...fetchOptionsPOST,
            body: JSON.stringify({num_prod})
        });

        const data = await res.json();

        if(res.status !== 200) {
            this.errorMessage = data.errorMessage;
        } else if (res.status === 200) {
            this.currentFavoris = data as Favori[];
        }

        return data as Favori[];

    }

    async deleteFavori(num_prod: string) {
        const res = await fetch(`${apiURL}/api/routes/favoris`, {
            ...fetchOptionsPOST,
            method: "DELETE",
            body: JSON.stringify({num_prod})
        });

        const data = await res.json();

        if(res.status !== 200) {
            this.errorMessage = data.errorMessage;
        } else if (res.status === 200) {
            this.currentFavoris = data as Favori[];
        }

        return data as Favori[];
    }
}