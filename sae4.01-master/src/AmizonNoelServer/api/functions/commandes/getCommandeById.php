<?php

function getCommandeById(string $commande) {
    global $db;
    $dbStatement = $db->prepare("SELECT * FROM COMMANDE WHERE num_com = ?");
    $dbStatement->execute([$commande]);
    $commande = $dbStatement->fetchAll(PDO::FETCH_ASSOC);

    return json_encode($commande);
}