let myButton = document.getElementById("botonSuma")

myButton.addEventListener("click", () => {
  let number1 = document.querySelector("#numero1").value
  let number2 = document.querySelector("#numero2").value
  let result = document.querySelector("#resultado")

  let total = parseInt(number1) + parseInt(number2)

  result.value = total;
});


let dividirButton = document.getElementById("botonDividir")

dividirButton.addEventListener("click", () => {

  let number1 = document.querySelector("#numero1").value
  let number2 = document.querySelector("#numero2").value
  let result = document.querySelector("#resultadoDividir")

  let total = parseInt(number1) / parseInt(number2)
  let total2 = parseInt(number1) * parseInt(number2)
  let total1 = parseInt(number1) - parseInt(number2)

  result.value = total;
  result.value = total2;
  result.value = total1;
});
let multiplicarButton = document.getElementById("botonMultiplicar")

multiplicarButton.addEventListener("click", () => {

  let number1 = document.querySelector("#numero1").value
  let number2 = document.querySelector("#numero2").value
  let result = document.querySelector("#resultadoMultiplicar")

  let total2 = parseInt(number1) * parseInt(number2)
  result.value = total2;
});
let subtrairButton = document.getElementById("botonSubtrair")

subtrairButton.addEventListener("click", () => {

  let number1 = document.querySelector("#numero1").value
  let number2 = document.querySelector("#numero2").value
  let result = document.querySelector("#resultadoSubtrair")

  let total2 = parseInt(number1) - parseInt(number2)
  result.value = total2;
});
let restoButton = document.getElementById("botonResto")

restoButton.addEventListener("click", () => {

  let number1 = document.querySelector("#numero1").value
  let number2 = document.querySelector("#numero2").value
  let result = document.querySelector("#resultadoResto")

  let total2 = parseInt(number1) % parseInt(number2)
  result.value = total2;
});

let potenciaButton = document.getElementById("botonPotencia")

potenciaButton.addEventListener("click", () => {

  let number1 = document.querySelector("#numero1").value
  let number2 = document.querySelector("#numero2").value
  let result = document.querySelector("#resultadoPotencia")

  let total2 = parseInt(number1) ** parseInt(number2)
  result.value = total2;
});

