/* 2.1 Inserta dinamicamente en un html un div vacio con javascript.

2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */

let newDiv = document.createElement("div");
var currentDiv = document.querySelector("div");
document.body.insertBefore(newDiv, currentDiv);
let divP = document.createElement("div");
divP.innerHTML = "<p></p>";
document.body.insertBefore(divP, currentDiv);

function createDivP() {
  divP = document.createElement("div");
  divP.innerHTML = "<p></p>";
  document.body.appendChild(divP);
}
for (let index = 0; index < 6; index++) {
  createDivP();
}

let newP = document.createElement("p");
newP.innerText = "Soy dinámico!";
document.body.appendChild(newP);

let h2Insert = document.querySelector("h2.fn-insert-here");
h2Insert.innerText = "Wubba Lubba dub dub";

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
let newUl = document.createElement("ul");
for (let index = 0; index < apps.length; index++) {
  let newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(apps[index]));
  newUl.appendChild(newLi);
}

document.body.appendChild(newUl);

let removeClass = document.querySelectorAll(".fn-remove-me");
for (let index = 0; index < removeClass.length; index++) {
  document.body.removeChild(removeClass[index]);
}
newP.innerText = "Voy en medio!";
document.body.insertBefore(newP, currentDiv);
let insertDiv = document.querySelectorAll(".fn-insert-here");
function createP(param) {
  let createP = document.createElement("p");
  createP.innerText = "Voy dentro!";
  param.appendChild(createP);
}
for (let index = 0; index < insertDiv.length; index++) {
  createP(insertDiv[index]);
}
