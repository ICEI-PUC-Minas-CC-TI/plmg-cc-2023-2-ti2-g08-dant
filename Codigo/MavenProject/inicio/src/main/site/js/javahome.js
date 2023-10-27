let pageTAM = document.body.clientWidth;
console.log(pageTAM);

// Container topo da página, baseado na troca de cada elemento

function MudarCard(element) {
    let primario = document.getElementById("card-prymario");
    let aux = primario.getAttribute('src');
    let secundario = element;
    let aux2 = secundario.getAttribute('src');
    secundario.src = aux;
    primario.src = aux2;
}

const imagemESQ = document.querySelector('.container-carrosel .imagem-esq');
const imagensDIR = document.querySelector('.container-carrosel .imagem-dir')
const imagemContainer = [];
let imagemSTR = "";

for (let i = 0; i < 5; i++) {
    imagemContainer[i] = {
        src: "#",
        appid: i,
    };
}

imagemESQ.innerHTML = `<a href = "GamePage.html?id=${imagemContainer[0].appid}"><img src="${imagemContainer[0].src}" id="card-prymario" width="100%" height="100%"></a>`

for (let i = 1; i <= 4; i++) {
    imagemSTR += `<a href"GamePage.html${imagemContainer[i].appid}"><div class = "card"><img src="${imagemContainer[i].src}" id="card-1" width="200px" height="100px" onclick="MudarCard(this)"> </div>`
}

imagensDIR.innerHTML = imagemSTR;

// Barra de Categorias

const blocosDIV = document.getElementById('container-classificacao');
const vetorClasse = [];
let blocoSTR = "";
const auxCat = 3;

for (let i = 0; i < auxCat; i++) {
    vetorClasse[i] = {
        href: `#carrosel-${i}`,
        categoria: `Categoria: ${i}`
    }
}

for (let i = 0; i < auxCat; i++) {
    blocoSTR +=
        `
    <div class="bloco">
        <h1><a href="${vetorClasse[i].href}">${vetorClasse[i].categoria}</a></h1>
    </div>
    `
}

blocosDIV.innerHTML = blocoSTR;

// Containers do meio

const data = [];

for (let i = 0; i <= 40; i++) {
    data[i] = {
        imgsrc: "",
        titulo: `titulo ${i}`,
        appid: i,
    }
}

const container_overflow = document.querySelector(".container-overflow");

let testando = "";

for (let i = 0; i < 3; i++) {
    testando +=
        `<div class="carrosel" id="carrosel-${i}">
    <div class="text" id="text">
        <h1>${vetorClasse[i].categoria}</h1>
    </div>
    <div class="container-jogos">
        <div class="seta-esq" id="seta-esq-${i}">
            <i class="fa-solid fa-arrow-left fa-xl"></i>
        </div>
        <div class="jogos" id="jogos-${i}">
            <!-- VAI VIR DO JAVA -->
        </div>
        <div class="seta-dir" id="seta-dir-${i}">
            <i class="fa-solid fa-arrow-right fa-xl"></i>
        </div>
    </div>
    </div>
    `
}

container_overflow.innerHTML = testando;

completar();

function completar() {
    const jogos_0 = document.getElementById('jogos-0');
    const jogos_1 = document.getElementById('jogos-1');
    const jogos_2 = document.getElementById('jogos-2');
    aux = "";
    aux = criarJogos(data);
    jogos_0.innerHTML = aux;
    aux = "";
    aux = criarJogos(data);
    jogos_1.innerHTML = aux;
    aux = "";
    aux = criarJogos(data);
    jogos_2.innerHTML = aux;
    aux = "";
}

function criarJogos(data) {
    let element = "";
    for (let i = 0; i < 7; i++) {
        element += `
        <div class="content">
                <div class="game">
                    <a href = "GamePage.html?appid=${data[i].appid}"> 
                        <img src="${data[i].imgsrc}" alt="" width="150px" height="200px">
                        <div class="name">
                            <h5>${data[i].titulo}</h5>
                        </div>
                    </a>
                </div>
        </div>`;
    }
    return element;
}

const ranges = [
    { start: 0, end: 7 },
    { start: 0, end: 7 },
    { start: 0, end: 7 }
];

