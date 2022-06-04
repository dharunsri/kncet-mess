<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kncet_mess";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT veg , non_veg  FROM total";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "<h1>"."id: " . $row["veg"]. " - Name: " . $row["non_veg"] ."<br>"."</h1>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>