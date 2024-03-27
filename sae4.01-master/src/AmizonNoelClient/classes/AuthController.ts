import { apiURL, fetchOptionsPOST } from "./config.js";


export class AuthController {
    public isLoggedIn: boolean;
    public loginName: string;
    public errorMessage: string;

    constructor() {
        this.loginName = "";
        this.errorMessage = "";
        this.isLoggedIn = false;
    }

    async login(mail: string, mdp: string) {
        const res = await fetch(`${apiURL}/auth/login`, {
            ...fetchOptionsPOST,
            body: JSON.stringify({mail, mdp})  
        });

        const data = await res.json();

        if(res.status === 200) {
            this.loginName = data.login;
            this.isLoggedIn = true;
            return true;
        } else if (res.status === 400) {
            this.errorMessage = data.errorMessage;
        }

        return false;
    }

    async logout() {
        const res = await fetch(`${apiURL}/auth/logout`);
        if(res.status === 200) {
            this.isLoggedIn = false;
            return true;
        }
        else return false;
    }

    
    async signUp(nom: string, prenom: string, adresse: string, mail: string, login: string, mdp: string) {
        const res = await fetch(`${apiURL}/auth/signup`, {
            ...fetchOptionsPOST,
            body: JSON.stringify({nom, prenom, adresse, mail, login, mdp})
        });

        const data = await res.json();

        if(res.status === 200) {
            this.loginName = data.login;
            return true;
        } else if (res.status === 400) {
            this.errorMessage = data.errorMessage;
        }

        return false;
    }

}