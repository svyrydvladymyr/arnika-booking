<?php include 'access.php'?>

<?php
$obj = json_decode($_GET["x"], false);
$objs = json_decode($_GET["x"], false);
$conn = new mysqli($servername, $username, $password, $dbname);
$stmt = $conn->prepare("SELECT login, password FROM users WHERE login = ? AND password = ?");
$stmt->bind_param("ss", $obj->login, $obj->password);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);
// echo json_encode($outp);
if ($outp != []){
    $stmts = $conn->prepare("SELECT last_name, first_name, nomer_kimn, data_zaizdu, telephone, kilk_dniv, price, tip, status FROM bookinggurt2 WHERE data_zaizdu >= ? AND data_zaizdu <= ? AND status = ?");
    $stmts->bind_param("sss", $objs->listZ, $objs->listPO, $objs->listStatus);
    $stmts->execute();
    $results = $stmts->get_result();
    $outps = $results->fetch_all(MYSQLI_ASSOC);
    echo json_encode($outps);
}
?>

