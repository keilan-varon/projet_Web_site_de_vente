<?php

function getProduitByName(string $name) {
    global $db;
    $dbStatement = $db->prepare("SELECT * FROM PRODUIT WHERE nom_prod LIKE :queryString");
    $dbStatement->execute([":queryString" => "%" . $name . "%" ]);
    $produits = $dbStatement->fetchAll(PDO::FETCH_ASSOC);

    return json_encode($produits);
}