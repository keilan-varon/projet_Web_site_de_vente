<?php

function getPanierById(string $panierid) {
    global $db;
    $dbStatement = $db->prepare("SELECT PANIER.num_var, qte , PRODUIT.num_prod, image_var, prix, PRODUIT.nom_prod
    FROM PANIER, PRODUIT, VARIANTE
        WHERE PANIER.num_var = VARIANTE.num_var
        AND PANIER.num_panier = ?
        AND VARIANTE.num_prod = PRODUIT.num_prod"
                                    );

    $dbStatement->execute([$panierid]);
    $panierUtilisateur = $dbStatement->fetchAll(PDO::FETCH_ASSOC);

    return json_encode($panierUtilisateur);
}