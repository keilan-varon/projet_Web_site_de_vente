<?php

function userExists(string $mail, string $mdp) {
    global $db;
    $dbStatement = $db->prepare("SELECT c.num_cl, mail_cl, login, mdp FROM CLIENT c, COMPTE co WHERE mail_cl = ? AND c.num_cl = co.num_cl");
    $dbStatement->execute([$mail]);
    $user = $dbStatement->fetchAll(PDO::FETCH_ASSOC);

    if(!$user) {
        return false;
    }
    
    $isValidMdp = password_verify($mdp, $user[0]["mdp"]);

    if($isValidMdp) {
        return $user;
    } else {
        return false;
    }
}
