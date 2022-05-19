//Variables
//const inputUser = document.querySelector('#inputUser')
//const inputPassword = document.querySelector('#inputPassword')
//const formLogin = document.querySelector('#formLogin')

//Trae el elemento 
//let inputUser = document.getElementById("inputUser")
//let inputPassword  = document.getElementById("inputPassword")
let formLogin  = document.getElementById("formLogin")

//console.log("user", inputUser)

function login(form){

    if(form.inputUser.value=="carina"){
        if(form.inputPassword.value=="1234"){
            location = "banconeo.html"
        }else{
            alert("La contraseña es incorrecta")
        } 
    }else{
        alert("El usuario no existe")
    } 

}