let divInsert = document.querySelector(".apliRecebidas");

let db_apli = JSON.parse(localStorage.getItem("db_aplicacao"));
let nomeEmpLog = JSON.parse(sessionStorage.getItem("usuarioCorrente"));

let nomeIntro = document.querySelector("#nomeUsuario");

window.onload = () => {
    nomeIntro.innerHTML = nomeEmpLog.name;
}

let corpo = "";
console.log(db_apli.length);
console.log(db_apli);
// console.log(db_apli[19].empApli);
// console.log(db_apli[19].nomeApli);



let db_dadosAluno = JSON.parse(localStorage.getItem("db_perfilAluno"));

for(i = 1; i < db_apli.length; i++) {
    if(db_apli[i].empApli == nomeEmpLog.name){
        for(j = 1; j < db_dadosAluno.length; j++) {
            if(db_apli[i].nomeApli == db_dadosAluno[j].nome) {
                corpo += `
                    <div class="card_candidatos">
                        <p><span class="campoApli">Nome do candidato:</span> ${db_dadosAluno[j].nome}</p>
                        <p><span class="campoApli">Idade do candidato:</span> ${db_dadosAluno[j].idade}</p>
                        <p><span class="campoApli">Telefone do candidato:</span> ${db_dadosAluno[j].contato}</p>
                        <p><span class="campoApli">E-mail do candidato:</span> ${db_dadosAluno[j].email}</p>
                        <p><span class="campoApli">Estado civil do candidato:</span> ${db_dadosAluno[j].estadoCivil}</p>
                        <p><span class="campoApli">Endereço do candidato:</span> ${db_dadosAluno[j].endereço}</p>
                        <p><span class="campoApli">Experiência do candidato:</span> ${db_dadosAluno[j].experiencia}</p>
                        <p><span class="campoApli">Formação do candidato:</span> ${db_dadosAluno[j].formacao}</p>
                        <p><span class="campoApli">Objetivos do candidato:</span> ${db_dadosAluno[j].objetivo}</p>
                        <p><span class="campoApli">SE CANDIDATOU PARA A VAGA:</span> ${db_apli[i].vagaApli}</p>
                        <br>
                    </div>
                `
            }
            divInsert.innerHTML = corpo;
        }

    }
}

let sair = () => {
    let confirma = confirm("Tem certeza que você quer sair?");
    if(confirma) {
        window.location.href = "./index.html"
    }
}