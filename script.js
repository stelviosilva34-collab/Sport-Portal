// Controle de abas
function abrirAba(id){
document.querySelectorAll(".aba").forEach(sec => sec.classList.remove("ativa"));
document.getElementById(id).classList.add("ativa");
}

// Restaurante
const pratos = [
"Muamba de galinha","Calulu","Funge","Peixe grelhado","Frango assado",
"Arroz de marisco","Lagosta","Camarão","Sopa","Bife",
"Cabrito","Pizza","Massa","Hambúrguer","Salada",
"Sushi","Frango Xadrez","Arroz doce","Gelado","Bolo"
];

document.getElementById("pratoDia").innerText =
pratos[Math.floor(Math.random()*pratos.length)];

const menu = document.getElementById("menu");
pratos.forEach(p=>{
let li = document.createElement("li");
li.innerText = p;
menu.appendChild(li);
});

// Reservas
let ultimaReserva = null;

document.getElementById("formReserva").addEventListener("submit", e=>{
e.preventDefault();

ultimaReserva = {
id: Date.now(),
quarto: document.getElementById("quartoSelect").value
};

document.getElementById("resposta").innerText =
"Reserva criada ID: " + ultimaReserva.id;
});

// Login
function login(){
const u = document.getElementById("user").value;
const p = document.getElementById("pass").value;

document.getElementById("loginStatus").innerText =
(u==="admin" && p==="1234") ? "Login OK" : "Erro";
}

// Fatura
function gerarFatura(){
if(!ultimaReserva){
alert("Faça uma reserva primeiro");
return;
}

document.getElementById("faturaTexto").innerText = `
--- FATURA ---
ID: ${ultimaReserva.id}
Quarto: ${ultimaReserva.quarto}
Total: 150.000 Kz
`;
}