import { apiURL } from "./config.js";

interface User {
    num_cl: string, 
    nom_cl: string, 
    prenom_cl: string, 
    adresse_cl: string, 
    mail_cl: string
}

export class UserController {
    public currentUser: User | null;
    public errorMessage: string;


    constructor() {
        this.currentUser = null;
        this.errorMessage = "";
    }

    // Users (avec connexion)
    async getCurrentUser() {
        const res = await fetch(`${apiURL}/api/routes/users`, {
            method: "GET",
        });
        const data = await res.json();

        if(res.status === 401) {
            this.errorMessage = data.errorMessage;
        } else if(res.status === 200) {
            this.currentUser = data as User;
        }

        return data;
    }
}

