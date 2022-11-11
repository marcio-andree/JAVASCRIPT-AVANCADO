let usuario = ["Pedro", "Gabi", "Everton", "Gerson"];

function inserirUsuario(nome, retornar) {
  setTimeout(() => {
    usuario.push(nome);
    retornar();
  }, 1000);
}

function listarUsuarios() {
  console.log(usuario);
}

inserirUsuario("Santos", listarUsuarios);
