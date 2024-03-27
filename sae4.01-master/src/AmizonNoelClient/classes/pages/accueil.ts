import { ProduitController } from "../ProduitController.js";
import { FavorisController } from "../FavorisController.js";

export interface Produit {
  num_prod: string;
  nom_prod: string;
  desc_prod: string;
  prix: string;
  image_var: string;
}

const produitController = new ProduitController();
const favoriController = new FavorisController();
const container = document.querySelector("#liste-produits") as HTMLDivElement;

produitController.getAllProduits().then((produits: Produit[]) => {
  displayProduits(container, produits);
});

let taille: string|null = null;
let categ: string|null = null;
let coloris: string|null = null;

function displayProduits(container: HTMLElement, produits: Produit[]) {
  container.innerHTML = "";
  for(const produit of produits) {
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
    
    (document.querySelectorAll(".btn-success") as NodeListOf<HTMLElement>).forEach(btn => {
      btn.addEventListener("click", () => {
        location.href = `/pageArticle.html?num_prod=${btn.dataset.numProd}`
      });
    });

    (document.querySelectorAll(".btn-warning") as NodeListOf<HTMLElement>).forEach(btn => {
      btn.addEventListener("click", async () => {
        const newFavoris = await favoriController.addFavori(btn.dataset.numProd!);
        location.href = "/accueil.html";
      });
    });

  }
}


(document.querySelectorAll('input[name="size"]') as NodeListOf<HTMLInputElement>).forEach(input => {
  input.addEventListener("click", async () => {
    if(input.value === "all") {
      produitController.getAllProduits().then((produits: Produit[]) => {
        displayProduits(container, produits);
      });
      return;
    }
    taille = input.value;
    const products = await produitController.getProduitsFiltered(categ, taille, coloris) as Produit[];
    console.log(products);
    displayProduits(container, products);
  })
});



(document.querySelectorAll('input[name="color"]') as NodeListOf<HTMLInputElement>).forEach(input => {
  input.addEventListener("click", async () => {
    if(input.value === "all") {
      produitController.getAllProduits().then((produits: Produit[]) => {
        displayProduits(container, produits);
      });
      return;
    }
    coloris = input.value;
    const products = await produitController.getProduitsFiltered(categ, taille, coloris) as Produit[];
    console.log(products);
    displayProduits(container, products);
  })
});


(document.querySelectorAll('input[name="type"]') as NodeListOf<HTMLInputElement>).forEach(input => {
  input.addEventListener("click", async () => {
    if(input.value === "all") {
      produitController.getAllProduits().then((produits: Produit[]) => {
        displayProduits(container, produits);
      });
      return;
    }
    categ = input.value;
    const products = await produitController.getProduitsFiltered(categ, taille, coloris) as Produit[];
    console.log(products);
    displayProduits(container, products);
  })
});
