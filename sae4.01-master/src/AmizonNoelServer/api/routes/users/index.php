<?php
session_start();
header("Access-Control-Allow-Origin: http://localhost:8000");
header("Access-Control-Allow-Credentials: true");
include_once (dirname(__DIR__) . "../../../connexion.php");
include (dirname(__DIR__) . '../../../auth/isThereSession.php');
include (dirname(__DIR__) . '../../functions/users/getUserById.php');



echo getUserById("10");
