<!--
 *Project: Barn Yard Balance
 *Date: 11/9/17
 *Page: Server page.
 *Info: This is the back end of the login which handles verification of users.
 *Features:
 *      -future features will be listed here
 *Created By:
 *      TM, AH, ES, CY
-->
<?php 
	session_start(); 

	if (!isset($_SESSION['username'])) {
		$_SESSION['msg'] = "You must log in first";
		header('location: login.php');
	}

	if (isset($_GET['logout'])) {
		session_destroy();
		unset($_SESSION['username']);
		header("location: login.php");
	}

?>
<!DOCTYPE html>
<html>
<head>
   <title>BarnYardBalance</title>
	<link href='http://fonts.googleapis.com/css?family=Press+Start+2P' rel='stylesheet' type='text/css'>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script type="text/javascript" src="gameFramework.js"></script>
	<script type="text/javascript" src="barnyardbalance.js"></script>
	<style>
	     html, body {
	         font-family: "Press Start 2P", cursive;
	     }
	</style>
</head>

<body>
    <div
    id="game" style="position: relative; width: 1280px; height: 720px; overflow: hidden">
	</div>
	
    <div class="content">

        <!-- notification message -->
        <?php if (isset($_SESSION['success'])) : ?>
        <div class="error success">
            <h3>
                <?php 
						echo $_SESSION['success']; 
						unset($_SESSION['success']);
					?>
            </h3>
        </div>
        <?php endif ?>

        <!-- logged in user information -->
        <?php  if (isset($_SESSION['username'])) : ?>
        <p>Welcome <strong><?php echo $_SESSION['username']; ?></strong></p>
        <p> <a href="index.php?logout='1'" style="color: red;">logout</a> </p>
        <?php endif ?>
    </div>
    
</body>

</html>
