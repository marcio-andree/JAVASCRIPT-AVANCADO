let pessoa = {
  nome: "michael",
  idade: 27,
};

let contato = {
  tel: "9999999",
  email: "michael@gmail.com",
};

let clone = {... pessoa,...contato, clube: "Ahillal"};
clone.idade = 35;

console.log(pessoa);
console.log(clone);
