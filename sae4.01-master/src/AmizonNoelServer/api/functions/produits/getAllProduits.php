<?php

function getAllProduits() {
    global $db;
    $dbStatement = $db->prepare("SELECT PRODUIT.num_prod, nom_prod, desc_prod, image_var, prix FROM PRODUIT, VARIANTE
    WHERE PRODUIT.num_prod = VARIANTE.num_prod
    GROUP BY VARIANTE.num_prod");
    $dbStatement->execute();
    $produits = $dbStatement->fetchAll(PDO::FETCH_ASSOC);

    return json_encode($produits);
}