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
    $stmts = $conn->prepare("SELECT last_name, first_name, nomer_kimn, telephone, kilk_dniv, data_zaizdu, price, admin, data_zapisu, tip, admin_updata, data_zmin, status FROM bookinggurt2 WHERE last_name = ? AND first_name = ? AND nomer_kimn = ? AND telephone = ? AND kilk_dniv = ?");
    $stmts->bind_param("sssss", $objs->lastname, $objs->firstname, $objs->nomerkimn, $objs->telephone, $objs->kilkdniv);
    $stmts->execute();
    $results = $stmts->get_result();
    $outps = $results->fetch_all(MYSQLI_ASSOC);
    echo json_encode($outps);
}
?>

