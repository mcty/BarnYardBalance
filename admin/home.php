<?php 
include('../functions.php');
// Check whether it's admin or not
if (!isAdmin()) {
	$_SESSION['msg'] = "You must log in first";
	header('location: ../login.php');
}
// check whether it's login or not
if (isset($_GET['logout'])) {
	session_destroy();
	unset($_SESSION['user']);
	header("location: ../login.php");
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Home</title>

	<style>
	.header {
		background: #003366;
	}
	button[name=register_btn] {
		background: #003366;
	}
	table, th, td {
    	border: 1px solid black;
	}
	</style>
</head>
<body>
	<div class="header">
		<h2>Admin - Home Page</h2>
	</div>
	
	<div class="content">
		
		<!-- notification message -->
		<!-- change : may try to do it later -->
		<?php if (isset($_SESSION['success'])) : ?>
			<div class="error success" >
				<h3>
					<?php 
						echo $_SESSION['success']; 
						unset($_SESSION['success']);
					?>
				</h3>
			</div>
		<?php endif ?>

		<!-- logged in user information -->
		<div class="profile_info">
			<div>
				<!-- change? -->
				<?php  if (isset($_SESSION['user'])) : ?>
					<strong><?php echo $_SESSION['user']['username']; ?></strong>

					<small>
						<i  style="color: #888;">(<?php echo ucfirst($_SESSION['user']['user_type']); ?>)</i> 
						<br>
						<a href="home.php?logout='1'" style="color: red;">logout</a>
                       &nbsp; <a href="create_user.php"> + add user</a>
					</small>

				<?php endif ?>
			</div>
		</div>
	</div>
	<div>
		<?php
			echo "<br>";
			$db = mysqli_connect('localhost', 'root', '', 'c9');
			if(!$db){
				echo "Failed to connect.";
			}
			else{
				$query = "SELECT * FROM `users`";
				$results = mysqli_query($db, $query);
				$total_results= mysqli_num_rows($results);
				if ($total_results > 0){
					echo "<table><tr><th>ID</th><th>Username</th><th>Email</th><th>User_type</th><th>Average Speed to Answer</th><th>Average Talk Time</th><th>Call Handle Time</th><th>After Call Work Time</th><th>Occupancy Rate</th><th>Idle Time</th><th>Average Hold Time</th><th>Call Transfer Time</th><th>Edit</th><th>Delete</th></tr>";
					while($row = mysqli_fetch_assoc($results)) {
						echo "<tr><td>" . $row["id"]. "</td><td>" . $row["username"]. "</td><td>" . $row["email"]. "</td><td>" . $row["user_type"] . "</td><td>" . $row["ASA"] . "</td><td>" . $row["ATT"] . "</td><td>" . $row["CHT"] . "</td><td>" . $row["ACW"] . "</td><td>" . $row["ORR"] . "</td><td>" . $row["ITT"] . "</td><td>" . $row["AHT"] . "</td><td>" . $row["CTT"] . "</td>";
						echo '<td><a href="edit.php?id=' . $row['id'] . '">Edit</a></td>';
						echo '<td><a href="delete.php?id=' . $row['id'] . '">Delete</a></td></tr>';
					}
				}
				else{
					echo "0 results";
				}
			}
		?>
	</div>
	
</body>
</html>
