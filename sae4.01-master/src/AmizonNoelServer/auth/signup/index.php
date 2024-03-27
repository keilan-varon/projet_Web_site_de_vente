<?php
include_once (dirname(__DIR__) . "../../connexion.php");
include (dirname(__DIR__) . "../../cors.php");
include_once (dirname(__DIR__) . "../../api/functions/favoris/getFavByUser.php");
include_once (dirname(__DIR__) . "../../api/functions/users/userExists.php");
include_once (dirname(__DIR__) . "../../api/functions/users/addUser.php");


header("Content-Type: application/json");
cors();

$json = file_get_contents('php://input');
$data = json_decode($json, true);


if(isset($data["nom"]) && isset($data["prenom"]) && isset($data["adresse"]) && isset($data["mail"]) && isset($data["login"]) && isset($data["mdp"])) {

    // Vérifier si un utilisateur existe déjà avec le même mail
    $user = userExists($data["mail"], $data["mdp"]);

    // Si l'utilisateur n'existe pas, on l'inscrit dans la base
    if(!$user) {
        addUser($data["nom"], $data["prenom"], $data["adresse"], $data["mail"], $data["login"], $data["mdp"]);
        http_response_code(200);
        echo json_encode([
            "message" => "L'utilisateur a bien été inscrit"
        ]);
    } else {
        http_response_code(400);
        echo json_encode([
            "errorMessage" => "Un utilisateur existe déjà avec un mail identique."
        ]);
    }

} else {
    http_response_code(400);
    echo json_encode([
        "errorMessage" => "Un ou plusieurs champs sont manquants."
    ]);
}
