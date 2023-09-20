const adm = {
    email: "adm@gmail.com",
    senha: "1234",
}

function Mudar (){

    elemento = document.getElementById("cadastrar");
    bloco = document.getElementById("container-bloco");
    bloco.style.display = "none";
    bloco2 = document.getElementById("container-registrar");
    bloco2.style.display = "flex";
}

function Voltar (){
    elemento = document.getElementById("voltar");
    bloco = document.getElementById("container-registrar");
    bloco.style.display = "none";
    bloco2 = document.getElementById("container-bloco");
    bloco2.style.display = "flex";
}

function Confirmar (){

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email == adm.email && senha == adm.senha) {
        alert("Bem vindo de Volta");
        window.location.href = "bobo";
    } else {
        alert("Senha ou email errados");
    }
    
}

function Cadastrar (){

    let email = document.getElementById("email2").value;
    let senha = document.getElementById("senha2").value;
    let confimasenha = document.getElementById("confirmasenha").value;
    let nome = document.getElementById("nome");
    let date = document.getElementById("date");

    if(senha == confimasenha){
        // manda email, senha, nome, date para o backend meu bom
        alert("Cadastrado");
        window.location.href = "bobo";
    }
    else{
        alert("Suas senhas estão diferentes");
    }

}