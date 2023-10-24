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
        window.location.href = "HomePage.html";
    } else {
        alert("Senha ou email errados");
    }
    
}

function Cadastrar (){

    let email = document.getElementById("email2").value;
    let senha = document.getElementById("senha2").value;
    let confimasenha = document.getElementById("confirmasenha").value;
    let nome = document.getElementById("nome").value;
    let date = document.getElementById("date").value;
    let termo = document.getElementById("termodeuso");
    console.log(nome);

    if (email != "" && senha != "" && nome != "" && date != "" && confirmasenha != "") {
        if(senha == confimasenha){
            if(termo.checked){
                // manda email, senha, nome, date para o backend meu bom
                alert("Cadastrado");
                window.location.href = "bobo.html";
            }
            else{
                alert("Aceite os termos de uso")
            }
        }
        else{
            alert("Suas senhas estão diferentes");
        }
    }
    else{
        alert("Preencha todos os dados");
    }

}