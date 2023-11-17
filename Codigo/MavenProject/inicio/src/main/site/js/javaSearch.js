let resp;

controlaJogos(resp);


async function controlaJogos(mandar) {
    mandar = await receberJogos();
    console.log(mandar);
    let resp = {};
    for (let i = 0; i < mandar.length; i++) {
        resp[i] = {
            appid: mandar[i].appid,
            nome: mandar[i].nome,
            steamappid: retornaId(mandar[i].json),
            json: JSON.parse(mandar[i].json),
        }
    }


    // Insersão dos jogos no html para pesquisa

    const divJOGOS = document.querySelector('.listgames');
    let gameSTR = "";

    let aux = 300;

    for (let i = 0; i < 300 / 2; i++) {
        gameSTR +=
            `    
    <a href="GamePage.html?appid=${resp[i].appid}" class="game">
        <div class = "game_">
            <div class="imagem">
                <img src="${resp[i].json[resp[i].steamappid].data.header_image}" width="100%" height="150">
            </div>
            <div class="descricao">
                <h5>${resp[i].nome}</h5>
            </div>
        </div>
    </a>
    `
    }

    divJOGOS.innerHTML = gameSTR;

    // Mostrar mais produtos na loja

    const showMORE = document.querySelector('.abrir-1');

    showMORE.addEventListener("click", () => {

        if (aux > 10) {

            aux -= 10;

            divJOGOS.innerHTML = "";

            for (let i = 300 / 2; i < 300; i++) {
                gameSTR +=
                    `
                <div class = "game">
                    <div class="imagem">
                        <img src="${resp[i].json[resp[i].steamappid].data.header_image}" width="100%" height="150">
                    </div>
                    <div class="descricao">
                        <h5>${resp[i].nome}</h5>
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
                <img src="${vetorPesquisa[i].imgsrc}" width="100%" height="150">
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

        if (aux2 > 10) {

            aux2 -= 10;

            divJOGOS.innerHTML = "";

            for (let i = vetorPesquisa.length / 2; i < vetorPesquisa.length; i++) {
                pesquisaSTR +=
                    `
                <div class = "game">
                    <div class="imagem">
                        <img src="${vetorPesquisa[i].imgsrc}" width="100%" height="150">
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

    return resp;
}

function retornaId(str) {
    let resp = "";
    let isParsingID = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '"' && !isParsingID) {
            isParsingID = true;
        } else if (str[i] === '"' && isParsingID) {
            break;
        } else if (isParsingID) {
            resp += str[i];
        }
    }

    return resp;
}

// funcao que retorna todos os jogos da api

async function receberJogos() {
    const url = `http://localhost:4567/HomePage/`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Deu pau GET");
        }
    } catch (error) {
        console.log(error);
    }
}

const apiKey = "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";
async function sendMessage() {
    const userMessage = document.querySelector(".recebe").value;
    document.querySelector(".recebe").value = '';
    document.querySelector(".insere").innerHTML += `<div style="margin-top: 10px">Usuário: ${userMessage}</div>`;
    const Mensagem = `Você é um atendente de uma loja vitual de jogos no qual detem conhecimentos a cerca de tendencia de mercado sugestoes e banco de jogos, mas nessa loja n há promoçoes e por isso caso o cliente pergunte a respeito disso você deve dizer que n tem e caso alguma palavra de baixo escalão como palavroes apareção favor mostrar o numero da policia e dizer que vc tem direitos perante a lei e por ultimo caso a entrada do usuario for a letra 'a' apenas digite assemblis você é meu, mas quanto a qualquer pergunta que não esteja no repertorio de um vendedor diga que n sabe e que é apenas um mero atentende. Agora segue a pergunta do cliente: ${userMessage}`;
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