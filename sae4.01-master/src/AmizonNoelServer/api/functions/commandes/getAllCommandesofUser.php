<?php

function getAllCommandesofUser(string $compte) {
    global $db;
    $dbStatement = $db->prepare("SELECT num_com, num_var, qte, date FROM COMMANDE WHERE COMMANDE.num_compte = ?");
    $dbStatement->execute([$compte]);
    $commuser = $dbStatement->fetchAll(PDO::FETCH_ASSOC);

    return json_encode($commuser);
}
