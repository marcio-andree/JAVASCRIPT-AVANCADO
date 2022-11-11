let arrow = () => {
  return console.log("Sou uma arrow function");
};

arrow();

// se a arrow function tiver apenas um argumento ela não precisa de parenteses

let somar = (x) => {
  return console.log(10 + x);
};

somar(5);

//

let dobro1 = (x) => {
  return console.log(2 * x);
};

// se a arrow function retonar apenas o valor pode ser escrita dessa forma

let dobro = (x) => 2 * x;

console.log(dobro(10))
