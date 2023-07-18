const form = document.getElementById('formagenda');
const nomes = [];
const tels = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputTel = document.getElementById('tel');

    if (nomes.includes(inputNome.value)||tels.includes(inputTel.value)) {
        alert('Este nome ou número de contato já foi inserido');
    } else {
        nomes.push(inputNome.value);
        tels.push(inputTel.value);
    
        let linha = `<tr>`;
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td><a href="tel:${inputTel.value}">${inputTel.value}</a></td>`;
        linha += `</tr>`;
        linhas += linha;
        inputNome.value = '';
        inputTel.value = '';
    }
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
    return document.getElementById( el );
}
window.onload = function(){
    id('tel').onkeyup = function(){
    mascara( this, mtel );
    }
}