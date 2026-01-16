const intro = document.getElementById("intro");
const carta = document.getElementById("carta");
const textoCarta = document.getElementById("texto-carta");
const abrirTexto = document.querySelector(".abrir-texto");

const texto = `Para mi novia, Erika.
En todo este tiempo, hemos pasado por diferentes situaciones, diferentes emociones, diferentes reacciones, diferentes pensamientos; en fin, diferente todo, y las únicas constantes fuimos nosotros, siendo tú quien tuvo que soportar más todo lo down de mis acciones y mis momentos esquizofrénicos, lamento de verdad haberte hecho sentir mal varias veces, aunque a veces me veas modo zombie, no significa que no sienta nada, solo no sé cómo reaccionar en esos momentos para hacerte sentir bien. No me gusta verte así. Y ya que estamos con las disculpas, también te las pido por no ser como quisieras que sea o que reaccione como te gustaría. A pesar de todo eso, no significa que no te quiera, te quiero mucho Erika (poniendo nombre para seriedad, no me funes) y eso no cambiará jamás. Ojalá pudieras sonreír siempre, tienes una bonita sonrisa y unos cálidos y expresivos ojos que combinan bien con todo lo lindo de tu rostro, a pesar de que no te dejes ver cuando te miro directamente. Gracias por tomarte fotos, de verdad las aprecio mucho. Y al mismo tiempo quiero agradecerte por ser la persona que eres, con tus ganas de aprender nuevas cosas y también querer divertirte, siento que nos entendemos muy bien y eso me agrada bastante.
Bueno, por eso y muchas cosas más, ven a mi casa esta navidad. 
Ah no así no era, lo que quería decir era
FELICES 6 MESES AMOR!!!
`;

// Evento para abrir la carta
abrirTexto.addEventListener("click", () => {
  // Desvanecer intro
  intro.classList.add("oculto");

  // Mostrar carta con fade
  setTimeout(() => {
    carta.classList.remove("oculto");
    escribirTexto(texto, textoCarta, 40);
  }, 1000);
});

// Efecto de escritura letra por letra
function escribirTexto(texto, elemento, velocidad) {
  let i = 0;
  elemento.textContent = "";

  const intervalo = setInterval(() => {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
    } else {
      clearInterval(intervalo);
    }
  }, velocidad);
}
