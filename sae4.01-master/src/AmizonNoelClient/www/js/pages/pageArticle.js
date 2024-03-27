import { ProduitController } from "../ProduitController.js";
const produitController = new ProduitController();
produitController.getProduitById(new URLSearchParams(document.location.search).get("num_prod")).then((variantes) => {
    console.log(variantes);
    document.querySelector("#detail-produit").innerHTML = `
    <div class="row">
    <div class="col-md-6">
      <img
        src="${variantes[0].image_var}"
        alt="${variantes[0].nom_prod}"
        class="img-fluid"
      />
    </div>
    <div class="col-md-6">
      <h2>${variantes[0].nom_prod}</h2>
      <p>
        ${variantes[0].desc_prod}
      </p>
      <h4>Prix : ${variantes[0].prix}€</h4>
      <p>Disponibilité : En stock</p>
      <!-- Ajouter au panier -->
      <div class="d-flex">
        <div class="input-group mr-2" style="width: 100px">
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-minus"
            >
              -
            </button>
          </div>
          <input
            type="text"
            class="form-control text-center"
            value="1"
            id="quantity"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-plus"
            >
              +
            </button>
          </div>
        </div>
        <button class="btn btn-primary" type="button">
          Ajouter au panier
        </button>
      </div>
    </div>
  </div>
    `;
});
