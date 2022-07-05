//Código JS para a parte de Cadastro
let nome = document.querySelector("#name_input");
let sobrenome = document.querySelector("#sirname_input");
let email = document.querySelector("#email_input");
let senha = document.querySelector("#password_input");
let btnCad = document.querySelector("#btn_signup");
let estudanteRadio = document.querySelector("#estudanteRadio");
let empresaRadio = document.querySelector("#empresaRadio");


let cadastro = () => {
    console.log("chamado");

    let tipoTemp = (estudanteRadio.checked) ? "versão estudante":"versão empresa";
    let users = {
        name: nome.value,
        sirname: sobrenome.value,
        emails: email.value,
        password: senha.value,
        tipo: tipoTemp
    }


    let db_usuario = localStorage.getItem("db_usuario");
    if (db_usuario) {
        let db_users_2 = JSON.parse(db_usuario);
        db_users_2.push(users);
        localStorage.setItem("db_usuario", JSON.stringify(db_users_2));
    } else {
        localStorage.setItem("db_usuario", JSON.stringify([users]));
    }

    alert(`O usuário ${nome.value} foi cadastrado com sucesso para a ${tipoTemp}`);

    return true;
}


//Código JS para a parte do Login
let userName = document.querySelector("#input_user");
let userPassword = document.querySelector("#input_password");
let btnLog = document.querySelector("#btn_login");


function processaForm (form) {
    form.preventDefault ();
    console.log("Teste");
    let usuarioDB = JSON.parse(localStorage.getItem("db_usuario"));

    if(usuarioDB) {
        console.log("existe db");
        console.log(document.location);        
        

        usuarioDB.forEach(element => {
            if ((element.name == userName.value) && (element.password == userPassword.value)) {
                //validoLogin = true;
    
                let usuarioCorrente = {
                    name: element.name,
                    password: element.password,
                    email: element.emails,
                    sobrenome: element.sirname,
                    tipo: element.tipo
                }
    
                sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));
    
                alert(`O login de ${element.name} foi efetuado com sucesso`);
                
                if(element.tipo == "versão empresa") {
                    window.location.href = "./homeEmp.html";
                } else {
                    window.location.href = "./pagAlunoInicio.html";
                }
                //window.location.href = "./controle.html";
              
            }
            // else if(((element.name == userName.value) && (element.password != userPassword.value)) || (element.name != userName.value) && (element.password == userPassword.value)) {
            //     alert("Senha ou usuário incorreto");

            // } else {
            //     alert("Esse usuário não foi cadastrado ainda");
            // }      
                   
        });
    }
        
}


document.getElementById ('login').addEventListener ('submit', processaForm)