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
    $stmts = $conn->prepare("INSERT INTO bookinggurt1 (first_name, last_name, telephone, nomer_kimn, data_zaizdu, kilk_dniv, price, status, tip, admin, data_zapisu) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmts->bind_param("sssssssssss", $objs->name, $objs->surname, $objs->tel, $objs->number, $objs->dz, $objs->kilk, $objs->price, $objs->buking, $objs->tip, $objs->admin, $objs->datazapovn);
    $stmts->execute();
    $results = $stmts->get_result();
    // $outp = $result->fetch_all(MYSQLI_ASSOC);
    echo $results;
}
?>


