let divInsertInfo = document.querySelector(".infoPerfil");

let nomeIntro = document.querySelector("#nomeUsuario");

window.onload = () => {
    var usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
    nomeIntro.innerHTML = usuarioCorrente.name;
    
}

let db_perfilInfo = JSON.parse(localStorage.getItem("db_perfilEmp"));
console.log(db_perfilInfo.length);

let nomeEmp = document.createElement("h3");
let estado = document.createElement("p");
let anoCriacao = document.createElement("p");
let tel = document.createElement("p");
let emailEmp = document.createElement("p");
let enderecoEmp = document.createElement("p");
let objetivoEmp = document.createElement("p");
let InfoEmp = document.createElement("p");
let experienciasEmp = document.createElement("p");

nomeEmp.innerHTML = "Nome da empresa: ";
nomeEmp.innerHTML = db_perfilInfo.data[db_perfilInfo.length - 1].nome;
divInsertInfo.innerHTML = nomeEmp;

estado.innerHTML = "Estado: ";
estado.innerHTML = db_perfilInfo.data[db_perfilInfo.length - 1].estado;
divInsertInfo.innerHTML = estado;

anoCriacao.innerHTML = "Ano de criação da empresa: ";
anoCriacao.innerHTML = db_perfilInfo.data[db_perfilInfo.length - 1].ano;
divInsertInfo.innerHTML = anoCriacao;

tel.innerHTML = "Telefone da empresa: ";
tel.innerHTML = db_perfilInfo.data[db_perfilInfo.length - 1].contato;
divInsertInfo.innerHTML = tel;

emailEmp.innerHTML = "E-mail da empresa: ";
emailEmp.innerHTML = db_perfilInfo.data[db_perfilInfo.length - 1].email;
divInsertInfo.innerHTML = emailEmp;

enderecoEmp.innerHTML = "Empresa da empresa: ";
enderecoEmp.innerHTML = db_perfilInfo.data[db_perfilInfo.length - 1].empresa;
divInsertInfo.innerHTML = enderecoEmp;

objetivoEmp.innerHTML = "Quais são os objetivos da empresa? ";
objetivoEmp.innerHTML = db_perfilInfo.data[db_perfilInfo.length - 1].objetivo;
divInsertInfo.innerHTML = objetivoEmp;

InfoEmp.innerHTML = "Informações sobre a empresa: ";
InfoEmp.innerHTML = db_perfilInfo.data[db_perfilInfo.length - 1].formacao;
divInsertInfo.innerHTML = InfoEmp;

experienciasEmp.innerHTML = "Ano de criação da empresa: ";
experienciasEmp.innerHTML = db_perfilInfo.data[db_perfilInfo.length - 1].experienciasEmp;
divInsertInfo.innerHTML = experienciasEmp;