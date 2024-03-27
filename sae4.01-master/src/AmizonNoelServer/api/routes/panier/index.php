<?php
session_start();
include_once (dirname(__DIR__) . "../../../connexion.php");
include (dirname(__DIR__) . "../../../cors.php");
include (dirname(__DIR__) . '../../../auth/isThereSession.php');
include (dirname(__DIR__) . '../../functions/panier/getPanierByUser.php');
include (dirname(__DIR__) . '../../functions/panier/addProduit.php');
include (dirname(__DIR__) . '../../functions/panier/deleteProduit.php');

header("Content-Type: application/json");
cors();

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if($_SERVER['REQUEST_METHOD'] === 'GET') {
    // On récupère le panier de l'utilisateur courant
    echo json_encode(getPanierByUser("10"));
} else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // On ajoute la variante du produit au panier de l'utilsiateur
    if($data["num_var"] && $data["qte"]) {
        $produits = addProduit("10", "10", $data["num_var"], $data["qte"]);
        echo $produits;
    } else {
        http_response_code(400);
        echo json_encode([
            "errorMessage" => "Une erreur est survenue pendant l'ajout."
        ]);
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // On supprime la variante du produit dans le panier
    if($data["num_var"]) {
        $produits = deleteProduit("10", $data["num_var"]);
        echo $produits;
    } else {
        http_response_code(400);
        echo json_encode([
            "errorMessage" => "Une erreur est survenue pendant la suppression."
        ]);
    }
}