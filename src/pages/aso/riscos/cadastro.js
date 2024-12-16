export function validacaoDetamanho(texto){
    if (texto.length > 5){
        return '';
    }
    return 'o nome precisa ter mais de 5 caracteres ';
}

export function validarCNPJ(cnpj) {


    if (cnpj.length !== 14) return false;


    if (/^(\d)\1+$/.test(cnpj)) return false;

  
    function calcularDigito(baseCnpj, pesos) {
        let soma = 0;
        for (let i = 0; i < pesos.length; i++) {
            soma += parseInt(baseCnpj[i]) * pesos[i];
        }
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    }

    const pesosPrimeiro = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const pesosSegundo = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const primeiroDigito = calcularDigito(cnpj.slice(0, 12), pesosPrimeiro);

    const segundoDigito = calcularDigito(cnpj.slice(0, 12) + primeiroDigito, pesosSegundo);

    return (
        primeiroDigito === parseInt(cnpj[12]) &&
        segundoDigito === parseInt(cnpj[13])
    );
}

export function validarIdade(idade){

    document.getElementById('formularioIdade').addEventListener('submit', function(evento) {
        evento.preventDefault();

        const dataNascimento = new Date(document.getElementById('dataNascimento').value);
        const hoje = new Date();

        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const diferencaMes = hoje.getMonth() - dataNascimento.getMonth();
        const diferencaDia = hoje.getDate() - dataNascimento.getDate();

        if (diferencaMes < 0 || (diferencaMes === 0 && diferencaDia < 0)) {
            idade--;
        }

        const elementoMensagem = document.getElementById('mensagem');
        if (idade >= 18) {
            elementoMensagem.textContent = `Tem ${idade} anos.`;
            elementoMensagem.style.color = 'white';
        } else {
            elementoMensagem.textContent = `Tem apenas ${idade} anos.`;
            elementoMensagem.style.color = 'red';
        }
    });
}