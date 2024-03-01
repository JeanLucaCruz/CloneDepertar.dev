<?php

class Carro {
    // Atributos
    private $consumo;
    private $quantidadeCombustivel;

    // Construtor
    public function __construct($consumo) {
        $this->consumo = $consumo;
        $this->quantidadeCombustivel = 0;
    }

    // Métodos
    public function andar($distancia) {
        $combustivelNecessario = $distancia / $this->consumo;
        if ($combustivelNecessario <= $this->quantidadeCombustivel) {
            $this->quantidadeCombustivel -= $combustivelNecessario;
        } else {
            return "Não há combustível suficiente no tanque.";
        }
    }

    public function adicionarGasolina($litros) {
        $this->quantidadeCombustivel += $litros;
    }

    public function obterGasolina() {
        return $this->quantidadeCombustivel;
    }
}

// Exemplo de uso da classe Carro
$chevette = new Carro(15); // Consumo: 15 km/l

echo "Nível inicial de combustível do meu Chevette: " . $chevette->obterGasolina() . " litros</br>";

$chevette->adicionarGasolina(20); // Adicionando 20 litros de gasolina
echo "Nível atual de combustível após abastecer: " . $chevette->obterGasolina() . " litros</br>";

$chevette->andar(100); // Andando 100 km
echo "Nível atual de combustível depois de rodar 100km: " . $chevette->obterGasolina() . " litros</br>";

?>
