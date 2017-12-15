<?php


// delete a record from database
function delFromDatabase($con, $id) {

  $sql = "DELETE FROM users WHERE id = $id";

  // return true if
  if (mysqli_query($con, $sql)) {
    return true;
  }

  return false;
} // end delFromDatabase


// main functin execute
$con = mysqli_connect('localhost', 'root', '', 'c9');


// This should be a method to call it
if (delFromDatabase($con, $_GET['id'])) {
  // jump back to home.php
    header("Location: home.php");
}





?>