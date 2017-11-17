<!--
 *Project: Barn Yard Balance
 *Date: 11/9/17
 *Page: Login page.
 *Info: This is the first page to be viewed and to access the website. The user
 *      must input their login credentials which will then be verified in the
 *      database. The page features a background that is welcoming to the user
 *      and a login button.
 *Features:
 *      -Login button which brings up login window
 *      -future features will be listed here
 *Created By:
 *      TM, AH, ES, CY
-->

<?php include('server.php')?>
<!DOCTYPE html>
<html>
    <head>
        
        <link rel="stylesheet" href="css/style.css" />
        
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
                <img src="assets/login.jpg" width="1280" height="720" alt="login" usemap="#loginmap">
                <map name="loginmap">
                <area shape="rect" coords="596,304,689,334" alt="Login" nohref onClick="document.getElementById('id01').style.display='block'">
                </map>
            </div>
            
            <div id="id01" class="modal">
                <form class="modal-content animate" method="post" action="login.php">

                    <!-- <?php include('errors.php'); ?> -->
                    <div class="imgcontainer">
                        <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
                        <img src="assets/corn.jpg" alt="Avatar" class="avatar">
                    </div>

                    <div class="input-group">
                        <label>Username</label>
                        <input type="text" name="username">

                        <label>Password</label>
                        <input type="password" name="password">

                        <button type="submit" class="btn" name="login_user">Login</button>

                    </div>
                </form>
            </div>
        </body>
    </head>
</html>