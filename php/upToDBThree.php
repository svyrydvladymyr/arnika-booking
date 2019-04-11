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
    $stmts = $conn->prepare("UPDATE bookinggurt2 SET status = ?, admin_updata = ?, data_zmin = ? WHERE last_name = ? AND first_name = ? AND telephone = ? AND nomer_kimn = ? AND kilk_dniv = ? AND data_zapisu = ?");
    $stmts->bind_param("sssssssss", $objs->statusUp, $objs->adminregUp, $objs->dateregUp, $objs->surnameUp, $objs->nameUp, $objs->telUp, $objs->nomerUp, $objs->kilkUp, $objs->datazapisuUp);
    $stmts->execute();
    if ($stmts->error) {
        echo "FAILURE!!! " . $stmts->error;
    }
    else echo "{$stmts->affected_rows}";  
    $stmts->close();
}
?>



