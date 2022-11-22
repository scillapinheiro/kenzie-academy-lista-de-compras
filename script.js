let input = document.getElementById("iteminput");
let button = document.getElementById("addbutton");
let ul = document.getElementById("items");
let items = document.getElementsByTagName("li");
let itemButton = document.getElementsByClassName("remove");

function criarElemento() {
  let li = document.createElement("li");
  let removeButton = document.createElement("button");
  
  removeButton.innerHTML = "X";
  removeButton.className = "remove";

  li.appendChild(removeButton);

  let item = document.createTextNode(input.value[0].toUpperCase() + input.value.substring(1).toLowerCase());

  li.appendChild(item);
  ul.appendChild(li);

  input.value = "";

  buttonEvent();
}

function removerElemento() {
  this.parentElement.remove();
}

function buttonEvent() {
  for (let i = 0; i < itemButton.length; i++) {
    itemButton[i].addEventListener("click", removerElemento);
  }
}

button.addEventListener("click", criarElemento);
buttonEvent();