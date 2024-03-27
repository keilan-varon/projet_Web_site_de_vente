<?php

include "getUserById.php";

function addUser(string $nom, string $prenom, string $adresse, string $mail, string $login, string $mdp) {
    global $db;
    $dbStatement1 = $db->prepare("INSERT INTO CLIENT (nom_cl, prenom_cl, adresse_cl, mail_cl) VALUES (?, ?, ?, ?)");
    $dbStatement2 = $db->prepare("INSERT INTO COMPTE (login, mdp, num_cl) VALUES (?, ?, ?)");

    $hashedMdp = password_hash($mdp, PASSWORD_DEFAULT);

    $dbStatement1->execute([$nom,$prenom,$adresse,$mail]);
    $id = $db->lastInsertId();
    $dbStatement2->execute([$login, $hashedMdp, $id]);

    $addedUser = getUserById($id);

    return $addedUser;

}