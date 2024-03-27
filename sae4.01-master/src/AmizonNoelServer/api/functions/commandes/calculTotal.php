<?php

function calculTotal(string $commande) {
    global $db;
    $dbStatement = $db->prepare("SELECT ROUND(SUM(prix * C.qte)) as prixtotal 
                                    FROM COMMANDE C,VARIANTE V 
                                        WHERE C.num_var=V.num_var
                                        AND date= ?");
    $dbStatement->execute([$commande]);
    $commande = $dbStatement->fetchAll(PDO::FETCH_ASSOC);

    return json_encode($commande);
}