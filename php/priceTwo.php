<?php include 'access.php'?>

<?php
$obj = json_decode($_GET["x"], false);
$conn = new mysqli($servername, $username, $password, $dbname);
$stmt = $conn->prepare("SELECT price FROM priceGurtTwo WHERE room = ?");
$stmt->bind_param("s", $obj->room);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($outp);
?>