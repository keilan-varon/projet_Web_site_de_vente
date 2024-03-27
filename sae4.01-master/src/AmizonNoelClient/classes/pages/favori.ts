import { FavorisController, Favori } from "../FavorisController.js";
import { Produit } from "./accueil.js";

const favoriController = new FavorisController();

const container = document.querySelector("#liste-favoris") as HTMLDivElement;


function displayProduits(container: HTMLElement, favoris: Produit[]) {
    container.innerHTML = "";
    for(const produit of favoris) {
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
      
      (document.querySelectorAll(".btn-danger") as NodeListOf<HTMLElement>).forEach(btn => {
        btn.addEventListener("click", async () => {
          const newFavoris = await favoriController.deleteFavori(btn.dataset.numProd!);
          location.href = "/favori.html";
        });
      })
  
    }
  }

  
favoriController.getFavoris().then((favoris: Favori[]) => {
    let favorisTab = JSON.parse(favoris.toString())
    displayProduits(container, favorisTab);
});
  