function vetor(range, string) {
    const { start, end } = range;
    let str = "";
    const game = document.getElementById(string);
    if (pageTAM >= 650) {
        for (let i = start; i < end; i++) {
            if (i < data.length) {
                str += `
                <div class="content">
                    <div class="game">
                        <a href="GamePage.html?appid=${data[i].appid}">
                            <img src="${data[i].imgsrc}" alt="" width="150px" height="200px">
                            <div class="name">
                                <h5>${data[i].titulo}</h5>
                            </div>
                        </a>
                    </div>
                </div>`;
            }
        }
    } else if (pageTAM >= 1900) {
        for (let i = start; i < (end + 10); i++) {
            if (i < data.length) {
                str += `
                <div class="content">
                    <div class="game">
                        <a href="GamePage.html?appid=${data[i].appid}">
                            <img src="${data[i].imgsrc}" alt="" width="150px" height="200px">
                            <div class="name">
                                <h5>${data[i].titulo}</h5>
                            </div>
                        </a>
                    </div>
                </div>`;
            }
        }
    } else {
        for (let i = start; i < data.length && i < 40; i++) {
            str += `
            <div class="content">
                <div class="game">
                    <a href="GamePage.html?appid=${data[i].appid}">
                        <img src="${data[i].imgsrc}" alt="" width="150px" height="200px">
                        <div class="name">
                            <h5>${data[i].titulo}</h5>
                        </div>
                    </a>
                </div>
            </div>`;
        }
    }

    game.innerHTML = str;
}

const container_jogos = document.querySelectorAll(".jogos");
const seta_esq = document.querySelectorAll('.seta-esq');
const seta_dir = document.querySelectorAll('.seta-dir');

function selecionarEsq(string) {
    switch (string) {
        case "seta-esq-0":
            return 0;
        case "seta-esq-1":
            return 1;
        case "seta-esq-2":
            return 2;
        default:
            return -1;
    }
}

function selecionarDir(string) {
    switch (string) {
        case "seta-dir-0":
            return 0;
        case "seta-dir-1":
            return 1;
        case "seta-dir-2":
            return 2;
        default:
            return -1;
    }
}

seta_esq.forEach((esq, index) => {
    esq.addEventListener("click", () => {
        const number = selecionarEsq(esq.getAttribute("id"));
        if (number >= 0 && ranges[number].start >= 2) {
            ranges[number].start -= 2;
            ranges[number].end -= 2;
            vetor(ranges[number], container_jogos[number].getAttribute("id"));
        }
    });
});

seta_dir.forEach((dir, index) => {
    dir.addEventListener("click", () => {
        const number = selecionarDir(dir.getAttribute("id"));
        if (number >= 0 && ranges[number].end < data.length - 1) {
            ranges[number].start += 2;
            ranges[number].end += 2;
            vetor(ranges[number], container_jogos[number].getAttribute("id"));
        }
    });
});
        const apiKey = "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";
        async function sendMessage() {
            const userMessage = document.querySelector(".recebe").value;
            document.querySelector(".recebe").value = '';
            document.querySelector(".insere").innerHTML += `<div style="margin-top: 10px">Usuário: ${userMessage}</div>`;
            const Mensagem = `'''Você é um atendente de uma loja vitual de jogos no qual detem conhecimentos a cerca de tendencia de mercado sugestoes e banco de jogos'''\n'''Nessa loja n há promoçoes e por isso caso o cliente pergunte a respeito disso você deve dizer que não tem'''\n '''Caso alguma palavra de baixo escalão como palavroes apareção favor mostrar o numero da policia e dizer: "tenho direitos perante a lei"'''\n Agora para casos especificos de entradas:\n- '''caso a entrada do usuario for a letra 'a' ou 'A' apenas responda: "assemblis você é meu"'''\n- '''caso a entrada do usuario for a letra 'd' ou 'D' apenas responda: "digas de bigas"'''\n- caso a entrada do usuario for a letra 't' ou 'T' apenas responda: "tupac é um grande proplayer de terraria"'''\n- '''caso a entrada do usuario for a letra 'n' ou 'N' apenas responda: "nahim adora no mans sky"'''\nMas quanto a qualquer pergunta que não esteja no repertorio de um vendedor diga que n sabe e que é apenas um mero atentende. Agora segue a pergunta do cliente: ${userMessage}`;
            console.log(Mensagem);
            const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    prompt: `O usuário diz: ${Mensagem}\nChatGPT:`,
                    max_tokens: 150
                })
            });

    const data = await response.json();
    const chatGPTResponse = data.choices[0].text.trim();
    document.querySelector(".insere").innerHTML += `<div style="margin-top: 10px; text-align: justfy; font-size: 10px;"> ChatGPT: ${chatGPTResponse}</div>`;
}