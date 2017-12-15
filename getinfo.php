<?php
// This php file is only for function calls



// This function is for admin to get all employee info
function adminGetInfo($con) {

  $sql = "SELECT * FROM employee";  // MySQL query string

  // connect to database with query, get result
  $result = mysqli_query($con, $sql);


}  // end function

// This function is for employee to get all his property information
function employeeGetInfo($con, $id) {
  // MySQL query
  $sql = "SELECT * FROM property WHERE ssn = '$id'";
  // connect to database
  $result = mysqli_query($con, $sql);
  $result = mysqli_fetch_row($result);

  return $result;
} // end function

// This function pulls data from from database to store
function getStoreData($con) {
  $sql = "SELECT * FROM shop";  // MySQL query string

  // connect to database
  $result = mysqli_query($con, $sql);

  return $result;
} // end function

// debug for printing every single element of 2D array
function debug2Darray($arr) {

  // This is a while loop that fetch one row at a time
  // and put it into $row from $result 2d array
  while ($row = mysqli_fetch_row($arr)) {
    // for each row, we will print every element in a array
    for ($i = 0; $i < count($row); $i++) {
        echo "$row[$i] ";
    }  // end for loop
    // finish one row, use line break to print new row on new line
    echo "<br />";
  }  // end while loop
} // end function


// debug for printing every single element of array
function debugArray($arr) {
  // use while loop to print each element in a row
  // except the first one (SSN)
  for ($i = 1; $i < count($arr); $i++) {
    echo "$arr[$i] ";
  } // end for
}

?>
