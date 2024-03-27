var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { apiURL } from "./config.js";
export class UserController {
    constructor() {
        this.currentUser = null;
        this.errorMessage = "";
    }
    // Users (avec connexion)
    getCurrentUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${apiURL}/api/routes/users`, {
                method: "GET",
            });
            const data = yield res.json();
            if (res.status === 401) {
                this.errorMessage = data.errorMessage;
            }
            else if (res.status === 200) {
                this.currentUser = data;
            }
            return data;
        });
    }
}
