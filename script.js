// Saudação personalizada
document.getElementById("btn").addEventListener("click", function () {
  let nome = document.getElementById("nome").value;
  if (nome) {
    document.getElementById("saudacao").innerText = "Olá, " + nome + "!";
    alert("Obrigado por visitar meu currículo, " + nome + "!");
  } else {
    alert("Por favor, digite seu nome!");
  }
});

// Canvas: desenhar retângulo decorativo
let canvas = document.getElementById("meuCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#4CAF50";
ctx.fillRect(20, 20, 150, 60);
ctx.fillStyle = "white";
ctx.font = "20px Arial";
ctx.fillText("Front-end", 50, 55);
