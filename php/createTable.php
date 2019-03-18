<!--access to DB-->
<?php include 'access.php'?>

<!--create table one-->
<?php
   try{
       $basa=new PDO("mysql:host=$servername;dbname=$dbname",$username,$password);
       $basa->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
       $table="CREATE TABLE bookinggurt1(
       id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
       first_name VARCHAR(30) NOT NULL,
       last_name VARCHAR(30) NOT NULL,
       telephone BIGINT(20),
       nomer_kimn INT,
       data_zaizdu DATE,
       kilk_dniv INT, 
       price INT, 
       status VARCHAR(30),       
       tip VARCHAR(30),       
       coment TEXT,
       admin VARCHAR(30),
       data_zapisu DATE,
       admin_updata VARCHAR(30),       
       data_zmin DATE
       )";
       $basa->exec($table);
       echo "Table 1 create";
   }
    catch(PDOException $e){
        echo $sql."<br>". $e->getMessage();
    }
    $basa=null;
?>

<!--create table two-->
<?php
   try{
       $basa=new PDO("mysql:host=$servername;dbname=$dbname",$username,$password);
       $basa->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
       $table="CREATE TABLE bookinggurt2(
       id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
       first_name VARCHAR(30) NOT NULL,
       last_name VARCHAR(30) NOT NULL,
       telephone BIGINT(20),
       nomer_kimn INT,
       data_zaizdu DATE,
       kilk_dniv INT, 
       price INT, 
       status VARCHAR(30),       
       tip VARCHAR(30),       
       coment TEXT,
       admin VARCHAR(30),
       data_zapisu DATE,
       admin_updata VARCHAR(30),       
       data_zmin DATE
       )";
       $basa->exec($table);
       echo "Table 2 create";
   }
    catch(PDOException $e){
        echo $sql."<br>". $e->getMessage();
    }
    $basa=null;
?>

<!--create table users-->
<?php
   try{
       $basa=new PDO("mysql:host=$servername;dbname=$dbname",$username,$password);
       $basa->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
       $table="CREATE TABLE users(
       id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
       login VARCHAR(30) NOT NULL,
       password VARCHAR(30) NOT NULL,
       name VARCHAR(30) NOT NULL,
       surname VARCHAR(30) NOT NULL
       )";
       $basa->exec($table);
       echo "Table USERS create";
   }
    catch(PDOException $e){
        echo $sql."<br>". $e->getMessage();
    }
    $basa=null;
?> 


