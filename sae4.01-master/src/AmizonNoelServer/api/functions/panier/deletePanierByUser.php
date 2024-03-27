<?php
include_once "getPanierByUser.php";

function deletePanierByUser(string $compte) {
    global $db;
    $dbStatement = $db->prepare("DELETE FROM PANIER 
                                    WHERE num_compte = ?" 
                                    );    
    
    
    if($dbStatement->execute([$compte])){
        $produits = getPanierByUser($compte);
        return $produits;
    };
}