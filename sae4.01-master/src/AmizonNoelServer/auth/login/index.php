<?php
session_start();
include_once (dirname(__DIR__) . "../../connexion.php");
include (dirname(__DIR__) . "../../api/functions/users/userExists.php");
include (dirname(__DIR__) . "../../api/functions/users/getCompteId.php");
include (dirname(__DIR__) . "../../api/functions/favoris/getFavByUser.php");
include (dirname(__DIR__) . "../createSession.php");

header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');

    
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



if(!empty($data["mail"]) && !empty($data["mdp"])) {
    // Vérifier si les informations de connexions sont correctes
    $user = userExists($data["mail"], $data["mdp"]);

    // Si l'utilisateur existe, on crée une session
    if($user) {
        createSession($user);
        http_response_code(200);
        echo json_encode([
            "login" => $_SESSION["login"]
        ]);
    } else {
        http_response_code(400);
        echo json_encode([
            "errorMessage" => "Les identifiants sont incorrects"
        ]);
    }

} else {
    http_response_code(400);
    echo json_encode([
        "errorMessage" => "Un ou plusieurs champs sont manquants"
    ]);
}



// Méthode POST pour vérifier les login
// Si succès, création d'une session