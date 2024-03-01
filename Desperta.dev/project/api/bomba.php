<?php

class BombaCombustivel {
    // Atributos
    private $tipoCombustivel;
    private $valorLitro;
    private $quantidadeCombustivel;

    // Construtor
    public function __construct($tipoCombustivel, $valorLitro, $quantidadeCombustivel) {
        $this->tipoCombustivel = $tipoCombustivel;
        $this->valorLitro = $valorLitro;
        $this->quantidadeCombustivel = $quantidadeCombustivel;
    }

    // Métodos
    public function abastecerPorValor($valor) {
        $litros = $valor / $this->valorLitro;
        if ($litros <= $this->quantidadeCombustivel) {
            $this->quantidadeCombustivel -= $litros;
            return $litros;
        } else {
            return "Não há combustível suficiente na bomba.";
        }
    }

    public function abastecerPorLitro($litros) {
        $valor = $litros * $this->valorLitro;
        return $valor;
    }

    public function alterarValor($novoValor) {
        $this->valorLitro = $novoValor;
    }

    public function alterarCombustivel($novoCombustivel) {
        $this->tipoCombustivel = $novoCombustivel;
    }

    public function alterarQuantidadeCombustivel($novaQuantidade) {
        $this->quantidadeCombustivel = $novaQuantidade;
    }

    public function getQuantidadeCombustivel() {
        return $this->quantidadeCombustivel;
    }

    public function getValorPorLitro() {
        return $this->valorLitro;
    }
}

// Tipos de combustível
$gasolina = new BombaCombustivel("Gasolina", 5.5, 100);
$alcool = new BombaCombustivel("Álcool", 4.0, 150);
$diesel = new BombaCombustivel("Diesel", 4.8, 120);

// Exemplo de uso das classes
echo "Quantidade de gasolina na bomba: " . $gasolina->getQuantidadeCombustivel() . " litros</br>";
echo "Valor de 1 litro de gasolina: R$ " . $gasolina->getValorPorLitro() . "</br>";

echo "Quantidade de álcool na bomba: " . $alcool->getQuantidadeCombustivel() . " litros</br>";
echo "Valor de 1 litro de álcool: R$ " . $alcool->getValorPorLitro() . "</br>";

echo "Quantidade de diesel na bomba: " . $diesel->getQuantidadeCombustivel() . " litros</br>";
echo "Valor de 1 litro de diesel: R$ " . $diesel->getValorPorLitro() . "</br>";

?>
