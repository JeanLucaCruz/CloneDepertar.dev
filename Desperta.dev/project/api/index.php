<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Índice</title>
    <style>
        body {
            background-color: #e0f2f1; 
        }
    </style>
</head>
<body>

<h1>Contador</h1>

<?php require('contador.php');

require('/var/task/project/api/contador.php'); ?>

<hr>

<h1>Bola</h1>
<?php require('bola.php'); 
require('/var/task/user/api/bola.php');
?>

<hr>

<h1>Conta</h1>
<?php require('conta.php');
require('/var/task/user/api/conta.php');
?>

<hr>

<h1>Calculadora</h1>
<?php require('calculadora.php');
require('/var/task/user/api/calculadora.php');
?>

<hr>

<h1>Bomba de Combustível</h1>
<?php require('bomba.php'); ?>

<hr>

<h1>Carro</h1>
<?php require('carro.php'); ?>

</body>
</html>
