var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ProduitController } from "../ProduitController.js";
import { FavorisController } from "../FavorisController.js";
const produitController = new ProduitController();
const favoriController = new FavorisController();
const container = document.querySelector("#liste-produits");
produitController.getAllProduits().then((produits) => {
    displayProduits(container, produits);
});
let taille = null;
let categ = null;
let coloris = null;
function displayProduits(container, produits) {
    container.innerHTML = "";
    for (const produit of produits) {
        container.innerHTML += `
    <div class="col-md-4">
          <div class="card mb-2">
            <img src="${produit.image_var}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${produit.nom_prod}</h5>
              <p class="card-text">${produit.prix}€</p>
              <a href="#" class="btn btn-success" data-num-prod="${produit.num_prod}">Voir</a>
              <a href="#" class="btn btn-warning" data-num-prod="${produit.num_prod}">Ajouter aux favoris</a>
            </div>
          </div>
     </div>
    `;
        document.querySelectorAll(".btn-success").forEach(btn => {
            btn.addEventListener("click", () => {
                location.href = `/pageArticle.html?num_prod=${btn.dataset.numProd}`;
            });
        });
        document.querySelectorAll(".btn-warning").forEach(btn => {
            btn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                const newFavoris = yield favoriController.addFavori(btn.dataset.numProd);
                location.href = "/accueil.html";
            }));
        });
    }
}
document.querySelectorAll('input[name="size"]').forEach(input => {
    input.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        if (input.value === "all") {
            produitController.getAllProduits().then((produits) => {
                displayProduits(container, produits);
            });
            return;
        }
        taille = input.value;
        const products = yield produitController.getProduitsFiltered(categ, taille, coloris);
        console.log(products);
        displayProduits(container, products);
    }));
});
document.querySelectorAll('input[name="color"]').forEach(input => {
    input.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        if (input.value === "all") {
            produitController.getAllProduits().then((produits) => {
                displayProduits(container, produits);
            });
            return;
        }
        coloris = input.value;
        const products = yield produitController.getProduitsFiltered(categ, taille, coloris);
        console.log(products);
        displayProduits(container, products);
    }));
});
document.querySelectorAll('input[name="type"]').forEach(input => {
    input.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        if (input.value === "all") {
            produitController.getAllProduits().then((produits) => {
                displayProduits(container, produits);
            });
            return;
        }
        categ = input.value;
        const products = yield produitController.getProduitsFiltered(categ, taille, coloris);
        console.log(products);
        displayProduits(container, products);
    }));
});
