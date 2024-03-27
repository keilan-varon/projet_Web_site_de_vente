<?php
include_once "getPanierByUser.php";

function addProduit(string $panier, string $compte, string $variante, string $qte) {
    global $db;
    $dbStatement = $db->prepare("INSERT INTO PANIER(num_panier, num_compte, num_var, qte)
                                    VALUES(?, ?, ?, ?)");
   
   
   if($dbStatement->execute([$panier, $compte, $variante, $qte])){
        $addProduit = getPanierByUser($compte);
        return $addProduit; 
   };

}
