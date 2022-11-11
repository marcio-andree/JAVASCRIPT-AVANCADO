// callback é quanto você passa uma função como parametro

function ola() {
  console.log("olá");
}


function saudacao(s, nome){
  s();
  console.log(nome);
}



saudacao(ola, "Pedro");
