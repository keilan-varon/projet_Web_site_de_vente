<?php
session_start();
include_once (dirname(__DIR__) . "../../../connexion.php");
// include (dirname(__DIR__) . "../../../cors.php");
// include (dirname(__DIR__) . '../../../auth/isThereSession.php');
include (dirname(__DIR__) . '../../functions/favoris/addFavori.php');
include (dirname(__DIR__) . '../../functions/favoris/deleteFavori.php');



header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");



$json = file_get_contents('php://input');
$data = json_decode($json, true);

if($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Récupérer les favoris de l'utilisateur connecté
    echo json_encode(getFavByUser("10"));
} else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Ajouter un favori à l'utilisateur connecté
    if($data["num_prod"]) {
        $favoris = addFavori("10", $data["num_prod"]);
        echo $favoris;
    } else {
        http_response_code(400);
        echo json_encode([
            "errorMessage" => "Une erreur est survenue pendant l'ajout."
        ]);
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Supprimer un favori à l'utilisateur connecté
    if($data["num_prod"]) {
        $favoris = deleteFavori("10", $data["num_prod"]);
        echo $favoris;
    } else {
        http_response_code(400);
        echo json_encode([
            "errorMessage" => "Une erreur est survenue pendant la suppression."
        ]);
    }
}
