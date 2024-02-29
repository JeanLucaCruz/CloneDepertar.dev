<?php

class Calculadora {
    // Atributo para armazenar o histórico de operações
    private $historico = [];

    // Método para somar dois números
    public function somar($num1, $num2) {
        $resultado = $num1 + $num2;
        $this->historico[] = "$num1 + $num2 = $resultado";
        return $resultado;
    }

    // Método para subtrair dois números
    public function subtrair($num1, $num2) {
        $resultado = $num1 - $num2;
        $this->historico[] = "$num1 - $num2 = $resultado";
        return $resultado;
    }

    // Método para multiplicar dois números
    public function multiplicar($num1, $num2) {
        $resultado = $num1 * $num2;
        $this->historico[] = "$num1 * $num2 = $resultado";
        return $resultado;
    }

    // Método para dividir dois números
    public function dividir($num1, $num2) {
        if ($num2 != 0) {
            $resultado = $num1 / $num2;
            $this->historico[] = "$num1 / $num2 = $resultado";
            return $resultado;
        } else {
            return "Erro: divisão por zero.";
        }
    }

    // Método para visualizar o histórico de operações
    public function visualizarHistorico() {
        return $this->historico;
    }
}

// Exemplo de uso da classe Calculadora
$calculadora = new Calculadora();

echo "Soma: " . $calculadora->somar(5, 3) . "\n";
echo "Subtração: " . $calculadora->subtrair(10, 4) . "\n";
echo "Multiplicação: " . $calculadora->multiplicar(2, 6) . "\n";
echo "Divisão: " . $calculadora->dividir(8, 2) . "\n";

// Visualizar o histórico
echo "\nHistórico de operações:\n";
$historico = $calculadora->visualizarHistorico();
foreach ($historico as $op) {
    echo $op . "\n";
}

?>
