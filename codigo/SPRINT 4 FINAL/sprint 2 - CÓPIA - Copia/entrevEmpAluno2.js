let divInsert = document.querySelector(".horariosDisp");

let db_entrev = JSON.parse(localStorage.getItem("db_horarios"));
let nomeIntro = document.querySelector("#nomeUsuario");

window.onload = () => {
    var usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
    nomeIntro.innerHTML = usuarioCorrente.name;
    
    let corpo = "";
    
    
    if(db_entrev !== null) {
        db_entrev.map((item) => {
            let boxDiv = document.createElement("div");
            boxDiv.setAttribute('class', 'box_div');
            boxDiv.setAttribute('id', `row-${db_entrev.length}`);

            let nomeEmp = document.createElement("p");
            nomeEmp.innerHTML = `<span class="labelRender">Nome da empresa divulgadora</span>: ${item.nomeEmp}`;
            boxDiv.appendChild (nomeEmp);
            
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
            divInsert.appendChild(boxDiv);
        })
    
    }

    let divEmpDisp = document.querySelector(".empDisponiveis");
    let txtEmp = "";

    let ls_usuarios = JSON.parse(localStorage.getItem("db_usuario"));

    for(i = 0; i < ls_usuarios.length; i++) {
        if(ls_usuarios[i].tipo == "versão empresa") {
            txtEmp += `
                <option>${ls_usuarios[i].name}</option>
            `
            divEmpDisp.innerHTML = txtEmp;

        }
    }

    // for(i = 0; i < db_entrev.length; i++) {
    //     txtEmp += `
    //         <option>${db_entrev[i].nomeEmp}</option>
    //     `
    //     divEmpDisp.innerHTML = txtEmp;
    // }
} 



let buscarVagas = () => {
    let nomeEmpSelec = document.querySelector("#inputEmpEscolhida").value;

    let divVagasDisp = document.querySelector(".vagasDisponiveis");
    let txtVagas = "";

    for(i = 0; i < db_entrev.length; i++) {
        if(db_entrev[i].nomeEmp == nomeEmpSelec) {
            txtVagas += `
                <option>${db_entrev[i].nomeVaga}</option>
            `
            divVagasDisp.innerHTML = txtVagas;
        }
    }
}

let buscarHorarios = () => {
    let nomeVagaSelec = document.querySelector("#inputVagaEscolhida").value;

    let divHorariosDivulgados = document.querySelector("#inputHorarioEscolhida");
    let txtHorarios = "";

    for(i = 0; i < db_entrev.length; i++) {
        if(db_entrev[i].nomeVaga == nomeVagaSelec) {
            for(j = 0; j < db_entrev[i].horarios.length; j++) {
                txtHorarios += `
                    <option>${db_entrev[i].horarios[j]}</option>
                `
                divHorariosDivulgados.innerHTML = txtHorarios;
            }
        }
    }
}

let feitaAplicacao = () => {
    let nomeEmpSelecValue = document.querySelector("#inputEmpEscolhida");
    let nomeVagaSelecValue = document.querySelector("#inputVagaEscolhida");
    let horarioSelecValue = document.querySelector("#inputHorarioEscolhida");
    let inputNome = document.querySelector("#inputApliNome");
    let inputTel = document.querySelector("#inputApliTel");
    let inputEmail = document.querySelector("#inputApliEmail");

    inscricaoEnt = {
        nomeApli: inputNome.value,
        telApli: inputTel.value,
        emailApli: inputEmail.value,
        vagaApli: nomeVagaSelecValue.value,
        empApli: nomeEmpSelecValue.value,
        horarioApli: horarioSelecValue.value
    }

    let db_inscEnt = JSON.parse(localStorage.getItem("db_inscEnt"));
    if(!(db_inscEnt instanceof Array))
        db_inscEnt = [db_inscEnt];
    
    db_inscEnt.push(inscricaoEnt);
    localStorage.setItem("db_inscEnt", JSON.stringify(db_inscEnt));
    console.log(db_inscEnt);
    alert("Sua inscrição para a entrevista de emprego foi realizada com sucesso. Entraremos em contato com você em breve");
}



// for(i = 0; i < db_entrev.length; i++) {
//     corpo += `
//     <div class="divInsertHorariosVagas">
//         <h3>Nome da empresa divulgadora: ${db_entrev[i].nomeEmp}</h3>
//         <h3>Nome da vaga: ${db_entrev[i].nomeVaga}</h3>
//         <p>Área de atuação: ${db_entrev[i].areaVaga}</p>
//         <p>Endereço onde a entrevista será realizada: ${db_entrev[i].endereco}</p>
//         <p>Horários disponíveis: ${db_entrev[i].endereco}</p>
//     </div>
//     `
//     divInsert.innerHTML = corpo;
// }

let sair = () => {
    let confirma = confirm("Tem certeza que você quer sair?");
    if(confirma) {
        window.location.href = "./index.html"
    }
}