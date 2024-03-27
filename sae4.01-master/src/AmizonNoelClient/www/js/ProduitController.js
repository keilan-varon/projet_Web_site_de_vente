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
import { fetchOptionsPOST } from "./config.js";
export class ProduitController {
    constructor() {
        this.errorMessage = "";
    }
    getAllProduits() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${apiURL}/api/routes/produits`);
            const data = yield res.json();
            return data;
        });
    }
    getProduitById(num_prod) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${apiURL}/api/routes/produits`, Object.assign(Object.assign({}, fetchOptionsPOST), { body: JSON.stringify({ num_prod, variantes: false }) }));
            const data = yield res.json();
            return data;
        });
    }
    getProduitsFiltered(nom_categ, taille, coloris) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${apiURL}/api/routes/produits`, Object.assign(Object.assign({}, fetchOptionsPOST), { body: JSON.stringify({ nom_categ, taille, coloris }) }));
            const data = yield res.json();
            return data;
        });
    }
    getProduitsByName(nom_prod) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${apiURL}/api/routes/produits`, Object.assign(Object.assign({}, fetchOptionsPOST), { body: JSON.stringify({ nom_prod }) }));
            const data = yield res.json();
            return data;
        });
    }
    getVarianteOfProduit(num_prod) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${apiURL}/api/routes/produits`, Object.assign(Object.assign({}, fetchOptionsPOST), { body: JSON.stringify({ num_prod, variantes: true }) }));
            const data = yield res.json();
            return data;
        });
    }
}
