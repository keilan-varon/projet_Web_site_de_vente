<?php
session_start();

$_SESSION = array();

include (dirname(__DIR__) . "../../cors.php");
cors();

if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
    session_destroy();
    http_response_code(200);
    echo json_encode([
        "message" => "Vous avez bien été déconnecté"
    ]);
}

