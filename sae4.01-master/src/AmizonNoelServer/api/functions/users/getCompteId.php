<?php

function getCompteId(string $user) {
    global $db;
    $dbStatement = $db->prepare("SELECT num_compte FROM COMPTE WHERE num_cl = ?");
    $dbStatement->execute([$user]);
    $user = $dbStatement->fetchAll(PDO::FETCH_ASSOC);

    return $user[0]["num_compte"];
}
