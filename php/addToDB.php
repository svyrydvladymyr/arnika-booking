<?php include 'access.php'?>

<?php
$obj = json_decode($_GET["x"], false);
$conn = new mysqli($servername, $username, $password, $dbname);
$stmt = $conn->prepare("INSERT INTO bookinggurt1 (first_name, last_name, telephone, nomer_kimn, data_zaizdu, kilk_dniv, price, status, tip, admin, data_zapisu) 
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssssss", $obj->name, $obj->surname, $obj->tel, $obj->number, $obj->dz, $obj->kilk, $obj->price, $obj->buking, $obj->tip, $obj->admin, $obj->datazapovn);
$stmt->execute();
$result = $stmt->get_result();
// $outp = $result->fetch_all(MYSQLI_ASSOC);
echo $result;
?>