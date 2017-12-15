<?php
// This whole php is used to process edit request


$con = mysqli_connect('localhost', 'root', '', 'c9');

// check if Form has been submitted
if (isset($_POST["submit"])) {
    
    // Check to see if the rest of textbox in the form is empty or not
    if (!$_POST["ASA"] || !$_POST["ATT"] || !$_POST["CHT"] || !$_POST["ACW"] ||
        !$_POST["ORR"] || !$_POST["ITT"] || !$_POST["AHT"] || !$_POST["CTI"]) {
            // produce error if one of them are null
            errorOnEditOutcome("some value is not valid.");
            
    } else if (!$_POST["id"]) {
        errorOnEditOutcome("id is not passed?");
    } // end if
    
    // otherwise concatenate all these values as arr with length of 8
    $arr = [$_POST["ASA"], $_POST["ATT"], $_POST["CHT"], $_POST["ACW"],
            $_POST["ORR"], $_POST["ITT"], $_POST["AHT"], $_POST["CTI"]];
            
    // get id
    $id = $_POST["id"];
    
    // change api: if fail print error on specific html tag
    if (adminPutKpi($con, $id, $arr)) {
        errorOnEditOutcome("KPI Change failed!");
        
    }
            
    
    
} else {
  echo "ERROR: editProcess failed!";  
} // end if

// It will produce and error on html id = "editOutcome"
// depends on the string parameter
Function errorOnEditOutcome($str) {
    echo "<script>
          document.getElementById('editOutcome').innerHTML = 
         'Error!' . $str;
         </script>";
    
    
}




 
// change kpi of CSR when admin calls this function
// 
// three parameters:
// $con = return value of mysqli_connect()
// $id = id of employee that you want to change
// $arr consist of 8 elements for kpi
//
// return nothing on success, else false
function adminPutKpi($con, $id, $arr) {
    
    // check $con and $arr
    if (mysqli_connect_errno() || (count($arr) != 8)) {
        return false;
    } // end if
    
    // $ make an sql query
    $strSQL =  "UPDATE users 
                SET ASA = " .$arr[0]. 
                 ", ATT = " .$arr[1].
                 ", CHT = " .$arr[2].
                 ", ACW = " .$arr[3].
                 ", ORR = " .$arr[4].
                 ", ITT = " .$arr[5].
                 ", AHT = " .$arr[6]. 
                 ", CTI = " .$arr[7].
               " WHERE ID = $id";
    // debug      
    if (1) {
        print_r ($strSQL);
    } // end debug
    
    // make connection and edit table, 
    // move to home.php
    if (mysqli_query($con, $strSQL)) {
        mysqli_close();
        header("Location: home.php");
    }
    
    // if get to here, something is wrong
   errorOnEditOutcome("failed to change KPI for CSR");
    
} // end function
    
?>