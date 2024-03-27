<?php

function getProduitById(string $id) {
    global $db;
    $dbStatement = $db->prepare("SELECT PRODUIT.num_prod, nom_prod, desc_prod, image_var, prix FROM PRODUIT, VARIANTE
    WHERE PRODUIT.num_prod = VARIANTE.num_prod
    AND PRODUIT.num_prod = ?");
    $dbStatement->execute([$id]);
    $produit = $dbStatement->fetchAll(PDO::FETCH_ASSOC);

    return json_encode($produit);
}