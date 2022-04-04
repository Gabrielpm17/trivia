import { questions } from "./questions.js";
const d = document;

export class Questions {
  constructor(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
    this.indexQuestion = 0;
    this.points = 0;
  }

  // METODOS

  print() {
    // Variable
    let i = 1;
    i = this.indexQuestion + 1;

    // Validacion
    if (this.indexQuestion >= questions.length) return;

    // Pregunta
    const $tittle = d.querySelector(".trivia-tittle");
    $tittle.innerHTML = "";
    $tittle.innerHTML = this.question[this.indexQuestion].question;

    // Pagina
    const $page = d.querySelector(".trivia-page");
    $page.classList.remove("hidden");
    $page.innerHTML = "";
    $page.innerHTML = `${i}/${questions.length}`;

    // Botones dinamico
    const $boxAnwers = d.querySelector(".trivia-box-question");
    $boxAnwers.classList.add("grid-container");
    this.choices[this.indexQuestion].choices.forEach((ele) => {
      let $btn = d.createElement("button");
      $btn.classList.add("btn");
      $btn.innerHTML = ele;
      $boxAnwers.insertAdjacentElement("afterbegin", $btn);
    });
  }

  delete() {
    // Seleccionando elementos del DOM para poder eliminarlos
    let btn = d.querySelectorAll(".btn");

    btn.forEach((ele) => {
      ele.remove();
    });
  }

  valid(value) {
    if (this.indexQuestion >= questions.length) return;

    if (value.toString() === this.answer[this.indexQuestion].answer) {
      console.log("Correcto");
      this.indexQuestion++;
      this.points++;
    } else {
      console.log("incorrecto");
      this.indexQuestion++;
    }
  }

  end() {
    if (this.indexQuestion >= questions.length) {
      // Encabezado
      const $tittle = d.querySelector(".trivia-tittle");
      $tittle.innerHTML = "";
      $tittle.innerHTML = "Tu puntuacion es: ";
      // pagina
      const $page = d.querySelector(".trivia-page");
      $page.classList.add("hidden");
      console.log("Gracias por tu tiempo");

      // Seccion de puntuacion
      const $boxAnwers = d.querySelector(".trivia-box-question");
      $boxAnwers.classList.add("flex");
      let $tittleEnd = d.createElement("h2");
      $tittleEnd.classList.add("tittle-end");
      $tittleEnd.innerHTML = this.points;
      $boxAnwers.appendChild($tittleEnd);

      // Boton de reiniciar
      const $btnRestart = d.createElement("button");
      $btnRestart.id = "restart";
      $btnRestart.classList.add("btn-restart");
      $btnRestart.innerHTML = "Reiniciar";
      $boxAnwers.appendChild($btnRestart);
    }
  }
}
