<?php

function getAllUsers() {
    global $db;
    $dbStatement = $db->prepare("SELECT * FROM CLIENT");
    $dbStatement->execute();
    $users = $dbStatement->fetchAll(PDO::FETCH_ASSOC);
    
    return json_encode($users);
}