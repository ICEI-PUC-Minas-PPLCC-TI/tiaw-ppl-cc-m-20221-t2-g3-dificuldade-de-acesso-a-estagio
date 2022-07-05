// Adiciona funções para tratar os eventos 
// Obtem os valores dos campos do formulário
let campoNome = document.querySelector("#nome");
let campoEstado = document.querySelector("#estado");
let campoAno = document.querySelector("#ano");
let campoTelefone = document.querySelector("#contato");
let campoEmail = document.querySelector("#email");
let campoEndereco = document.querySelector("#endereco");
let campoObjetivo = document.querySelector("#objetivo");
let campoFormacao = document.querySelector("#formacao");
let campoExperiencia = document.querySelector("#experiencia");

// let btnSalvaDados = document.querySelector("btnInsert");

function salvaDadosPerfil() {
    alert("Os dados referentes à empresa foram salvos com sucesso");
    // let novoId = 1;
    // if (db.data.length != 0) 
    //     novoId = db.data[db.data.length - 1].id + 1;
    let empresa = { 
        // id: novoId,
        nome: campoNome.value, 
        estado: campoEstado.value, 
        ano: campoAno.value, 
        contato: campoTelefone.value, 
        email: campoEmail.value,
        endereco: campoEndereco.value,
        objetivo: campoObjetivo.value,
        formacao: campoFormacao.value,
        experiencia: campoExperiencia.value 
    }

    let db_perfilEmp = JSON.parse(localStorage.getItem("db_perfilEmp"));
    if(!(db_perfilEmp instanceof Array))
        db_perfilEmp = [db_perfilEmp];
    
    db_perfilEmp.push(empresa);
    localStorage.setItem("db_perfilEmp", JSON.stringify(db_perfilEmp));
    console.log(db_perfilEmp);


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
    var usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
    nomeIntro.innerHTML = usuarioCorrente.name;

    let db_perfilEmp = JSON.parse(localStorage.getItem("db_perfilEmp"));
    if(db_perfilEmp != null) {
        campoNome.setAttribute('value', db_perfilEmp[db_perfilEmp.length - 1].nome);
        campoEstado.setAttribute('value', db_perfilEmp[db_perfilEmp.length - 1].estado);
        campoAno.setAttribute('value', db_perfilEmp[db_perfilEmp.length - 1].ano);
        campoTelefone.setAttribute('value', db_perfilEmp[db_perfilEmp.length - 1].contato);
        campoEmail.setAttribute('value', db_perfilEmp[db_perfilEmp.length - 1].email);
        campoEndereco.setAttribute('value', db_perfilEmp[db_perfilEmp.length - 1].endereco);
        campoObjetivo.setAttribute('value', db_perfilEmp[db_perfilEmp.length - 1].objetivo);
        campoFormacao.setAttribute('value', db_perfilEmp[db_perfilEmp.length - 1].formacao);
        campoExperiencia.setAttribute('value', db_perfilEmp[db_perfilEmp.length - 1].experiencia);
    }
}

let sair = () => {
    let confirma = confirm("Tem certeza que você quer sair?");
    if(confirma) {
        window.location.href = "./index.html"
    }
}

// onload = () => {
//     let dbDados = JSON.parse(localStorage.getItem(db_perfilEmp));
//     campoNome.value = dbDados.nome;
//     campoEstado = dbDados.estado;
//     campoAno = dbDados.ano;
//     campoTelefone = dbDados.contato;
//     campoEmail = dbDados.email;
//     campoEndereco = dbDados.endereco;
//     campoObjetivo = dbDados.objetivo;
//     campoFormacao = dbDados.formacao;
//     campoExperiencia = dbDados.experiencia;
// }

// btnSalvaDados.addEventListener('click', salvaDadosPerfil);

// function init() {

//     $("#btnInsert").click(function () {


//         // let campoNome = $(function init() {
//         //         // Adiciona funções para tratar os eventos 
//         //         $("#btnInsert").click(function () {
    
//         //             // Obtem os valores dos campos do formulário
//         //             let campoNome = $("#nome").val();
//         //             let campoEstado = $("#estado").val();
//         //             let campoAno = $('#ano').val();
//         //             let campoTelefone = $("#contato").val();
//         //             let campoEmail = $('#email').val();
//         //             let campoEndereco = $('#endereco').val();
//         //             let campoObjetivo = $('#objetivo').val();
//         //             let campoFormacao = $('#formacao').val();
//         //             let campoExperiencia = $('#experiencia').val();
//         //             let empresa = { 
//         //                 nome: campoNome, 
//         //                 estado: campoEstado, 
//         //                 ano: campoAno, 
//         //                 contato: campoTelefone, 
//         //                 email: campoEmail,
//         //                 endereco: campoEndereco,
//         //                 objetivo: campoObjetivo,
//         //                 formacao: campoFormacao,
//         //                 experiencia: campoExperiencia };
    
//         //             insertEmpresa(empresa);
//         //         });
//         //     }).val();
//         // let campoEstado = $("#estado").val();
//         // let campoAno = $('#ano').val();
//         // let campoTelefone = $("#contato").val();
//         // let campoEmail = $('#email').val();
//         // let campoEndereco = $('#endereco').val();
//         // let campoObjetivo = $('#objetivo').val();
//         // let campoFormacao = $('#formacao').val();
//         // let campoExperiencia = $('#experiencia').val();
//         // let empresa = { 
//         //     nome: campoNome, 
//         //     estado: campoEstado, 
//         //     ano: campoAno, 
//         //     contato: campoTelefone, 
//         //     email: campoEmail,
//         //     endereco: campoEndereco,
//         //     objetivo: campoObjetivo,
//         //     formacao: campoFormacao,
//         //     experiencia: campoExperiencia 
//         // };

//         insertEmpresa(empresa);
//     });
// }

// // declara um conjunto inicial de contatos
// // var db_contatos_inicial = {
// //     "data": [
// //         {
// //             "id": 1,
// //             "nome": "Google",
// //             "estado": "Minas Gerais",
// //             "ano": 1963,
// //             "contato": "2197141542",
// //             "email": "google@hotmail.com",
// //             "endereco": "rua rio de janeiro, 1599",
// //             "objetivo": "Se tornar uma empresa com os melhores funcionários",
// //             "formacao": "Criando sites e aplicativos com muito amor desde 1963",
// //             "experiencia": "Temos uma empresa no Japão, uma na China e uma no Brasil"
// //         }
// //     ]
// // }

// // Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
// var db = JSON.parse(localStorage.getItem('db_contato'));
// if (!db) {
//     db = db_contatos_inicial
// };

// // Exibe mensagem em um elemento de ID msg
// function displayMessage(msg) {
//     $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
// }

// function insertEmpresa(empresa) {
//     // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
//     let novoId = 1;
//     if (db.data.length != 0) 
//       novoId = db.data[db.data.length - 1].id + 1;
//     let novoEmpresa = {
//         "id": novoId,
//         "nome": empresa.nome,
//         "estado" : empresa.estado,
//         "ano": empresa.ano,
//         "contato" : empresa.contato,
//         "email": empresa.email,
//         "endereco": empresa.endereco,
//         "objetivo": empresa.objetivo,
//         "formacao": empresa.formacao,
//         "experiencia": empresa.experiencia
//     };

//     // Insere o novo objeto no array
//     db.data.push(novoEmpresa);

//     // Atualiza os dados no Local Storage
//     localStorage.setItem('db_perfilEmp', JSON.stringify(db));
//     console.log(localStorage.getItem('db_perfilEmp'));
// }

