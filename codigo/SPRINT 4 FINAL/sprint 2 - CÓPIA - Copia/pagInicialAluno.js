let divVagasCad = document.querySelector(".area_vagasCad");
let divVagasDisp = document.querySelector(".vagasDisponiveis");
let divEmpDisp = document.querySelector(".empDisponiveis");

let ls = JSON.parse(localStorage.getItem("db_vagasCad"));
window.onload = () => {
    let nomeIntro = document.querySelector("#nomeUsuario");

    var usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
    nomeIntro.innerHTML = usuarioCorrente.name;

    let corpo = "";

    for(i = 1; i < ls.data.length; i++) {
        corpo += `
            <div class="flip-card" id="card_desq_flip">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>Nome da vaga: ${ls.data[i].nomeVaga}</h3>
                        <h3>Nome da empresa: ${ls.data[i].nome}</h3>
                        <p>Área: ${ls.data[i].area}</p>
                        <p class="card-desq">Nosso Site: ${ls.data[i].site}</p>
                    </div>
                    <div class="flip-card-back">
                        <div class="info_card">
                            <p class="card-desq info_title">Sobre: ${ls.data[i].sobre}</p>
                            <p class="card-desq info_title">Modalidade: ${ls.data[i].modalidade}</p>
                            <p class="card-desq info_title">Estado onde nos encontramos: ${ls.data[i].estado}</p>
                            <p class="card-desq info_title">Nosso endereço: ${ls.data[i].endereco}</p>
                            <p class="card-desq">Salário (R$): ${ls.data[i].salario}</p>
                            <p class="card-desq">Turno: ${ls.data[i].turno}</p>
                            <p class="card-desq">Horas de trabalho: ${ls.data[i].horas}</p>
                            <p class="card-desq">Nosso e-mail: ${ls.data[i].email}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        divVagasCad.innerHTML = corpo;
    }

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
    // for(i = 0; i < ls.data.length; i++) {
    //     txtEmp += `
    //         <option>${ls.data[i].nome}</option>
    //     `
    //     divEmpDisp.innerHTML = txtEmp;
    // }
}

let buscarVagas = () => {
    let nomeEmpSelec = document.querySelector("#inputEmpEscolhida");

    let divVagasDisp = document.querySelector(".vagasDisponiveis");
    let txtVagas = "";

    for(i = 0; i < ls.data.length; i++) {
        if(ls.data[i].nome == nomeEmpSelec.value) {
            txtVagas += `
                <option>${ls.data[i].nomeVaga}</option>
            `
            divVagasDisp.innerHTML = txtVagas;
        }
    }
}

let feitaAplicacao = () => {
    let inputNome = document.querySelector("#inputApliNome");
    let inputTel = document.querySelector("#inputApliTel");
    let inputEmail = document.querySelector("#inputApliEmail");
    let inputVagaEscolhida = document.querySelector("#inputVagaEscolhida");
    let inputEmpEscolhida = document.querySelector("#inputEmpEscolhida");

    

    aplicacao = {
        nomeApli: inputNome.value,
        telApli: inputTel.value,
        emailApli: inputEmail.value,
        vagaApli: inputVagaEscolhida.value,
        empApli: inputEmpEscolhida.value
    }

    let db_aplicacao = JSON.parse(localStorage.getItem("db_aplicacao"));
    if(!(db_aplicacao instanceof Array))
        db_aplicacao = [db_aplicacao];
    
    db_aplicacao.push(aplicacao);
    localStorage.setItem("db_aplicacao", JSON.stringify(db_aplicacao));
    console.log(db_aplicacao);
    alert("Sua aplicação foi realizada com sucesso. Entraremos em contato com você em breve");
}

let sair = () => {
    let confirma = confirm("Tem certeza que você quer sair?");
    if(confirma) {
        window.location.href = "./index.html"
    }
}

