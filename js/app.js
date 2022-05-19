//Variables
const inputUser = document.querySelector('#inputUser')
let inputPassword = document.querySelector('#inputPassword')
let formLogin = document.querySelector('#formLogin')

//Trae el elemento 
//let inputUser = document.getElementById("inputUser")
//let inputPassword  = document.getElementById("inputPassword")
//let formLogin  = document.getElementById("formLogin")

var value  = document.getElementById("cuenta")
var saldo = Number(490)

//Consulta cuenta

function consulta(){

    alert("Su saldo actual es de: " + "$"+saldo)
}
//Ingresa cuenta
function ingresa(){

    if(saldo>=990){
        alert("El limite de dinero ingresado no puede ser mayor a 990")
    }else{
        let actaSaldo = prompt("¿Cuanto desea ingrear a su cuenta?")
        cuenta.textContent = saldo + actaSaldo
    }
    
}
//Retirar de cuenta
function retirar(){
alert("Saldo actual: "+saldo)
let retiro = prompt("¿Cuanto desea retirar?")
if(retiro>=saldo-10){
    alert("La cantidad ingresada no puede ser retirada, ya que la cuenta no cuenta con fondos suficientes")

}else{
    alert("El retiro ha sido un exito \n su saldo actual es: "+saldo-retiro)

}

}




//database 
var cuentas = [
    {
        user: "Carina",
        pass: 12345678,
        saldo: 990
    },
    {
        user: "Kim Shin",
        pass: 2335555,
        saldo: 500
    },
    {
        user: "Gong Yoo",
        pass: 987654321,
        saldo: 990
    }
]




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

//Saldo

let cuenta = document.getElementById("cuenta")


