let alunos = [
  novoAluno("Fabio", 53),
  novoAluno("Gelza", 48),
  novoAluno("Wallison", 17),
  novoAluno("Kairo", 19),
];

function novoAluno(nome, idade) {
  return { nome, idade };
}

function temMenosDe30(aluno) {
  return aluno.idade < 30;
}

function temMaisDe30(aluno) {
  return aluno.idade > 30;
}

// let alunosComMenosDe30 = alunos.filter(temMenosDe30);

// let alunosComMaisDe30 = alunos.filter(temMaisDe30);

// console.log(alunosComMenosDe30);
// console.log(alunosComMaisDe30);

function filtroAlunos(callback) {
  let alunosFiltrados = [];
  for (let aluno of alunos) {
    if (callback(aluno)) {
      alunosFiltrados.push(aluno);
    }
  }

  return alunosFiltrados;
}

console.log(filtroAlunos(temMenosDe30));
