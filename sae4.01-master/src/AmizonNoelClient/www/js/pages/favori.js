var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { FavorisController } from "../FavorisController.js";
const favoriController = new FavorisController();
const container = document.querySelector("#liste-favoris");
function displayProduits(container, favoris) {
    container.innerHTML = "";
    for (const produit of favoris) {
        container.innerHTML += `
      <div class="col-md-4">
            <div class="card mb-2">
              <img src="${produit.image_var}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${produit.nom_prod}</h5>
                <p class="card-text">${produit.prix}€</p>
                <a href="#" class="btn btn-danger" data-num-prod="${produit.num_prod}">Supprimer</a>
              </div>
            </div>
       </div>
      `;
        document.querySelectorAll(".btn-danger").forEach(btn => {
            btn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                const newFavoris = yield favoriController.deleteFavori(btn.dataset.numProd);
                location.href = "/favori.html";
            }));
        });
    }
}
favoriController.getFavoris().then((favoris) => {
    let favorisTab = JSON.parse(favoris.toString());
    displayProduits(container, favorisTab);
});
