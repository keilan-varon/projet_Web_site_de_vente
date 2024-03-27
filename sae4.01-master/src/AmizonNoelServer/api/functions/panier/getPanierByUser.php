<?php

function getPanierByUser(string $compteid) {
    global $db;
    $dbStatement = $db->prepare("SELECT VARIANTE.num_prod ,nom_prod,PANIER.num_var, image_var , qte , prix
                                    FROM PANIER, PRODUIT,VARIANTE
                                    WHERE PANIER.num_var = VARIANTE.num_var
                                        AND VARIANTE.num_prod = PRODUIT.num_prod
                                        AND PANIER.num_compte = ?");


    $dbStatement->execute([$compteid]);
    $panierUtilisateur = $dbStatement->fetchAll(PDO::FETCH_ASSOC);

    return json_encode($panierUtilisateur);
}