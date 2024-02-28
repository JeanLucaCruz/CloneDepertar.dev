<?php
session_start();

// Função para cadastrar um novo produto na sessão
function cadastrarProduto($nome, $preco) {
    $produto = array("nome" => $nome, "preco" => $preco);
    $_SESSION['produtos'][] = $produto;
}

// Função para listar todos os produtos da sessão
function listarProdutos() {
    if (isset($_SESSION['produtos'])) {
        return $_SESSION['produtos'];
    } else {
        return array();
    }
}

// Função para excluir um produto da sessão com base no índice
function excluirProduto($indice) {
    if (isset($_SESSION['produtos'][$indice])) {
        unset($_SESSION['produtos'][$indice]);
    }
}

// Se o parâmetro "acao" for definido e igual a "excluir" e um índice também for fornecido
if(isset($_GET['acao']) && $_GET['acao'] == "excluir" && isset($_GET['indice'])) {
    // Exclui o produto com o índice fornecido
    excluirProduto($_GET['indice']);
    // Redireciona de volta para esta página para atualizar a lista de produtos
    header("Location: index.php");
    exit();
}

// Verifica se o formulário de cadastro foi submetido
if(isset($_POST['submit'])) {
    $nome = $_POST['nome'];
    $preco = $_POST['preco'];
    // Cadastra o novo produto
    cadastrarProduto($nome, $preco);
    // Redireciona de volta para esta página para atualizar a lista de produtos
    header("Location: index.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atividades</title>
</head>
<body>
    <h1>Atividades</h1>
    <ul><h2>Atividade 1</h2>
        <?php
function calcularMedia($nota1, $nota2) {
    $media = ($nota1 + $nota2) / 2;
    $aprovado = ($media >= 6) ? true : false;
    return array("media" => $media, "aprovado" => $aprovado);
}


$notas = calcularMedia(7, 8);
echo "Média: " . $notas['media'] . "<br>";
echo ($notas['aprovado']) ? "Aprovado" : "Reprovado";
?>
</ul>

<ul><h2>Atividade 2</h2>
<?php
function calcularMediaPonderada($notas) {
    $totalNotas = 0;
    $totalPesos = 0;
    
    foreach ($notas as $nota => $peso) {
        $totalNotas += $nota * $peso;
        $totalPesos += $peso;
    }
    
    return $totalNotas / $totalPesos;
}

$notas = array(7 => 2, 8 => 3);
echo "Média: " . calcularMediaPonderada($notas);
?>


</ul><h1>Atividade 3</h1>


    <ul> <h2>Lista Produtos Abaixo</h2>
        <?php 
        // Lista todos os produtos cadastrados
        $produtos = listarProdutos();
        foreach ($produtos as $indice => $produto) {
            echo "<li>";
            echo $produto['nome'] . " - R$ " . number_format($produto['preco'], 2) . " ";
            // Adiciona um link para excluir o produto, passando o índice via parâmetro GET
            echo "<a href='index.php?acao=excluir&indice=$indice'>Excluir</a>";
            echo "</li>";
        }
        ?>
    </ul>
    <h2>Cadastrar Novo Produto</h2>
    <form method="post" action="index.php">
        <label for="nome">Nome do Produto:</label><br>
        <input type="text" id="nome" name="nome" required><br>
        <label for="preco">Preço do Produto:</label><br>
        <input type="number" id="preco" name="preco" step="0.01" min="0" required><br><br>
        <input type="submit" name="submit" value="Cadastrar Produto">
    </form>
</body>
</html>
