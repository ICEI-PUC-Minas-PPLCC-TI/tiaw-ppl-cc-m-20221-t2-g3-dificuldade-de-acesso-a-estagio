let numVagasIntro = document.querySelector(".intro");
let testeDiv = document.querySelector(".teste");
let containerDiv = document.querySelector(".container");

let nomeIntro = document.querySelector("#nomeUsuario");


onload = () => {
    var usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
    nomeIntro.innerHTML = usuarioCorrente.name;

    let dados = JSON.parse(localStorage.getItem("db_horarios"));

    let numIntro;
    let numVagas = document.createElement("p");
    numVagas.setAttribute('class', 'numDeVagasDivulg');

    if(dados !== null) {

        numIntro = `Você já cadastrou ${dados.length} vagas`;
        numVagas.innerHTML = numIntro;
        numVagasIntro.appendChild(numVagas);

        dados.map((item) => {
            if(item.nomeEmp == usuarioCorrente.name) {
                
                let boxDiv = document.createElement("div");
                boxDiv.setAttribute('class', 'box_div');
                boxDiv.setAttribute('id', `row-${dados.length}`);
    
                // let nomeEmp = document.createElement("p");
                // nomeEmp.innerHTML = `<span class="labelRender">Nome da empresa divulgadora</span>: ${item.nomeEmp}`;
                // boxDiv.appendChild (nomeEmp);
                
                let nome = document.createElement("p");
                nome.innerHTML = `<span class="labelRender">Nome da vaga</span>: ${item.nomeVaga}`;
                boxDiv.appendChild (nome);
    
                let area = document.createElement("p");
                area.innerHTML = `<span class="labelRender">Área da vaga</span>: ${item.areaVaga}`;
                boxDiv.appendChild (area);
    
                let endereco = document.createElement("p");
                endereco.innerHTML = `<span class="labelRender">Endereço onde a entrevista será realizada</span>: ${item.endereco}`;
                boxDiv.appendChild (endereco);
    
                let horarios = document.createElement("p");
                horarios.innerHTML = `<span class="labelRender">Horários disponíveis para as entrevistas (dia - horário):</span>`;
    
                let listHorario = document.createElement("ul");
                horarios.appendChild (listHorario)
                item.horarios.forEach((list, i) => {
                    let horList = document.createElement("li");
                    console.log(item.horarios[i]);
                    horList.innerHTML = item.horarios[i];
                    
                    listHorario.appendChild(horList);
                })
                boxDiv.appendChild (horarios);
                containerDiv.appendChild(boxDiv);
            }
        })

    } else {
        numIntro = "Ainda não foram divulgados nenhum horário para entrevistas de estágio";
        numVagas.innerHTML = numIntro;
        numVagasIntro.appendChild(numVagas);
    }

}


let adicionar = () => {
    window.location.href= "./modal.html";
};

let sair = () => {
    let confirma = confirm("Tem certeza que você quer sair?");
    if(confirma) {
        window.location.href = "./index.html"
    }
}