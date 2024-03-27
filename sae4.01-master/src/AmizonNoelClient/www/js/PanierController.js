var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { apiURL } from "./config";
import { fetchOptionsPOST } from "./config";
export class PanierController {
    constructor() {
        this.errorMessage = "";
        this.currentPanier = null;
    }
    getPanier() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${apiURL}/api/routes/panier`);
            const data = yield res.json();
            if (res.status !== 200) {
                this.errorMessage = data.errorMessage;
            }
            else if (res.status === 200) {
                this.currentPanier = data;
            }
            return data;
        });
    }
    addToPanier(num_var, qte) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${apiURL}/api/routes/panier`, Object.assign(Object.assign({}, fetchOptionsPOST), { body: JSON.stringify({ num_var, qte }) }));
            const data = yield res.json();
            if (res.status !== 200) {
                this.errorMessage = data.errorMessage;
            }
            else if (res.status === 200) {
                this.currentPanier = data;
            }
            return data;
        });
    }
    deleteFromPanier(num_var) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${apiURL}/api/routes/panier`, Object.assign(Object.assign({}, fetchOptionsPOST), { method: "DELETE", body: JSON.stringify({ num_var }) }));
            const data = yield res.json();
            if (res.status !== 200) {
                this.errorMessage = data.errorMessage;
            }
            else if (res.status === 200) {
                this.currentPanier = data;
            }
            return data;
        });
    }
}
