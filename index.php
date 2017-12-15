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
	<title>Home|BarnYardBalance</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div>
		<?php  if (isset($_SESSION['user'])) : ?>
            <img src="assets/webapp/barnhome.jpg" width="1280" height="720" alt="barnhome" usemap="#homemap">
            <map name="homemap">
            <area shape="rect" coords="572,298,695,324" alt="Manage Farm" href="barnyardbalance.php">
            <area shape="rect" coords="563,339,712,366" alt="Performance Sheet" href="performance.php">
            <area shape="rect" coords="602,381,673,407" alt="Logout" href="index.php?logout='1'">
            </map>
        <?php endif ?>
    </div>
</body>
</html>