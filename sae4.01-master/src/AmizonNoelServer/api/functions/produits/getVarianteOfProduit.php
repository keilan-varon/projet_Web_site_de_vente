<?php

function getVarianteOfProduit(string $produit) {
    global $db;
    $dbStatement = $db->prepare("SELECT num_var, taille, coloris, image_var, prix 
                                    FROM VARIANTE 
                                    WHERE VARIANTE.num_prod = ? "
                                    );

    $dbStatement->execute([$produit]);
    $VarianteProduit = $dbStatement->fetchAll(PDO::FETCH_ASSOC);

    return json_encode($VarianteProduit);
}