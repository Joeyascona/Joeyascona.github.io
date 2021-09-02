if ('serviceWorker' in navigator) {
  // Register the service worker
  navigator.serviceWorker.register('/sw.js').then(function (result) {
    console.log('Service Worker Register');
    console.log('Scope: ' + result.scope);
  }, function (error) {
    console.log('Service Worker Registration Failed');
    console.log(error);
  });
} else {
  console.log('Service Worker Not Supported');
}


const corte1 = document.querySelector("#corte1");
const muerto1 = document.querySelector("#muerto1");
const comodin1 = document.querySelector("#comodin1");
const canastapura1 = document.querySelector("#canastapura1");
const canastaimpura1 = document.querySelector("#canastaimpura1");
const primero1 = document.querySelector("#primero1");
const segundo1 = document.querySelector("#segundo1");
const chicas1 = document.querySelector("#chicas1");
const grandes1 = document.querySelector("#grandes1");


const subtotal1 = document.querySelector("#subtotal1");

let valcorte1 = 0;
let valmuerto1 = 0;
let valcomodin1 = 0;
let valcanastapura1 = 0;
let valcanastaimpura1 = 0;
let valprimero1 = 0;
let valsegundo1 = 0;
let valchicas1 = 0;
let valgrandes1 = 0;





corte1.addEventListener("input", function () {
  valcorte1 = corte1.value;
  actualizarResultado();
});

corte1.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    muerto1.focus();
  }
});

muerto1.addEventListener("input", function () {
  valmuerto1 = muerto1.value;
  actualizarResultado();
});

muerto1.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    comodin1.focus();
  }
});

comodin1.addEventListener("input", function () {
  valcomodin1 = comodin1.value * 50;
  actualizarResultado();
});

comodin1.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    canastapura1.focus();
  }
});


canastapura1.addEventListener("input", function () {
  valcanastapura1 = canastapura1.value * 200;
  actualizarResultado();
});

canastapura1.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    canastaimpura1.focus();
  }
});


canastaimpura1.addEventListener("input", function () {
  valcanastaimpura1 = canastaimpura1.value * 100;
  actualizarResultado();
});

canastaimpura1.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    primero1.focus();
  }
});

primero1.addEventListener("input", function () {
  valprimero1 = primero1.value * 15;
  actualizarResultado();
});

primero1.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    segundo1.focus();
  }
});

segundo1.addEventListener("input", function () {
  valsegundo1 = segundo1.value * 20;
  actualizarResultado();
});

segundo1.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    chicas1.focus();
  }
});

chicas1.addEventListener("input", function () {
  valchicas1 = chicas1.value * 5;
  actualizarResultado();
});

chicas1.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    grandes1.focus();
  }
});

grandes1.addEventListener("input", function () {
  valgrandes1 = grandes1.value * 10;
  actualizarResultado();
});

grandes1.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    corte2.focus();
  }
});



function actualizarResultado() {
  subtotal1.innerHTML = Number(valcorte1) + Number(valmuerto1) +
    Number(valcomodin1) + Number(valcanastapura1) +
    Number(valcanastaimpura1) + Number(valprimero1) +
    Number(valsegundo1) + Number(valchicas1) +
    Number(valgrandes1);
}


/* Player2*/

const corte2 = document.querySelector("#corte2");
const muerto2 = document.querySelector("#muerto2");
const comodin2 = document.querySelector("#comodin2");
const canastapura2 = document.querySelector("#canastapura2");
const canastaimpura2 = document.querySelector("#canastaimpura2");
const primero2 = document.querySelector("#primero2");
const segundo2 = document.querySelector("#segundo2");
const chicas2 = document.querySelector("#chicas2");
const grandes2 = document.querySelector("#grandes2");


const subtotal2 = document.querySelector("#subtotal2");

let valcorte2 = 0;
let valmuerto2 = 0;
let valcomodin2 = 0;
let valcanastapura2 = 0;
let valcanastaimpura2 = 0;
let valprimero2 = 0;
let valsegundo2 = 0;
let valchicas2 = 0;
let valgrandes2 = 0;





corte2.addEventListener("input", function () {
  valcorte2 = corte2.value;
  player2();
});

corte2.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    muerto2.focus();
  }
});

