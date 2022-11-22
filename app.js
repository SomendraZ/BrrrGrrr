// Write your code on this file. Please don't change the existing code
// unless absolutely needed.
const Rs = document.getElementById("price-details")
//Initial price of the burger
var WWB = 20;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: false,
  Cheese: false,
  Tomatoes: false,
  Onions: false,
  Lettuce: false,
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
    document.getElementById("itemP").innerHTML='Patty';
    renderPrice();
  } else {
    patty.style.display = "none";
    document.getElementById("itemP").innerHTML='';  
    renderPrice();
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.getElementById("cheese");
  if(state.Cheese){
    cheese.style.display = "inherit";
    document.getElementById("itemC").innerHTML='Cheese';
    renderPrice();
  }
  else{
    cheese.style.display = "none";
    document.getElementById("itemC").innerHTML='';
    renderPrice();
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.getElementById("tomato");
  if(state.Tomatoes){
    tomato.style.display = "inherit";
    document.getElementById("itemT").innerHTML='Tomato';
    renderPrice();
  }
  else{
    tomato.style.display = "none";
    document.getElementById("itemT").innerHTML='';
    renderPrice();
  }
  
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.getElementById("onion");
  if(state.Onions){
    onion.style.display = "inherit";
    document.getElementById("itemO").innerHTML='Onion';
    renderPrice();
  }
  else{
    onion.style.display = "none";
    document.getElementById("itemO").innerHTML='';
    renderPrice();
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById("lettuce");
  if(state.Lettuce){
    lettuce.style.display = "inherit";
    document.getElementById("itemL").innerHTML='Lettuce';
    renderPrice();
  }
  else{
    lettuce.style.display = "none";
    document.getElementById("itemL").innerHTML='';
    renderPrice();
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderPatty1();
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderCheese1();
  renderAll();
  renderCheese1();
  renderPrice();
};


// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderOnions1();
  renderAll();
  renderOnions1();
  renderPrice();
};


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderTomatoes1();
  renderAll();
  renderTomatoes1();
  renderPrice();
};


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderLettuce1();
  renderAll();
  renderLettuce1();
  renderPrice();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons(){
  if(state.Patty){
    document.querySelector('.btn-patty').classList.remove('active')
  }
  else{
    document.querySelector('.btn-patty').classList.add('active')
  }

  if(state.Cheese){
    document.querySelector('.btn-cheese').classList.remove('active')
  }
  else{
    document.querySelector('.btn-cheese').classList.add('active')
  }

  if(state.Onions){
    document.querySelector('.btn-onions').classList.remove('active')
  }
  else{ 
    document.querySelector('.btn-onions').classList.add('active')
  }

  if(state.Tomatoes){
    document.querySelector('.btn-tomatoes').classList.remove('active')
  }
  else{
    document.querySelector('.btn-tomatoes').classList.add('active')
  }
  
  if(state.Lettuce){
    document.querySelector('.btn-lettuce').classList.remove('active')
  }
  else{
    document.querySelector('.btn-lettuce').classList.add('active')
  }
  
}


//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients



function renderPrice() {
  Rs.innerText = WWB;
}

function renderPatty1() {
  if (state.Patty) {
    WWB += ingredients.Patty;
  }
  else {
    WWB -= ingredients.Patty;
  }
}

function renderCheese1() {
  if (state.Cheese) {
    WWB += ingredients.Cheese;
  }
  else {
    WWB -= ingredients.Cheese;
  }
}

function renderTomatoes1() {
  if (state.Tomatoes) {
    WWB += ingredients.Tomatoes;
  }
  else {
    WWB -= ingredients.Tomatoes;
  }
}

function renderOnions1() {
  if (state.Onions) {
    WWB += ingredients.Onions;
  }
  else {
    WWB -= ingredients.Onions;
  }
}

function renderLettuce1() {
  if (state.Lettuce) {
    WWB += ingredients.Lettuce;
  }
  else {
    WWB -= ingredients.Lettuce;
  }
}
renderAll();