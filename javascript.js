const imagem = document. querySelector("img");
const botao = document.  querySelector("botao");
const nomeDoPersonagem = document.querySelector("#nome");
const status = document. querySelector("#status");
const especie = document. queryselector("#especie");

pegarPersonagem =() => {

    return fetch(`http://rickandmortyapi.com/api/character/2`, {
        method: 'GET',
        headers: {
         Accept: 'application/json',
         "Content-type": 'application/json'
        }
}).then((Response) => Response.json()).then((data) =>{
    imagem.src = data.image;
    imagem.alt = data.name;
});

}

botao.onclick =pegarPersonagem
