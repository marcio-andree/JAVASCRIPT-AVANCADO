let alunos = [
  novoAluno("Fabio", 53),
  novoAluno("Gelza", 48),
  novoAluno("Wallison", 17),
  novoAluno("Kairo", 19),
];

function novoAluno(nome, idade) {
  return { nome, idade }
};

function nomeIdade(aluno) {

  return aluno.nome + " tem " + aluno.idade + " anos";

}


console.log(alunos.map(nomeIdade));
