// let alunos = [
//   novoAluno("Fabio", 53),
//   novoAluno("Gelza", 48),
//   novoAluno("Wallison", 17),
//   novoAluno("Kairo", 19),
// ];

// function novoAluno(nome, idade) {
//   return { nome, idade }
// };

// function nomeIdade(aluno) {

//   return aluno.nome + " tem " + aluno.idade + " anos";

// }


// console.log(alunos.map(nomeIdade));


// No javascript quando colocamos um objeto dentro do outro ele vai como referência exemplo abaixo:

let alunoA = {nome:"juan",
              idade:"20"};

let alunoB = alunoA
alunoB.idade = 30

console.log(alunoB.idade);
console.log(alunoA.idade);

//  Quando é atribuido uma variavel a outra e se for tipo do primitivo , numero, string, boolean essa atribuição é feita por valor
let valorA = 20;

let valorB = valorA;

valorB = 5;

console.log(valorA);
console.log(valorB);

//
// slice() no permite fazer um clone do array sem alterar  o array original
let turmaA =  ['tchala', 'ramonda', 'shuri']

let turmaB = turmaA.slice()

turmaB.push('okoio')

console.log(turmaA);
console.log(turmaB);


// object.assign({}, objeto ) ou {... objeto}permite fazer um clone do objeto sem modificar o objeto original

let objetoA = {nome:"lufi", idade: "19"}

let objetoB = Object.assign({}, objetoA);

objetoB.idade = "30";

console.log(objetoA);
console.log(objetoB);
