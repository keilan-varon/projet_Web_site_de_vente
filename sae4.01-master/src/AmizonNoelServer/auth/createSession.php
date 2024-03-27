<?php
include_once (dirname(__DIR__) . "../api/functions/favoris/getFavByUser.php");
include_once (dirname(__DIR__) . "../api/functions/panier/getPanierByUser.php");
include_once (dirname(__DIR__) . "../api/functions/users/getCompteId.php");

function createSession(array $user) {

    $compteid = getCompteId($user[0]["num_cl"]);
    $panier = json_decode(getPanierByUser($compteid), true);
    $favoris = json_decode(getFavByUser($compteid), true);

    $_SESSION["num_cl"] = $user[0]["num_cl"];
    $_SESSION["mail_cl"] = $user[0]["mail_cl"];
    $_SESSION["login"] = $user[0]["login"];
    $_SESSION["num_compte"] = $compteid;
    $_SESSION["panier"] = $panier;
    // Ajouter le panier après
}