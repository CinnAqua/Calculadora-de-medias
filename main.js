const form = document.getElementById('formatividade');
const imgAprovado = '<img src="images/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src="images/reprovado.png" alt="Emoji decepcionado" />'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</Span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</Span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = '';
form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputNota = document.getElementById('nota');

    if (atividades.includes(inputNome.value)) {
        alert(`A atividade: ${inputNome.value} Já foi inserida`);
    } else {
        atividades.push(inputNome.value);
        notas.push(parseFloat(inputNota.value));
    
        let linha = `<tr>`;
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNota.value}</td>`;
        linha += `<td>${inputNota.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNome.value = '';
    inputNota.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal () {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('mediafinalvalor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('mediafinalresultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}