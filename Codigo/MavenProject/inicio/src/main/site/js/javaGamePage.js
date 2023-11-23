const url = document.location.search;
const searchURL = new URLSearchParams(url);
let appid = searchURL.get('appid');
appid = parseInt(appid);

let teste;
dadosJogo(teste);

async function dadosJogo(mandar) {

    mandar = await receberJogo(appid);
    let resp = {};
    resp = {
        appid: mandar.appid,
        nome: mandar.nome,
        steamappid: retornaId(mandar.json),
        json: JSON.parse(mandar.json),
    }

    const nomeDoGame = document.querySelector(".container-esq .texto");
    let nomeSTR = `<h1>${resp.nome}</h1>`
    nomeDoGame.innerHTML = nomeSTR;

    const cima = document.querySelector(".cima");
    const baixo = document.querySelector(".baixo");
    let strBAIXO = "";

    cima.innerHTML = `<img src="${resp.json[resp.steamappid].data.header_image}" width="100%" height="400px" id="card-primario">`

    const container_direita = document.querySelector(".container-dir");

    let DireitaStr = `
    <div class="descricao">
        <h3>${resp.json[resp.steamappid].data.about_the_game}</h3>
    </div>
    `
    container_direita.innerHTML = DireitaStr;

    const container_baixo = document.querySelector(".container-baixo");

    container_baixo.innerHTML = `<h3>${resp.json[resp.steamappid].data.pc_requirements.minimum}</h3>`

    for (let i = 0; i < 3; i++) {
        strBAIXO += `
    <div class="card">
        <img src="${resp.json[resp.steamappid].data.screenshots[i].path_thumbnail}" width="100%" height="100px" onclick="MudarCard(this)">
    </div>
    `
    }

    baixo.innerHTML = strBAIXO;

    let testando = receberForum(resp.steamappid);
    console.log(testando);
    console.log(resp.appid);


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

async function receberJogo(id) {
    const url = `http://localhost:4567/GamePage/game?id=${id}`;
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

function MudarCard(element) {
    let primario = document.getElementById("card-primario");
    let aux = primario.getAttribute('src');
    let secundario = element;
    let aux2 = secundario.getAttribute('src');
    secundario.src = aux;
    primario.src = aux2;
}

// Criação dos comentários

const inserir_comentarios = document.querySelector(".container-forum");

final();

function final() {
    const totalContainers = 15;
    const subComentarios = 3;
    let str = "";
    str = criarContainer(totalContainers);
    inserir_comentarios.innerHTML = str;

    for (let i = totalContainers - 1; i >= 0; i--) {
        str = criarComentario(i, subComentarios);
        const container = document.querySelector(`.container-comentarios.number-${i}`);
        container.innerHTML = str;
    }
}

function criarContainer(number) {
    let insere = "";
    for (let i = 0; i < number; i++) {
        insere += `
        <div class="container-comentarios number-${i}"></div>`;
    }
    return insere;
}

function criarComentario(i, subComentarios) {
    let str = "";
    str += `
    <div class="comment">
        <div class="imagem-perfil">
            <i class="fa-solid fa-user fa-2xl"></i>
        </div>
        <div class="descricao-comment">
            <div class="texto">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, corrupti. Quae voluptates veniam tenetur quo aliquid alias! Quam est exercitationem debitis aliquam, repudiandae perferendis quidem, voluptas dolore vel dolores natus?</p>
            </div>
            <div class="respostas">
                <h6 class="number-${i}">responder</h6>
                <div class="abrir number-${i}">
                    <i class="fa-solid fa-plus fa-xl"></i>
                </div>
            </div>
            <div class="campo_preencher number-${i}">
                <label>
                    <textarea style="resize: none;">Insira seu comentário</textarea>
                    <input type="submit">
                </label>
            </div>
        </div>
    </div>`;

    str += criarSubComentario(i, subComentarios);
    return str;
}

function criarSubComentario(containerIndex, subComentarios) {
    let str = "";

    for (let i = 0; i < subComentarios; i++) {
        str += `
                    <div class="comment-inside number-${containerIndex}">
                        <div class="imagem-perfil">
                            <i class="fa-solid fa-user fa-2xl"></i>
                        </div>
                        <div class "descricao-comment">
                            <div class="texto">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, corrupti. Quae voluptates veniam tenetur quo aliquid alias! Quam est exercitationem debitis aliquam, repudiandae perferendis quidem, voluptas dolore vel dolores natus?</p>
                            </div>
                            <div class="respostas">
                                <h6>responder</h6>
                            </div>
                            <div class="campo_preencher">
                                <label>
                                    <textarea style="resize: none;">Insira seu comentário</textarea>
                                    <input type="submit">
                                </label>
                            </div>
                        </div>
                    </div>`;
    }

    return str;
}

async function receberForum(id) {
    const url = `http://localhost:4567/ForumPage?id=${id}`;
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


// abrir e fechar comentários

const rosto = document.querySelector(".forum");
const seta = document.querySelector(".container-seu-comentario");
let contador = 0;

rosto.addEventListener("click", () => {

    const game = document.querySelector(".container-dados");
    const forum = document.querySelector(".container-tudo-forum");

    if (contador == 0) {
        game.style.display = "none";
        forum.style.display = "block";
        seta.style.display = "block";
        contador++;
        comentarios()
    }
    else {
        game.style.display = "block";
        forum.style.display = "none";
        seta.style.display = "none";
        contador--;
    }

});

// abrir e fechar os subcomentarios
const respotas = document.querySelectorAll(".respostas h6");

respotas.forEach(resp => {

    resp.addEventListener("click", () => {

        if (resp.classList[1] == "open") {
            resp.classList.remove("open");
            const campo_preencher = document.querySelectorAll(".campo_preencher");
            campo_preencher.forEach(element => {
                element.style.display = "none";
            });
        }
        else {
            resp.classList.add("open");
            let string = resp.classList[0];
            const campo_preencher = document.querySelectorAll(".campo_preencher");
            campo_preencher.forEach(element => {
                if (element.classList[1] == string) {
                    element.style.display = "block";
                }
            });
        }
    })
});

// Comentários

const abrir_mais = document.querySelectorAll(".abrir");

abrir_mais.forEach(abrir => {
    abrir.addEventListener("click", () => {
        if (abrir.classList[2] == "open") {
            abrir.classList.remove("open");
            let comentarios = document.querySelectorAll(".comment-inside");
            comentarios.forEach(coment => {
                coment.style.display = "none";
            });
        }
        else {
            abrir.classList.add("open");
            let comentarios = document.querySelectorAll(".comment-inside");
            let string = abrir.classList[1];
            comentarios.forEach(coment => {
                if (coment.classList[1] == string) {
                    coment.style.display = "flex";
                }
            });
        }
    })
});
