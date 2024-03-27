import { apiURL } from "./config.js";
import { fetchOptionsPOST } from "./config.js";


export class ProduitController {

    // Produits (sans connexion);
    public errorMessage: string;

    constructor() {
        this.errorMessage = "";
    }

    async getAllProduits() {
        const res = await fetch(`${apiURL}/api/routes/produits`);
        const data = await res.json();
        return data;
    }

    async getProduitById(num_prod: string) {
        const res = await fetch(`${apiURL}/api/routes/produits`, {
            ...fetchOptionsPOST,
            body: JSON.stringify({num_prod, variantes: false})
        });
        const data = await res.json();
        return data;
    }

    async getProduitsFiltered(nom_categ: string | null, taille: string | null, coloris: string | null) {
        const res = await fetch(`${apiURL}/api/routes/produits`, {
            ...fetchOptionsPOST,
            body: JSON.stringify({nom_categ, taille, coloris})
        });

        const data = await res.json();
        return data;
    }

    async getProduitsByName(nom_prod: string) {
        const res = await fetch(`${apiURL}/api/routes/produits`, {
            ...fetchOptionsPOST,
            body: JSON.stringify({nom_prod})
        });

        const data = await res.json();
        return data;
    }

    async getVarianteOfProduit(num_prod: string) {
        const res = await fetch(`${apiURL}/api/routes/produits`, {
            ...fetchOptionsPOST,
            body: JSON.stringify({num_prod, variantes: true})
        });

        const data = await res.json();
        return data;
    }


}