import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["♥", "♦", "♣", "♠"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


function generateRandomCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const cardElement = document.getElementById("card");

  cardElement.querySelector(".top-suit").textContent = randomSuit;
  cardElement.querySelector(".number").textContent = randomValue;
  cardElement.querySelector(".bottom-suit").textContent = randomSuit;

  const color = randomSuit === "♥" || randomSuit === "♦" ? "red" : "black";
  cardElement.style.color = color;
}

document.getElementById("newCard").addEventListener("click", generateRandomCard);

document.getElementById("width").addEventListener("input", (e) => {
  document.querySelector(".card").style.width = e.target.value + "px";
});

document.getElementById("height").addEventListener("input", (e) => {
  document.querySelector(".card").style.height = e.target.value + "px";
});

window.onload = generateRandomCard;
