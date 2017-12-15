<?php include('functions.php') ?>
<!DOCTYPE html>
<html>
<head>
	<title>Login|BarnYardBalance</title>
	<link rel="stylesheet" href="css/style.css">
</head>
    <style>
        var modal = document.getElementById('id01');
        window.onclick = function(event) {
            if(event.target == modal) {
                modal.style.display = "none";
            }
        }
    </style>
    <body>
        
        <div>
            <img src="assets/login/login.jpg" width="1280" height="720" alt="login" usemap="#loginmap">
            <map name="loginmap">
            <area shape="rect" coords="596,304,689,334" alt="Login" nohref onClick="document.getElementById('id01').style.display='block'">
            </map>
        </div>
        <div id="id01" class="modal">
            <form class="modal-content animate" method="post" action="login.php">
                
                <?php echo display_error(); ?>
                
                <div class="imgcontainer">
                    <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
                    <img src="assets/login/corn.jpg" alt="Avatar" class="avatar">
                </div>
                <div class="input-group">
    			    <label>Username</label>
    			    <input type="text" name="username" >
    	    	</div>
    		    <div class="input-group">
    			    <label>Password</label>
    			    <input type="password" name="password">
    	    	</div>
    	    	<div class="input-group">
    		    	<button type="submit" class="btn" name="login_btn">Login</button>
    		    </div>
    		    <p>
    		    	Not yet a member? <a  href="register.php" >sign up</a>
    		    </p>
            </form>
        </div>
    </body>
</html>