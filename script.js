const botaoMostraPalavras = document.quelySeletor('#botaopalavrachave');

botaoMostraPalvras.addEventListener('click', mostraPalvraChave);

function mostraPalvrasChave (){
    const texto = document.querySelector('#entrada-de-texto'). value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = texto.split(" ");

    campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto(texto){
    let palavras = texto.split(" ");
    return palavras;
}