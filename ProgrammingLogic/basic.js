/* eslint-disable */

escrevaSaudacao("Robernto");

function escrevaSaudacao(hour) {
  let saudacao;

  if (hour < 18) {
    saudacao = "Good day";
  } else {
    saudacao = "Good evening";
  }

  console.log(saudacao);
}

switch (new Date().getDay()) {
  case 0:
      day = "Sunday";
      break;
  case 1:
      day = "Monday";
      break;
  case 2:
      day = "Tuesday";
      break;
  case 3:
      day = "Wednesday";
      break;
  case 4:
      day = "Thursday";
      break;
  case 5:
      day = "Friday";
      break;
  case 6:
      day = "Saturday";
  default:
    break;
}


function countNumbers() {
  let counter = 0;
  while (counter < 4) {
    console.log('The number is ' + counter + '\n');
    counter++;
  }
}
// Output:
// The number is 0
// The number is 1
// The number is 2
// The number is 3


const pessoas = ["Enzo", "Robert", "Valentina"]; 
pessoas.push("Clara");
// pessoas = ["Enzo", "Robert", "Valentina", "Clara"]; 

temPessoaPorNome("Valentina");
function temPessoaPorNome(nome) {
  for(let index = 0; index < pessoas.size(); index++) {
    if (pessoas[index] === nome) {
      return true;
    }
  }

  return false;
}


function countNumbers() {
  let counter = 0;
  for (counter = 0; counter <= 3 ; counter++) {
    console.log('The number is ' + counter + '\n');
  }
}
// Output:
// The number is 0
// The number is 1
// The number is 2
// The number is 3


const constVariableA = 10 // int
const constVariableB = 12.5 // float

// Inputs: a e b
function sum(a, b) {
  return a + b; // processamento
}

sum(constVariableA, constVariableB);
// Output: 22.5

