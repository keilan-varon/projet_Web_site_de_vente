import { apiURL } from "./config";
import { fetchOptionsPOST } from "./config";

interface Panier {
    num_var: string, 
    qte: string, 
    num_prod: string, 
    image_var: string, 
    prix: string, 
    nom_prod: string,
}

export class PanierController {
    public errorMessage: string;
    public currentPanier: Panier[] | null;

    constructor() {
        this.errorMessage = "";
        this.currentPanier = null;
    }
    
    async getPanier() {
        const res = await fetch(`${apiURL}/api/routes/panier`);
        const data = await res.json();

        if(res.status !== 200) {
            this.errorMessage = data.errorMessage;
        } else if (res.status === 200) {
            this.currentPanier = data as Panier[];
        }

        return data as Panier[];
    }

    async addToPanier(num_var: string, qte: string) {
        const res = await fetch(`${apiURL}/api/routes/panier`, {
            ...fetchOptionsPOST,
            body: JSON.stringify({num_var, qte})
        });

        const data = await res.json();

        if(res.status !== 200) {
            this.errorMessage = data.errorMessage;
        } else if (res.status === 200) {
            this.currentPanier = data as Panier[];
        }

        return data as Panier[];
    }

    async deleteFromPanier(num_var: string) {
        const res = await fetch(`${apiURL}/api/routes/panier`, {
            ...fetchOptionsPOST,
            method: "DELETE",
            body: JSON.stringify({num_var})
        });

        const data = await res.json();

        if(res.status !== 200) {
            this.errorMessage = data.errorMessage;
        } else if (res.status === 200) {
            this.currentPanier = data as Panier[];
        }

        return data as Panier[];
    }




}