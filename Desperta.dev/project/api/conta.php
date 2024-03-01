<?php

class ContaCorrente {
    // Atributos
    private $numeroConta;
    private $correntista;
    private $saldo;

    // Construtor
    public function __construct($numeroConta, $correntista, $saldo = 0) {
        $this->numeroConta = $numeroConta;
        $this->correntista = $correntista;
        $this->saldo = $saldo;
    }

    // Métodos
    public function alterarNome($novoNome) {
        $this->correntista = $novoNome;
    }

    public function deposito($valor) {
        if ($valor > 0) {
            $this->saldo += $valor;
            return true;
        } else {
            return false; // Valor inválido para depósito
        }
    }

    public function saque($valor) {
        if ($valor > 0 && $this->saldo >= $valor) {
            $this->saldo -= $valor;
            return true;
        } else {
            return false; // Saldo insuficiente ou valor inválido para saque
        }
    }

    // Getter para saldo (opcional)
    public function getSaldo() {
        return $this->saldo;
    }

    // Getter para correntista
    public function getCorrentista() {
        return $this->correntista;
    }
}

// Exemplo de uso da classe ContaCorrente
$conta = new ContaCorrente("123456", "Jean Luca", 1000);
echo "Saldo atual: " . $conta->getSaldo() . "</br>";

$conta->alterarNome("Jean Luca");
echo "Novo nome do correntista: " . $conta->getCorrentista() . "</br>";

$conta->deposito(500);
echo "Saldo após depósito: " . $conta->getSaldo() . "</br>";

$conta->saque(700);
echo "Saldo após saque: " . $conta->getSaldo() . "</br>";
?>
