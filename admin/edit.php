<?php
// This is only for edit CSR
// Once "submit" button is clicked, header("Location: home.php")


// mysqli_connect: since this is needed every time we use mysqli_query()
$con = mysqli_connect('localhost', 'root', '', 'c9');


// Get the id variable
$id = $_GET["id"];

// error check for both variables: mysqli_connect() and id
if (!$_SESSION["csrID"]) {
    echo "id variable empty!";
} else if(!$con) {
    echo "connection variable empty";
}

// get tuple from database as indexed array
$arrInfo = adminGetKpi($con, $id);

// close connection
//mysqli_close();

// This function is for admin
// to get kpi info of employee
//
// return: array[Email, userName, (all kpi value)];
// length of array = 10
function adminGetKpi($con, $id) {
    
    // debug
    if (1) {
        echo "adminGetKpi, id: $id";
        
    } // end debug
    
  // MySQL query
  $sql = "SELECT username, email, 
          ASA, ATT, CHT, ACW, ORR, ITT, AHT, CTI
          FROM users WHERE id = $id";
  // connect to database
  $result = mysqli_query($con, $sql);
  
  // perform query check: if fail, error print
  if (!$result) {
      echo "adminGetKpi: Error on sql query";
  }
  
  $result = mysqli_fetch_row($result);
 

  return $result;
} // end function

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Edit Record|BarnYardBalance</title>
    </head>
    <body>
        
        <h2 id="editOutcome"></h2>
        <br />
        
        <form method="POST" action="editProcess.php">
            <!-- Info on userName and email, non edit-able -->
            <div class="nonEditableText">
                <b><?php echo $arrInfo[0]; ?></b>
                <br />
                <b><?php echo $arrInfo[1]; ?></b>
                <!-- This field is used as hidden: it's used to pass id variable
                     to next page 
                -->
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