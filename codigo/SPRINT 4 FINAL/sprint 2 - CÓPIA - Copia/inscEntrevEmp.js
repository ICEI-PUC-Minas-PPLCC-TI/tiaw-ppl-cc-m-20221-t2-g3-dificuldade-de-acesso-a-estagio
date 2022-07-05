let db_inscricoes = JSON.parse(localStorage.getItem("db_inscEnt"));
let nomeIntro = document.querySelector("#nomeUsuario");
let divInsert = document.querySelector(".boxInscricoes");

var usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
nomeIntro.innerHTML = usuarioCorrente.name;

let corpo = "";

for(i = 1; i < db_inscricoes.length; i++) {
    if(db_inscricoes[i].empApli == usuarioCorrente.name) {
        let divParag = document.createElement("div");
        divParag.setAttribute('class', 'divInsertParag');
        
        let paragNome = document.createElement("h4");
        // let paragNomeTit = document.createElement("p");
        // paragNomeTit.innerHTML = "Nome do inscrito: ";
        paragNome.innerHTML = `Nome do inscrito: ${db_inscricoes[i].nomeApli}`;
        // paragNome.innerHTML = db_inscricoes[i].nomeApli;
        // paragNome.appendChild(paragNomeTit);
        divParag.appendChild(paragNome);

        let paragVagaInsc = document.createElement("h4");
        paragVagaInsc.innerHTML = `Vaga à qual aplicou: ${db_inscricoes[i].vagaApli}`;
        divParag.appendChild(paragVagaInsc);

        let paragHorario = document.createElement("p");
        paragHorario.innerHTML = `Horário ao qual aplicou: ${db_inscricoes[i].horarioApli}`;
        divParag.appendChild(paragHorario);

        let paragTel = document.createElement("p");
        paragTel.innerHTML = `Telefone de contato: ${db_inscricoes[i].telApli}`;
        divParag.appendChild(paragTel);

        let paragEmail = document.createElement("p");
        paragEmail.innerHTML = `E-mail de contato: ${db_inscricoes[i].emailApli}`;
        divParag.appendChild(paragEmail);

        divInsert.appendChild(divParag);
    }
}


let sair = () => {
    let confirma = confirm("Tem certeza que você quer sair?");
    if(confirma) {
        window.location.href = "./index.html"
    }
}