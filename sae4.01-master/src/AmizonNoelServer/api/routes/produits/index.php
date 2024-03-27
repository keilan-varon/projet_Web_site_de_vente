<?php
include_once (dirname(__DIR__) . "../../../connexion.php");
include (dirname(__DIR__) . '../../functions/produits/getAllProduits.php');
include (dirname(__DIR__) . '../../functions/produits/getProduitById.php');
include (dirname(__DIR__) . '../../functions/produits/getProduitsByName.php');
include (dirname(__DIR__) . '../../functions/produits/getProduitsFiltered.php');
include (dirname(__DIR__) . '../../functions/produits/getVarianteOfProduit.php');



header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");


 // Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
    // you want to allow, and if so:
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    }
        // may also be using PUT, PATCH, HEAD etc
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }
       
    header("Access-Control-Allow-Origin: *");

    exit(0);
}


$json = file_get_contents('php://input');
$data = json_decode($json, true);

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    if(array_key_exists("num_prod", $data) && $data["variantes"] === true) {  // Récupérer un produit en particulier renvoie le produit avec toutes ses variantes
        echo getVarianteOfProduit($data["num_prod"]);
    } else if(array_key_exists("nom_prod", $data)) {  // Récupérer les produits par nom
        echo getProduitsByName($data["nom_prod"]);
    } else if(array_key_exists("nom_categ", $data) && array_key_exists("taille", $data) && array_key_exists("coloris", $data)) { // Récupérer les produits filtrés
        echo getProduitsFiltered($data["nom_categ"], $data["taille"], $data["coloris"]);
    } else if (array_key_exists("num_prod", $data) && $data["variantes"] === false) { // Récupérer le produit selon l'id
        echo getProduitById($data["num_prod"]);
    }
   
} else {
    echo getAllProduits();
}

