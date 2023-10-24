// Insersão dos jogos no html para pesquisa

const divJOGOS = document.querySelector('.listgames');
const vetorGAMES = [];
let gameSTR = "";

for (let i = 0; i < 40; i++) {
    vetorGAMES[i] = {
        imgsrc: "",
        nome: `Nome: ${i}`,
        new: "Algo mais",
        appid: i,
    };
}

let aux = vetorGAMES.length;

for (let i = 0; i < vetorGAMES.length / 2; i++) {
    gameSTR +=
        `    
    <a href="GamePage.html?appid=${vetorGAMES[i].appid}" class="game">
        <div class = "game_">
            <div class="imagem">
                <img src="${vetorGAMES[i].imgsrc}" width="100%" height="300">
            </div>
            <div class="descricao">
                <h5>${vetorGAMES[i].nome}</h5>
                <h6>${vetorGAMES[i].new}</h6>
            </div>
        </div>
    </a>
    `
}

divJOGOS.innerHTML = gameSTR;

// Mostrar mais produtos na loja

const showMORE = document.querySelector('.abrir-1');

showMORE.addEventListener("click", () => {
    
    if(aux > 10){
        
        aux-=10;

        divJOGOS.innerHTML = "";
    
        for (let i = vetorGAMES.length / 2; i < vetorGAMES.length; i++) {
            gameSTR +=
                `
                <div class = "game">
                    <div class="imagem">
                        <img src="${vetorGAMES[i].imgsrc}" width="100%" height="300">
                    </div>
                    <div class="descricao">
                        <h5>${vetorGAMES[i].nome}</h5>
                        <h6>${vetorGAMES[i].new}</h6>
                    </div>
                </div>
            `
        }
    
        divJOGOS.innerHTML = gameSTR;
    }

})

// Adquirir os dados do input para realizar a pesquisa de produtos

const botao = document.querySelector('.botao');
let vetorPesquisa = [];
let pesquisaSTR = "";

botao.addEventListener("click", () => {

    // const inputUM = document.querySelector('.teste').value;
    // const inputUM = document.querySelector('.teste').value;
    // const inputUM = document.querySelector('.teste').value;
    // const inputUM = document.querySelector('.teste').value;

    // pega os valores, pede pro banco de dados

    for (let i = 0; i < 20; i++) {
        vetorPesquisa[i] = {
            imgsrc: "",
            nome: `Nome: ${i}`,
            new: "Algo mais",
        };
    }
    
    for (let i = 0; i < vetorPesquisa.length / 2; i++) {
        pesquisaSTR +=
            `
        <div class = "game">
            <div class="imagem">
                <img src="${vetorPesquisa[i].imgsrc}" width="100%" height="300">
            </div>
            <div class="descricao">
                <h5>${vetorPesquisa[i].nome}</h5>
                <h6>${vetorPesquisa[i].new}</h6>
            </div>
        </div>
        `
    }

    divJOGOS.innerHTML = "";
    divJOGOS.innerHTML = pesquisaSTR;

    showMORE.classList.replace("abrir-1", "abrir-2");

})

// Mostrar mais produtos filtrados
let aux2 = vetorPesquisa.length;

const showMORE2 = document.querySelector('.abrir-2');

showMORE2.addEventListener("click", () => {
    
    if(aux2 > 10){
    
        aux2-=10;
        
        divJOGOS.innerHTML = "";
    
        for (let i = vetorPesquisa.length / 2; i < vetorPesquisa.length; i++) {
            pesquisaSTR +=
                `
                <div class = "game">
                    <div class="imagem">
                        <img src="${vetorPesquisa[i].imgsrc}" width="100%" height="300">
                    </div>
                    <div class="descricao">
                        <h5>${vetorPesquisa[i].nome}</h5>
                        <h6>${vetorPesquisa[i].new}</h6>
                    </div>
                </div>
            `
        }
    
        divJOGOS.innerHTML = pesquisaSTR;
    }

})