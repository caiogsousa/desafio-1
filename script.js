/* Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números; */




let NumberOne = prompt("digite o primeiro número");

let NumberTwo = prompt("digite o segundo número");

let resultsoma = Number(NumberOne) + Number(NumberTwo);
let resultsub = Number(NumberOne) - Number(NumberTwo);
let resultmult = Number(NumberOne) * Number(NumberTwo);
let resultdiv = Number(NumberOne) / Number(NumberTwo);
let resultrestdiv = Number(NumberOne) % Number(NumberTwo);


alert(`A soma foi ${resultsoma}`)
alert(`A sub foi ${resultsub}`)
alert(`A mult foi ${resultmult}`)
alert(`A div foi ${resultdiv.toFixed(2)}`)
alert(`o resto da div foi ${resultrestdiv}`)



function evenOrOdd(NumberOne, NumberTwo) {
  let sum = NumberOne + NumberTwo

    if (sum % 2 == 0) {
      alert("O número é par")
  } else {
      alert("O número é impar")
  }
}

evenOrOdd(1, 0)
