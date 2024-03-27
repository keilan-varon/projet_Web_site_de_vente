<?php

function getInfoOfProduit(string $variante) {
    global $db;
    $dbStatement = $db->prepare("SELECT nom_prod, nom_categ, coloris, taille, prix
                                    FROM VARIANTE, PRODUIT, CATEGORIE 
                                    WHERE VARIANTE.num_var = ?
                                    AND PRODUIT.num_prod = VARIANTE.num_prod
                                    AND CATEGORIE.no_categ = PRODUIT.no_categ"
                                    );

    $dbStatement->execute([$variante]);
    $info = $dbStatement->fetchAll(PDO::FETCH_ASSOC);

    return json_encode($info);
}