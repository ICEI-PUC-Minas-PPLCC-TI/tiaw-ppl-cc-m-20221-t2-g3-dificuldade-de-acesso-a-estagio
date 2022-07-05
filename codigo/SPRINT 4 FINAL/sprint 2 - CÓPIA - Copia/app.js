// Adiciona funções para tratar os eventos 
// Obtem os valores dos campos do formulário
let campoNome = document.querySelector("#nome");
let campoSobrenome = document.querySelector("#sobrenome");
let campoEstadoCivil = document.querySelector("#estadoCivil");
let campoNasc = document.querySelector('#idade');
let campoTelefone = document.querySelector("#contato");
let campoEmail = document.querySelector('#email');
let campoEndereco = document.querySelector("#endereco");
let campoObjetivo = document.querySelector("#objetivo");
let campoFormacao = document.querySelector("#formacao");
let campoExperiencia = document.querySelector("#experiencia");


// let btnSalvaDados = document.querySelector("btnInsert");

let salvaDadosPerfilAluno = () => {
    alert("Os dados referentes ao aluno foram salvos com sucesso");
    // let novoId = 1;
    // if (db.data.length != 0) 
    //     novoId = db.data[db.data.length - 1].id + 1;
    let estagiario = { 
        nome: campoNome.value, 
        sobrenome: campoSobrenome.value, 
        estadoCivil: campoEstadoCivil.value, 
        nascimento: campoNasc.value, 
        contato: campoTelefone.value, 
        email: campoEmail.value,
        endereco: campoEndereco.value,
        objetivo: campoObjetivo.value,
        formacao: campoFormacao.value,
        experiencia: campoExperiencia.value 
    }

    let db_perfilAluno = JSON.parse(localStorage.getItem("db_perfilAluno"));
    if(!(db_perfilAluno instanceof Array))
        db_perfilAluno = [db_perfilAluno];
    
    db_perfilAluno.push(estagiario);
    localStorage.setItem("db_perfilAluno", JSON.stringify(db_perfilAluno));
    console.log(db_perfilAluno);

    // if(db_perfilEmp) {
    //     // let dbL = JSON.parse(db_perfilEmp);
    //     db_perfilEmp.push(empresa);
    //     localStorage.setItem("db_perfilEmp", JSON.stringify(db_perfilEmp));
    // } else {
    //     localStorage.setItem("db_perfilEmp", JSON.stringify([empresa]));
    // }
    // console.log(db_perfilEmp);
}

let nomeIntro = document.querySelector("#nomeUsuario");
onload = () => {
    let nomeEmpLog = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
    let db_perfilAluno = JSON.parse(localStorage.getItem("db_perfilAluno"));
    if(db_perfilAluno != null) {
        for(i = 1; i < db_perfilAluno.length; i++) {
            if(db_perfilAluno[i].nome == nomeEmpLog.name) {
                campoNome.setAttribute('value', db_perfilAluno[i].nome);
                campoSobrenome.setAttribute('value', db_perfilAluno[i].sobrenome);
                campoEstadoCivil.setAttribute('value', db_perfilAluno[i].estadoCivil);
                campoNasc.setAttribute('value', db_perfilAluno[i].nascimento);
                campoTelefone.setAttribute('value', db_perfilAluno[i].contato);
                campoEmail.setAttribute('value', db_perfilAluno[i].email);
                campoEndereco.setAttribute('value', db_perfilAluno[i].endereco);
                campoObjetivo.setAttribute('value', db_perfilAluno[i].objetivo);
                campoFormacao.setAttribute('value', db_perfilAluno[i].formacao);
                campoExperiencia.setAttribute('value', db_perfilAluno[i].experiencia);

            }
        }
    }
    nomeIntro.innerHTML = nomeEmpLog.name;
}

let sair = () => {
    let confirma = confirm("Tem certeza que você quer sair?");
    if(confirma) {
        window.location.href = "./index.html"
    }
}