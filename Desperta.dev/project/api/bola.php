<?php

class Bola {
    // Atributos
    private $cor;
    private $circunferencia;
    private $material;

    // Construtor
    public function __construct($cor, $circunferencia, $material) {
        $this->cor = $cor;
        $this->circunferencia = $circunferencia;
        $this->material = $material;
    }

    // Métodos
    public function trocarCor($novaCor) {
        $this->cor = $novaCor;
    }

    public function mostrarCor() {
        return $this->cor;
    }
}

// Exemplo de uso da classe Bola
$bola = new Bola("vermelha", 30, "plástico");
echo "Cor atual da bola: " . $bola->mostrarCor() . "</br>";

$bola->trocarCor("azul");
echo "Nova cor da bola: " . $bola->mostrarCor() . "</br>";
?>
