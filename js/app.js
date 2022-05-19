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

    alert("Saldo actual: "+saldo)
    if(saldo>=990){
        alert("El limite de dinero en su cuenta no puede ser mayor a 990")
    }else{
        let actaSaldo = Number(prompt("¿Cuanto desea ingrear a su cuenta?"))
        if(actaSaldo+saldo>990){
            alert("El valor ingresado es mayor al limite de su cuenta ingrese un valor menos a 990")   
        }else{
            let total = saldo + actaSaldo
            alert("Saldo actual: "+total)   
        }

    }
    
}
//Retirar de cuenta
function retirar(){
alert("Saldo actual: "+saldo)
let retiro = Number(prompt("¿Cuanto desea retirar?"))
if(retiro>saldo-10){
    alert("La cantidad ingresada no puede ser retirada, ya que la cuenta no cuenta con fondos suficientes, la cuenta debe tener minimo $10")

}else{
    let actSaldo = Number(saldo-retiro)
    alert("El retiro ha sido un exito \n su saldo actual es: "+ actSaldo)

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


