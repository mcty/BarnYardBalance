<!--
 *Project: Barn Yard Balance
 *Date: 11/9/17
 *Page: Home page for admins.
 *Info: 
 *Features:
 *      -future features will be listed here
 *Created By:
 *      TM, AH, ES, CY
-->

<?php 
session_start();
	if (!isset($_SESSION['username']) && $_SESSION['admin'] == '1') {
		$_SESSION['msg'] = "You must log in first";
		$message = "1";
        echo "<script type='text/javascript'>alert('$message');</script>";
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
   <title>Admin Home</title>
</head>

<body>
<h1>Not for regular users</h1>
        <!-- logged in user information -->
        <?php  if (isset($_SESSION['username'])) : ?>
        <p>Welcome <strong><?php echo $_SESSION['username']; ?></strong></p>
        <p> <a href="index.php?logout='1'" style="color: red;">logout</a> </p>
        <?php endif ?>
</body>

</html>