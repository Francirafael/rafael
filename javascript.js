const imagem = document. querySelector('img');
const botao = document.  querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const Condicao = document. querySelector('#especie');
const especies = document. queryselector('#status');

pegarPersonagem = () => {

    return fetch(`https://rickandmortyapi.com/api/character/8`, {
        method: 'GET',
        headers: {
         Accept: 'application/json',
         "Content-type": 'application/json'
        }
}).then((response) => response.json()).then((data) =>{
    imagem.src = data.image;
    imagem.alt = data.name;
    nomeDoPersonagem.innerHTML = data.name;
    Condicao.innerHTML = data.status;
    condicao.innerHTML = traduzirCondicao(data);
});

}

botao.onclick = pegarPersonagem;
