<?php include 'access.php'?>

<?php
$obj = json_decode($_GET["x"], false);
$conn = new mysqli($servername, $username, $password, $dbname);
$stmt = $conn->prepare("UPDATE bookinggurt1 SET status = ?, admin_updata = ?, data_zmin = ? WHERE last_name = ? AND first_name = ? AND telephone = ? AND nomer_kimn = ? AND kilk_dniv = ? AND data_zapisu = ?");
$stmt->bind_param("sssssssss", $obj->statusUp, $obj->adminregUp, $obj->dateregUp, $obj->surnameUp, $obj->nameUp, $obj->telUp, $obj->nomerUp, $obj->kilkUp, $obj->datazapisuUp);
$stmt->execute();
if ($stmt->error) {
    echo "FAILURE!!! " . $stmt->error;
}
else echo "{$stmt->affected_rows}";  
$stmt->close();
?>