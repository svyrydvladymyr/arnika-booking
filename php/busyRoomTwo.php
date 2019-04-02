<?php include 'access.php'?>

<?php
$obj = json_decode($_GET["x"], false);
$conn = new mysqli($servername, $username, $password, $dbname);
$stmt = $conn->prepare("SELECT nomer_kimn FROM bookinggurt1 WHERE data_zaizdu = ?");
$stmt->bind_param("s", $obj->dz);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($outp);
?>