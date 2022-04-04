import { questions } from "./questions.js";
import { Questions } from "./generator.js";

const d = document;

export function interctivity() {
  const $tittle = d.querySelector(".trivia-tittle"),
    $initialBtn = d.querySelector(".trivia-initial");

  // INSTANCIADO LA CLASE
  let trivia = new Questions(questions, questions, questions);

  // Prueba
  d.addEventListener("click", (e) => {
    if (e.target.matches(".trivia-initial")) {
      $initialBtn.classList.add("hidden");
      trivia.print();
    }
    if (e.target.matches(".btn")) {
      trivia.valid(e.target.innerHTML);
      trivia.delete();
      trivia.print();
      trivia.end();
    }

    if (e.target.matches("#restart")) {
      // Recargando la pagina
      window.location.reload();
    }
  });
}
