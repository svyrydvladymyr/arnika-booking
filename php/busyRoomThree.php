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
    $stmts = $conn->prepare("SELECT nomer_kimn FROM bookinggurt2 WHERE data_zaizdu = ? AND (status = 'rezerv' OR status = 'pay') ORDER BY nomer_kimn");
    $stmts->bind_param("s", $objs->dz);
    $stmts->execute();
    $results = $stmts->get_result();
    $outps = $results->fetch_all(MYSQLI_ASSOC);
    echo json_encode($outps);
}
?>
