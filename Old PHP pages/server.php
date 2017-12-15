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

// variable declaration
$username = "";
$email    = "";
$admin    = "";
$errors = array(); 
$_SESSION['success'] = "";

// connect to database 
$db = mysqli_connect('localhost', 'root', '', 'c9');

// REGISTER USER
if (isset($_POST['reg_user'])) {
	// receive all input values from the form
	$username = mysqli_real_escape_string($db, $_POST['username']);
	$email = mysqli_real_escape_string($db, $_POST['email']);
	$password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
	$password_2 = mysqli_real_escape_string($db, $_POST['password_2']);

	// form validation: ensure that the form is correctly filled
	if (empty($username)) { array_push($errors, "Username is required"); }
	if (empty($email)) { array_push($errors, "Email is required"); }
	if (empty($password_1)) { array_push($errors, "Password is required"); }

	if ($password_1 != $password_2) {
		array_push($errors, "The two passwords do not match");
	}

	// register user if there are no errors in the form
	if (count($errors) == 0) {
		$password = ($password_1);//encrypt the password before saving in the database
		$query = "INSERT INTO users (username, email, password) 
				  VALUES('$username', '$email', '$password')";
		mysqli_query($db, $query);

		$_SESSION['username'] = $username;
		$_SESSION['success'] = "You are now logged in";
		header('location: index.php');
	}

}
// LOGIN USER
if (isset($_POST['login_user'])) {
	$username = mysqli_real_escape_string($db, $_POST['username']);
	$password = mysqli_real_escape_string($db, $_POST['password']);

	if (empty($username)) {
		array_push($errors, "Username is required");
	}
	if (empty($password)) {
		array_push($errors, "Password is required");
	}

	if (count($errors) == 0) {
		$password = $password;
		$query = "SELECT * FROM users WHERE username='$username' AND password='$password' AND admin='$admin'";
		$results = mysqli_query($db, $query);

		if (mysqli_num_rows($results) == 1) {
			//check if admin
			$_SESSION['username'] = $username;
			$_SESSION['admin'] = $admin;
			$_SESSION['success'] = "You are now logged in";
			if($admin == '1') {
				header('location: home.php');
			}
			else{
				header('location: index.php');
			}
		}else {
			array_push($errors, "Wrong username/password combination");
		}
	}
}


?>