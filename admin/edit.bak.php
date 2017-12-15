<?php
// This is only for edit CSR
// Once "submit" button is clicked, header("Location: home.php")

// Need Session_start() for mysqli_connect()
session_start();

// mysqli_connect: since this is needed every time we use mysqli_query()
$_SESSION["con"] = mysqli_connect('localhost', 'root', '', 'c9');


// Initiate this before require "funEdit.php" so that it can get this value
$id = $_GET["id"];

// require the following php
require "funEdit.php";


// error check for both variables: mysqli_connect() and id
if (!$_SESSION["csrID"]) {
    echo "id variable empty!";
} else if(!$_SESSION["con"]) {
    echo "connection variable empty";
}

// get tuple from database as indexed array
$arrInfo = adminGetKpi($_SESSION["con"], $id);

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Edit Record|BarnYardBalance</title>
    </head>
    <body>
        
        <h2 id="editOutcome"></h2>
        <br />
        
        <form method="GET" action="edit.php">
            <!-- Info on userName and email, non edit-able -->
            <div class="nonEditableText">
                <b><?php echo $arrInfo[0]; ?></b>
                <br />
                <b><?php echo $arrInfo[1]; ?></b>
                <input type="hidden" name="id" value="<?php echo $id ?>";
            </div>
            
        	<div class="input-group">
        		<label>Average Speed to Answer</label>
        		<input type="integer" name="ASA" value="<?php echo $arrInfo[2]; ?>">
        	</div>
        	<div class="input-group">
        		<label>Average Talk Time</label>
        		<input type="integer" name="ATT" value="<?php echo $arrInfo[3]; ?>">
        	</div>
        	<div class="input-group">
        		<label>Call Handle Time</label>
        		<input type="integer" name="CHT" value="<?php echo $arrInfo[4]; ?>">
        	</div>
        	<div class="input-group">
        		<label>After Call Work Time</label>
        		<input type="integer" name="ACW" value="<?php echo $arrInfo[5]; ?>">
        	</div>
        	<div class="input-group">
        		<label>Occupancy Rate</label>
        		<input type="integer" name="ORR" value="<?php echo $arrInfo[6]; ?>">
        	</div>
        	<div class="input-group">
        		<label>Idle Time</label>
        		<input type="integer" name="ITT" value="<?php echo $arrInfo[7]; ?>">
        	</div>
        	<div class="input-group">
        		<label>Average Hold Time</label>
        		<input type="integer" name="AHT" value="<?php echo $arrInfo[8]; ?>">
        	</div>
        	<div class="input-group">
        		<label>Call Trasnfer</label>
        		<input type="integer" name="CTI" value="<?php echo $arrInfo[9]; ?>">
        	</div>
        	<div class="input-group">
        		<input type="submit" name="submit" value="submit">
        	</div>
        </form>
    </body>
</html>