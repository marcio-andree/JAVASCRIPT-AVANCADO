let usuario = ["Pedro", "Gabi", "Everton", "Gerson"];

function inserirUsuario(nome, retornar) {
  let promessa = new Promise(function (resolve, reject) {
    setTimeout(() => {
      usuario.push(nome);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject({msg: "Solicitação invalida"});
      }
    }, 1000);
  });

  return promessa;
}

function listarUsuarios() {
  console.log(usuario);

}
 async function executar(){

  await inserirUsuario("Maia");
  listarUsuarios();
};

executar();
