<?php
include_once "getPanierByUser.php";

function deleteProduit(string $compte, string $variante) {
    global $db;
    $dbStatement = $db->prepare("DELETE FROM PANIER 
                                    WHERE num_compte = ? 
                                    AND num_var = ?" );    
    
    
    if($dbStatement->execute([$compte, $variante])){
        $produits = getPanierByUser($compte);
        return $produits;
    };
}