muerto2.addEventListener("input", function () {
  valmuerto2 = muerto2.value;
  player2();
});

muerto2.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    comodin2.focus();
  }
});

comodin2.addEventListener("input", function () {
  valcomodin2 = comodin2.value * 50;
  player2();
});

comodin2.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    canastapura2.focus();
  }
});


canastapura2.addEventListener("input", function () {
  valcanastapura2 = canastapura2.value * 200;
  player2();
});

canastapura2.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    canastaimpura2.focus();
  }
});


canastaimpura2.addEventListener("input", function () {
  valcanastaimpura2 = canastaimpura2.value * 100;
  player2();
});

canastaimpura2.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    primero2.focus();
  }
});

primero2.addEventListener("input", function () {
  valprimero2 = primero2.value * 15;
  player2();
});

primero2.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    segundo2.focus();
  }
});

segundo2.addEventListener("input", function () {
  valsegundo2 = segundo2.value * 20;
  player2();
});

segundo2.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    chicas2.focus();
  }
});

chicas2.addEventListener("input", function () {
  valchicas2 = chicas2.value * 5;
  player2();
});

chicas2.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    grandes2.focus();
  }
});

grandes2.addEventListener("input", function () {
  valgrandes2 = grandes2.value * 10;
  player2();
});

grandes2.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    corte3.focus();
  }
});



function player2() {
  subtotal2.innerHTML = Number(valcorte2) + Number(valmuerto2) +
    Number(valcomodin2) + Number(valcanastapura2) +
    Number(valcanastaimpura2) + Number(valprimero2) +
    Number(valsegundo2) + Number(valchicas2) +
    Number(valgrandes2);
}



/* Player3*/



const corte3 = document.querySelector("#corte3");
const muerto3 = document.querySelector("#muerto3");
const comodin3 = document.querySelector("#comodin3");
const canastapura3 = document.querySelector("#canastapura3");
const canastaimpura3 = document.querySelector("#canastaimpura3");
const primero3 = document.querySelector("#primero3");
const segundo3 = document.querySelector("#segundo3");
const chicas3 = document.querySelector("#chicas3");
const grandes3 = document.querySelector("#grandes3");


const subtotal3 = document.querySelector("#subtotal3");

let valcorte3 = 0;
let valmuerto3 = 0;
let valcomodin3 = 0;
let valcanastapura3 = 0;
let valcanastaimpura3 = 0;
let valprimero3 = 0;
let valsegundo3 = 0;
let valchicas3 = 0;
let valgrandes3 = 0;





corte3.addEventListener("input", function () {
  valcorte3 = corte3.value;
  player3();
});

corte3.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    muerto3.focus();
  }
});

muerto3.addEventListener("input", function () {
  valmuerto3 = muerto3.value;
  player3();
});

muerto3.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    comodin3.focus();
  }
});

comodin3.addEventListener("input", function () {
  valcomodin3 = comodin3.value * 50;
  player3();
});

comodin3.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    canastapura3.focus();
  }
});


canastapura3.addEventListener("input", function () {
  valcanastapura3 = canastapura3.value * 200;
  player3();
});

canastapura3.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    canastaimpura3.focus();
  }
});


canastaimpura3.addEventListener("input", function () {
  valcanastaimpura3 = canastaimpura3.value * 100;
  player3();
});

canastaimpura3.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    primero3.focus();
  }
});

primero3.addEventListener("input", function () {
  valprimero3 = primero3.value * 15;
  player3();
});

primero3.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    segundo3.focus();
  }
});

segundo3.addEventListener("input", function () {
  valsegundo3 = segundo3.value * 20;
  player3();
});

segundo3.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    chicas3.focus();
  }
});

chicas3.addEventListener("input", function () {
  valchicas3 = chicas3.value * 5;
  player3();
});

chicas3.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    grandes3.focus();
  }
});

grandes3.addEventListener("input", function () {
  valgrandes3 = grandes3.value * 10;
  player3();
});

grandes3.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    corte1.focus();
  }
});



function player3() {
  subtotal3.innerHTML = Number(valcorte3) + Number(valmuerto3) +
    Number(valcomodin3) + Number(valcanastapura3) +
    Number(valcanastaimpura3) + Number(valprimero3) +
    Number(valsegundo3) + Number(valchicas3) +
    Number(valgrandes3);
}


