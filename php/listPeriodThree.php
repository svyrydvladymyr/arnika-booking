<?php include 'access.php'?>

<?php
$obj = json_decode($_GET["x"], false);
$conn = new mysqli($servername, $username, $password, $dbname);
$stmt = $conn->prepare("SELECT last_name, first_name, nomer_kimn, data_zaizdu, telephone, kilk_dniv, price, tip, status FROM bookinggurt2 WHERE data_zaizdu >= ? AND data_zaizdu <= ? AND status = ? ORDER BY nomer_kimn");
$stmt->bind_param("sss", $obj->listZ, $obj->listPO, $obj->listStatus);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($outp);
?>