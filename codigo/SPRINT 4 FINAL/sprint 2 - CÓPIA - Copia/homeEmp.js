let div = document.querySelector(".divTxt");
let nomeIntro = document.querySelector("#nomeUsuario");

let db_vagas = JSON.parse(localStorage.getItem("db_vagasCad"));
let nomeEmpLog = JSON.parse(sessionStorage.getItem("usuarioCorrente"));

window.onload = () => {
    nomeIntro.innerHTML = nomeEmpLog.name;
}

let corpo = "";
for(i = 0; i < db_vagas.data.length; i++) {
    if(db_vagas.data[i].nome == nomeEmpLog.name) {
        corpo += `
            <div class="boxVagas">
                <p><span class="campoApli">Nome da vaga:</span> ${db_vagas.data[i].nomeVaga}</p>
                <p><span class="campoApli">Sobre a vaga:</span> ${db_vagas.data[i].sobre}</p>
                <p><span class="campoApli">Área:</span> ${db_vagas.data[i].area}</p>
                <p><span class="campoApli">Modalidade:</span> ${db_vagas.data[i].modalidade}</p>
                <p><span class="campoApli">E-mail:</span> ${db_vagas.data[i].email}</p>
                <p><span class="campoApli">Endereço:</span> ${db_vagas.data[i].endereco}</p>
                <p><span class="campoApli">Estado:</span> ${db_vagas.data[i].estado}</p>
                <p><span class="campoApli">Turno:</span> ${db_vagas.data[i].turno}</p>
                <p><span class="campoApli">Horas de trabalho:</span> ${db_vagas.data[i].horas}</p>
                <p><span class="campoApli">Salário (R$):</span> ${db_vagas.data[i].salario}</p>
                <p><span class="campoApli">Site da empresa:</span> ${db_vagas.data[i].site}</p>
            </div>
        `
        div.innerHTML = corpo;
    }
}


let sair = () => {
    let confirma = confirm("Tem certeza que você quer sair?");
    if(confirma) {
        window.location.href = "./index.html"
    }
}