/* Istruzioni:
Stampare a schermo un messaggio all’interno di un h1, 
utilizzando i data.
Bonus: Aggiungere un’immagine presa anch’essa da un data */

let app = new Vue ({

  el: "#root",

  data: {
    msg: "Viva Las Vegas",
    saluti: "HELLO VUE",
    img: "assets/img/greggio.jpg"
  }
})