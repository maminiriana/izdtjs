<?php
	//initilisation de la sessions
	ini_set("register_globals","off");
	ini_set("display_errors","off");
	session_start();
	$_SESSION["session"]="";
	
	$requete->nom="";

	$requete->erreurs=array();
	include"templates/reserv.php";
	exit(0);	
	
?>
