<?php include 'access.php'?>

<?php
$obj = json_decode($_GET["x"], false);
$conn = new mysqli($servername, $username, $password, $dbname);
$stmt = $conn->prepare("SELECT data_zaizdu FROM bookinggurt1 WHERE nomer_kimn = ? AND data_zaizdu = ? ORDER BY data_zaizdu");
$stmt->bind_param("ss", $obj->room, $obj->date);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($outp);
?>