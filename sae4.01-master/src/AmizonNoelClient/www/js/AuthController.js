var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { apiURL, fetchOptionsPOST } from "./config.js";
export class AuthController {
    constructor() {
        this.loginName = "";
        this.errorMessage = "";
        this.isLoggedIn = false;
    }
    login(mail, mdp) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${apiURL}/auth/login`, Object.assign(Object.assign({}, fetchOptionsPOST), { body: JSON.stringify({ mail, mdp }) }));
            const data = yield res.json();
            if (res.status === 200) {
                this.loginName = data.login;
                this.isLoggedIn = true;
                return true;
            }
            else if (res.status === 400) {
                this.errorMessage = data.errorMessage;
            }
            return false;
        });
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${apiURL}/auth/logout`);
            if (res.status === 200) {
                this.isLoggedIn = false;
                return true;
            }
            else
                return false;
        });
    }
    signUp(nom, prenom, adresse, mail, login, mdp) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${apiURL}/auth/signup`, Object.assign(Object.assign({}, fetchOptionsPOST), { body: JSON.stringify({ nom, prenom, adresse, mail, login, mdp }) }));
            const data = yield res.json();
            if (res.status === 200) {
                this.loginName = data.login;
                return true;
            }
            else if (res.status === 400) {
                this.errorMessage = data.errorMessage;
            }
            return false;
        });
    }
}
