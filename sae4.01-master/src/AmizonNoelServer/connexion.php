<?php
include "credentials.php";

try {
   $db = new PDO("mysql:host=" . HOST . ";dbname=" . DATABASE_NAME . ";charset=utf8", USER, PASSWORD);
} catch (e) {
    echo var_dump(e);
}