let speakF = function speakGeneric() {
  console.log(this.sound);
};

let dog = {
  sound: "Au Au",
  speak: speakF,
};

let cat = {
  sound: "Miau",
  speak: speakF,
};

// dog.speak();
// cat.speak();

let bindeDog = speakF.bind(dog);
let bindeCat = speakF.bind(cat);
bindeDog();
bindeCat();
