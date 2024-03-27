<?php
if(!isset($_SESSION["num_cl"])) {
    http_response_code(401);
    echo json_encode([
        "errorMessage" => "Veuillez vous connecter pour accéder à cette fonctionnalité."
    ]);
}