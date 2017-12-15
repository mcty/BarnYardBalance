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
        <title>Performance Sheet|BarnYardBalance</title>
        <style>
            table, th, td {
            	border: 1px solid black;
	        }
	    </style>
    </head>
    <body>
        <h2>Current Performance</h2>
				<?php  if (isset($_SESSION['user'])) : ?>
					<?php
				    	echo "<table><tr><th>Average Speed to Answer</th><th>Average Talk Time</th><th>Call Handle Time</th><th>After Call Work Time</th><th>Occupancy Rate</th><th>Idle Time</th><th>Average Hold Time</th><th>Call Transfer Time</th></tr>";
			       		echo "<tr><td>" . ucfirst($_SESSION['user']['ASA']). "</td><td>" . ucfirst($_SESSION['user']['ATT']). "</td><td>" . ucfirst($_SESSION['user']['CHT']). "</td><td>" . ucfirst($_SESSION['user']['ACW']) . "</td><td>" . ucfirst($_SESSION['user']['ORR']). "</td><td>" . ucfirst($_SESSION['user']['ITT']). "</td><td>" . ucfirst($_SESSION['user']['AHT']). "</td><td>" . ucfirst($_SESSION['user']['CTI']). "</td></tr>";
		            ?>
				<?php endif ?>
        <a href="index.php" style="color: black;">Back</a>
    </body>
</html>