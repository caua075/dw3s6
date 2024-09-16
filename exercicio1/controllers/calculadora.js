const soma = (numero1, numero2) => {
    return numero1 + numero2;
}

const sub = (numero1, numero2) => {
    return numero1 - numero2;
}

const mult = (numero1, numero2) => {
    return numero1 * numero2;
}

const div = (numero1, numero2) => {
    return numero1 / numero2;
}


const calculadora = (req, res) => {
    const { numero1, numero2, operacao } = req.body;

    switch (operacao) {
        case '+':
            res.send({ resultado: soma(numero1, numero2) });
            break;
        case '-':
            res.send({ resultado: sub(numero1, numero2) });
            break;
        case '*':
            res.send({ resultado: mult(numero1, numero2) });
            break;
        case '/':
            res.send({ resultado: div(numero1, numero2) });
            break;
        default:
            res.send({ resultado: 'Operação inválida' });
    }
}

module.exports = calculadora;