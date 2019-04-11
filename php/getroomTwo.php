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
    $stmts = $conn->prepare("SELECT data_zaizdu FROM bookinggurt1 WHERE nomer_kimn = ? AND data_zaizdu = ? AND (status = 'rezerv' OR status = 'pay') ORDER BY data_zaizdu");
    $stmts->bind_param("ss", $objs->room, $objs->date);
    $stmts->execute();
    $results = $stmts->get_result();
    $outps = $results->fetch_all(MYSQLI_ASSOC);
    echo json_encode($outps);
}
?>



