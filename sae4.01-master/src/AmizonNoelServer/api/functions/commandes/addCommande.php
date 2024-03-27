<?php
include "getCommandeById.php";
function addProduitInCommande(string $compte, string $variante, string $qte) {
    global $db;
    $dateDuJour = date("Y-m-d");
    $dbStatement = $db->prepare("INSERT INTO COMMANDE (num_compte, num_var, qte, date) VALUES (?, ?, ?, ?)");
    
    

    if($dbStatement->execute([$compte,$variante,$qte])) {
        $id = $db->lastInsertId();
        $addedProduitInCommande = getCommandeById($id);
        return $addedProduitInCommande;
    }
    
}

function addCommande(string $compte){
   $articlePanier = json_decode(getPanierByUser($compte), true);

    foreach($articlePanier as $ligne){
        $addedCommande = addProduitInCommande($ligne['num_compte'], $ligne['num_var'], $ligne['qte']);
    }
}