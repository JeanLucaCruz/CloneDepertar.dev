//6. Desenvolva um algoritmo que mostre uma contagem regressiva de
//30 até 1, marcando os números que forem primos, exatamente
//como mostrado abaixo:
//30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...


for (let i = 30; i >= 1; i--) {
    let primo = true;

    if (i <= 1) {
        primo = false;
    } else if (i <= 3) {
        primo = true;
    } else if (i % 2 === 0 || i % 3 === 0) {
        primo = false;
    } else {
        for (let j = 5; j * j <= i; j += 6) {
            if (i % j === 0 || i % (j + 2) === 0) {
                primo = false;
                break;
            }
        }
    }

    if (primo) {
        document.write(`[${i}] `);
    } else {
        document.write(`${i} `);
    }
}