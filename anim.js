// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te miré y no pude preguntar por tu nombre", time: 10 },
  { text: "Yo creo que tú también me viste, y después de eso", time: 15 },
  { text: "Vi el futuro nuestro y de ti no sé nada", time: 17 },
  { text: "Lo que fue un segundo ahora no puedo olvidar", time: 26 },
  { text: "24/7 solo estoy pensando si tú sabrás que existo", time: 31 },
  { text: "O si acaso sientes lo mismo", time: 37 },
  { text: "Tengo una idea, no sé si sea buena o mala", time: 58 },
  { text: "Y no duermo hasta que tu voz sea la que me despierta en las mañanas", time: 64 },
  { text: "Mírame y dime dónde puedo encontrarte una vez más", time: 72 },
  { text: "Que en caliente yo me voy", time: 75 },
  { text: "Mírame y dime dónde puedo encontrarte una vez más", time: 80 },
  { text: "Pa terminar lo que empezó, oh", time: 84 },
  { text: "Y no sé cómo el tiempo se nos escapó", time: 88 },
  { text: "Si pudiera devolverlo, lo hago hoy", time: 92 },
  { text: "Pa que mis labios se llenen de ti", time: 97 },
  { text: "Y tus manos se llenen de mí", time: 101 },
  { text: "Quiero tu atención y no tu espalda", time: 104 },
  { text: "Si tus ojos un día me miraran", time: 109 },
  { text: "Nada faltara, pero no me ves, baby, no soy fantasma", time: 111 },
  { text: "Quiero tu atención (de-dejate)", time: 120 },
  { text: "Quiero tu atención (de-dejate)", time: 122 },
  { text: "Quiero tu atención (de-dejate)", time: 125 },
  { text: "Quiero tu atención (de-dejate)", time: 130 },
  { text: "Tal vez fueron tus manos, tal vez fueron tus labios", time: 135 },
  { text: "Tal vez fue tu piel", time: 139 },
  { text: "Quizás también fueron tus piernas, o algo de tus cejas", time: 142 },
  { text: "Estás a otro nivel", time: 147 },
  { text: "Y no sé cómo el tiempo se nos escapó", time: 150 },
  { text: "Si pudiera devolverlo, lo hago hoy", time: 155 },
  { text: "Pa que mis labios se llenen de ti", time: 160 },
  { text: "Y tus manos se llenen de mí", time: 165 },
  { text: "Estas ganas no sé cuánto más pueden aguantar", time: 168 },
  { text: "No creo que pueda un segundo más", time: 173 },
  { text: "Quiero tu atención y no tu espalda", time: 175 },
  { text: "Esos ojos un día me miraran", time: 179 },
  { text: "Nada faltara, pero no me ves en la cara", time: 183 },
  { text: "Quiero tu atención (de-dejate)", time: 190 },
  { text: "Dé-déjate", time: 196 },
  { text: "Quiero tu atención (de-dejate)", time: 199 },
  { text: "Dé-déjate", time: 205 },
  { text: "Y eso que no conozco quién eres", time: 208 },
  { text: "Y eso que no conozco quién eres", time: 212 },
  { text: "Y eso que no conozco quién eres", time: 216 },
  { text: "Eh-eh, ah-ah, ah-ah", time: 220 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 290 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 11000);