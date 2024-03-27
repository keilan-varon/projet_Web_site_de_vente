<?php

function getUserById(string $user) {
    global $db;
    $dbStatement = $db->prepare("SELECT c.num_cl, nom_cl, prenom_cl, adresse_cl, mail_cl, login FROM CLIENT c, COMPTE co WHERE c.num_cl = co.num_cl AND c.num_cl = ?");
    $dbStatement->execute([$user]);
    $user = $dbStatement->fetchAll(PDO::FETCH_ASSOC);

    return json_encode($user);
}
