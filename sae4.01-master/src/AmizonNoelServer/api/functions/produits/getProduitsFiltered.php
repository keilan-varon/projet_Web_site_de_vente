<?php

function getProduitsFiltered(string | null $categ, string | null $taille, string | null $coloris) {
    global $db;
    
    // Toutes catégories confondus, avec filtre sur la taille et le coloris
    if($categ == null && $taille && $coloris) {
        $sql = "SELECT PRODUIT.num_prod, nom_prod, desc_prod 
        FROM PRODUIT, VARIANTE 
        WHERE PRODUIT.num_prod = VARIANTE.num_prod 
        AND VARIANTE.taille = ? 
        AND VARIANTE.coloris = ?
        GROUP BY PRODUIT.num_prod";
        $dbStatement = $db->prepare($sql);
        $dbStatement->execute([$taille, $coloris]);

    } else if ($categ == null && $taille && $coloris == null) {
        // Toutes catégories confondues, avec filtre sur la taille seulement
 
        $sql = "SELECT PRODUIT.num_prod, nom_prod, desc_prod, image_var, prix, coloris
        FROM VARIANTE, PRODUIT
        WHERE VARIANTE.taille = ?
        AND PRODUIT.num_prod = VARIANTE.num_prod
        GROUP BY PRODUIT.num_prod
                ";
        $dbStatement = $db->prepare($sql);
        $dbStatement->execute([$taille]);

    } else if($categ == null && $taille == null && $coloris) {
        // Toutes catégories confondues, avec filtre sur le coloris seulement

        $sql = "SELECT PRODUIT.num_prod, nom_prod, desc_prod, image_var, prix, coloris
        FROM VARIANTE, PRODUIT
        WHERE VARIANTE.coloris = ?
        AND PRODUIT.num_prod = VARIANTE.num_prod
        GROUP BY PRODUIT.num_prod 
        ";
        $dbStatement = $db->prepare($sql);
        $dbStatement->execute([$coloris]);

    } else if($categ && $taille == null && $coloris) {     
        // Catégorie d'un produit avec filtre sur le coloris seulement

        $sql = "SELECT PRODUIT.num_prod, nom_prod, desc_prod, prix, taille, coloris, nom_categ
        FROM PRODUIT , VARIANTE , CATEGORIE
        WHERE VARIANTE.num_prod = PRODUIT.num_prod
        AND CATEGORIE.no_categ = PRODUIT.no_categ
        AND CATEGORIE.nom_categ = ?
        AND VARIANTE.coloris = ? 
                ";
        $dbStatement = $db->prepare($sql);
        $dbStatement->execute([$categ, $coloris]);

    } else if($categ && $taille && $coloris) {
        // Catégorie d'un produit avec filtre sur la taille et le coloris

        $sql = "SELECT p.num_prod, nom_prod, desc_prod, taille, prix, image_var
                    FROM PRODUIT p, VARIANTE v, CATEGORIE c 
                    WHERE p.num_prod = v.num_prod
                    AND p.no_categ = c.no_categ
                    AND c.nom_categ = ?
                    AND v.taille = ?  
                    AND v.coloris = ?
            ";
        $dbStatement = $db->prepare($sql);
        $dbStatement->execute([$categ, $taille, $coloris]);

    } else if($categ && $taille && $coloris == null) {
        // Catégorie d'un produit avec filtre sur la taille seulement

        $sql = "SELECT p.num_prod, nom_prod, desc_prod, taille, prix, image_var
        FROM PRODUIT p, VARIANTE v, CATEGORIE c 
        WHERE p.num_prod = v.num_prod
        AND p.no_categ = c.no_categ
        AND c.nom_categ = ?
        AND v.taille = ?
        GROUP BY v.num_prod;
        ";
        
        $dbStatement = $db->prepare($sql);
        $dbStatement->execute([$categ, $taille]);
    } else if($categ && $taille == null && $coloris == null) {
        // Catégorie d'un produit sans filtre
        $sql = "SELECT p.num_prod, nom_prod, desc_prod, taille, prix, image_var
        FROM PRODUIT p, CATEGORIE c, VARIANTE
        WHERE p.no_categ = c.no_categ
        AND c.nom_categ = ?
        AND VARIANTE.num_prod = p.num_prod
        GROUP BY VARIANTE.num_prod
        ";

        $dbStatement = $db->prepare($sql);
        $dbStatement->execute([$categ]);
    }
    
    $produit = $dbStatement->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($produit);
}