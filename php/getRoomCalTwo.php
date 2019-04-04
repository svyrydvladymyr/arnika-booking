<?php include 'access.php'?>

<?php
$obj = json_decode($_GET["x"], false);
$conn = new mysqli($servername, $username, $password, $dbname);
$stmt = $conn->prepare("SELECT last_name, first_name, nomer_kimn, telephone, kilk_dniv, tip, status FROM bookinggurt1 WHERE data_zaizdu = ? AND (status = 'rezerv' OR status = 'pay') ORDER BY nomer_kimn");
$stmt->bind_param("s", $obj->dz);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($outp);
?>