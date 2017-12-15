<?php 
	include('functions.php');
	if (!isLoggedIn()) {
    	$_SESSION['msg'] = "You must log in first";
    	header('location: login.php');
    }
?>
<!DOCTYPE html>
<html>
    <head>
    	<?php  if (isset($_SESSION['user'])) : ?>
        <title>BYB|BarnYardBalance</title>
    	<link href='http://fonts.googleapis.com/css?family=Press+Start+2P' rel='stylesheet' type='text/css'>
    	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    	<script> global user_id = </script>
    	<script type="text/javascript" src="gameFramework.js"></script>
	    <script type="text/javascript" src="barnyardbalance.js"></script>
	    <style>
	            html, body {
	            font-family: "Press Start 2P", cursive;
	        }
	    </style>
	    <?php endif ?>
    </head>
    <div
    id="game" style="position: relative; margin:0px auto; width: 1280px; height: 720px; overflow: hidden">
	</div>
</html>