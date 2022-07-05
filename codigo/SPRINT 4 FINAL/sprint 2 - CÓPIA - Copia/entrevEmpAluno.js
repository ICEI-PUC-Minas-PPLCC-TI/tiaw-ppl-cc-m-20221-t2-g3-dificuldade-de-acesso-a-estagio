let numVagasIntro = document.querySelector(".intro");
let containerDiv = document.querySelector(".containerEmp");

let db_inscricoes = JSON.parse(localStorage.getItem("db_inscEnt"));
let db_entrevistas = JSON.parse(localStorage.getItem("db_horarios"));


let nomeIntro = document.querySelector("#nomeUsuario");

window.onload = () => {
    var usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
    nomeIntro.innerHTML = usuarioCorrente.name;
    let corpo = "";
    
    for(i = 1; i < db_inscricoes.length; i++) {
        if(db_inscricoes[i].nomeApli == usuarioCorrente.name) {
            for(j = 0; j < db_entrevistas.length; j++) {
                if(db_inscricoes[i].vagaApli == db_entrevistas[j].nomeVaga) {
                    corpo += `
                        <div class="boxInscFeitas">
                            <h3>Nome da empresa: ${db_inscricoes[i].empApli}</h3>
                            <p>Nome da Vaga: ${db_inscricoes[i].vagaApli}</p>
                            <p>Endereço de onde será a entrevista: ${db_entrevistas[j].endereco}</p>
                            <p>Horário selecionado: ${db_inscricoes[i].horarioApli}</p>
                        </div>    
                    `
                    console.log(corpo);
                    containerDiv.innerHTML = corpo;
                }
            }
            console.log(i);
        }
    }
}

let sair = () => {
    let confirma = confirm("Tem certeza que você quer sair?");
    if(confirma) {
        window.location.href = "./index.html"
    }
}


// onload = () => {
 
//     let dados = JSON.parse(localStorage.getItem("db_horarios"));

//     let numIntro;
//     let numVagas = document.createElement("p");
//     numVagas.setAttribute('class', 'numDeVagasDivulg');

//     if(dados !== null) {

//         numIntro = `Você já se cadastrou em ${dados.length} vagas`;
//         numVagas.innerHTML = numIntro;
//         numVagasIntro.appendChild(numVagas);

//         dados.map((item) => {
//             let boxDiv = document.createElement("div");
//             boxDiv.setAttribute('class', 'box_div');
//             boxDiv.setAttribute('id', `row-${dados.length}`);

//             let nome = document.createElement("p");
//             nome.innerHTML = `<span class="labelRender">Nome da vaga</span>: ${localStorage.getItem('t1')}`;
//             boxDiv.appendChild (nome);

//             let area = document.createElement("p");
//             area.innerHTML = `<span class="labelRender">Área da vaga</span>: ${localStorage.getItem('t2')}`;
//             boxDiv.appendChild (area);

//             let endereco = document.createElement("p");
//             endereco.innerHTML = `<span class="labelRender">Endereço onde a entrevista será realizada</span>: ${localStorage.getItem('t3')}`;
//             boxDiv.appendChild (endereco);

//             let horarios = document.createElement("p");
//             horarios.innerHTML = `<span class="labelRender">Horário:</span> ${localStorage.getItem('t4')}`;

        
//             boxDiv.appendChild (horarios);
//             containerDiv.appendChild(boxDiv);
//         })

//     } else {
//         numIntro = "Ainda não foram divulgados nenhum horário para entrevistas de estágio";
//         numVagas.innerHTML = numIntro;
//         numVagasIntro.appendChild(numVagas);
//     }

// }
