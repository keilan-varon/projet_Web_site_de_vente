<?php
include "connexion.php";
include "api/functions/produits/getAllProduits.php";
include "api/functions/produits/getProduitById.php";
include "api/functions/produits/getProduitsByName.php";
include "api/functions/produits/getProduitsFiltered.php";
include "api/functions/users/addUser.php";

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");


echo $_SERVER["REQUEST_URI"];

// Test

//echo getProduitsFiltered(null, null, "bleu");

// Test
// echo addUser("A","D","S","C","login","mdp");
//echo getUserById("2");
//echo getAllUsers();
//echo getAllCommandesofUser("1");
//echo getAllFav();
//echo addCommande("1","1");
// Point d'entrée du serveur - Toutes les routes seront gérées dans des fichiers se trouvant dans les sous-dossiers api et auth





