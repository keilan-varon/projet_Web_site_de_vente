<?php
session_start();
include_once (dirname(__DIR__) . "../../../connexion.php");
// include (dirname(__DIR__) . "../../../cors.php");
// include (dirname(__DIR__) . '../../../auth/isThereSession.php');
include (dirname(__DIR__) . '../../functions/commandes/getAllCommandesofUser.php');
include (dirname(__DIR__) . '../../functions/commandes/addCommande.php');
include (dirname(__DIR__) . '../../functions/panier/getPanierByUser.php');
include (dirname(__DIR__) . '../../functions/panier/deletePanierByUser.php');

header("Content-Type: application/json");
cors();

if($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Récupérer toutes les commandes associées à l'utilisateur courant
<<<<<<< HEAD
    $commandes = getAllCommandesofUser("10");
=======
    $commandes = getAllCommandesofUser('10');
>>>>>>> c6e7eec (ajout page commande)
    echo $commandes;

} else if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    /*recupere pour chaque produit sa variante et sa quantité dans le json de la requete getPanierByUser
    et l'ajoute au commande */
    
    $panier = getPanierByUser('10');

<<<<<<< HEAD
   
            //ajout du panier dans la liste des commandes
        $ajoutcomm = addCommande("10");
        echo json_encode($ajoutcomm);
   
    
   
        //suppresion du panier dans la table PANIER apres ajout dans la table COMMANDE
        $supPanier = deletePanierByUser("10");
        echo $supPanier;
=======
    foreach($panier as $ligne){

        $ajoutcomm = addCommande($ligne['num_compte'],$ligne['num_panier'],$ligne['qte'],$ligne['num_var'],$ligne['date']);
        echo json_encode($ajoutcomm);


    }
    $supPanier = deletePanierByUser('10');
    echo $supPanier;
>>>>>>> c6e7eec (ajout page commande)

}
