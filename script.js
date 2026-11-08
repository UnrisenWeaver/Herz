/* =====================================================================
   Personalización del contenido
   Todos los valores entre corchetes deben ser reemplazados antes de publicar.
   Si se ejecuta desde un entorno local, se mostrará una advertencia visual
   para recordar que aún quedan textos por personalizar.
   ===================================================================== */

const NOMBRE_ELLA = "Lizy";
const APODO_ELLA = "Herz";
const FIRMA = "Brian, tu Pozolito";

// Archivo de audio opcional para GitHub Pages.
// Debe usarse una ruta relativa para que funcione en una web pública y no en file://
const MUSICA_ARCHIVO = "./Musica/FondoSailor.MP3";
const CANCIÓN_FAVORITA = "./Musica/Yo%20queria,%20Cristian%20castro.MP3";

/* Configuración de las luces: cada objeto define una posición en el cielo y
   el contenido del mensaje asociado. Los valores x e y se expresan en porcentajes. */
const LUCES = [
  {
    x: 20, y: 18,
    titulo: "Hoy",
    texto: "Hoy no tienes que fingir que estás bien ni obligarte a sonreír.\nSi te sientes cansada, triste o vacía, no hace falta que escondas nada para que alguien te quiera más.\nLo importante es que te des permiso para estar como estás, sin juzgarte por ello."
  },
  {
    x: 68, y: 10,
    titulo: "Un mal día",
    texto: "Un mal día no define quién eres ni elimina todo lo bueno que hay en ti.\nA veces la tristeza pesa más que otras cosas, y aun así sigues siendo la misma persona valiosa que conozco.\nNo hace falta que lo resuelvas todo hoy para merecer cariño y calma."
  },
  {
    x: 82, y: 38,
    titulo: "Lo que yo veo",
    texto: "Hay algo de ti que admiro muchísimo y que quizá tú misma no alcanzas a ver: esa forma tan bonita que tienes de darlo todo por las personas que quieres, de intentar mantenerte en pie incluso cuando la vida te pesa y de seguir estando para los demás, incluso en esos días en los que tú también necesitarías que alguien estuviera ahí para ti.\nTienes una manera de querer que dice mucho de la persona que eres. Y ojalá nunca olvides que no tienes que poder con todo, que no siempre te toca ser la fuerte y que tú también mereces recibir todo ese cariño que tantas veces das sin pensártelo dos veces. Porque no tienes que demostrarle nada a nadie para merecer que te cuiden, te escuchen y te quieran bonito.\nY si alguna vez te cansas de ser fuerte, espero que recuerdes que no tienes que enfrentarte sola a los problemas, siempre me vas a tener a mí para ayudarte y recordarte lo mucho que vales, incluso cuando tú misma lo hayas olvidado."
  },
  {
    x: 42, y: 42,
    titulo: "Gracias",
    texto: "Gracias por los años de amistad, por la confianza y por todo lo que ha significado que te haya conocido.\nHaber compartido contigo tanto tiempo ha sido un regalo que valoro de verdad.\nNo siempre lo digo como debería, pero te lo llevo dentro."
  },
  {
    x: 14, y: 66,
    titulo: "Sin prisa",
    texto: "No tienes que decidir nada hoy ni arreglar todo ahora.\nTu tiempo es válido, y el cariño sincero no depende de una respuesta rápida.\nPuedes ir a tu ritmo, sin presión y sin necesidad de justificarte."
  },
  {
    x: 66, y: 68,
    titulo: "Hablar o callar",
    texto: "Si necesitas hablar, te escucho.\nSi prefieres callar, también hay espacio para eso.\nSi hoy te apetece distraerte, también te acompaño sin pedirte que expliques cómo te sientes."
  },
  {
    x: 44, y: 88,
    titulo: "Un recuerdo",
    texto: "Las horas muertas de madrugada hablando de todo y de nada, donde las horas de diferencia se borraban por completo y parecía que estabas al otro lado de la habitación.\nEsos detalles pequeños, esos momentos que nadie más entiende, son los que más me quedan grabados.\nPorque no todo lo importante necesita un gran escenario; a veces basta con una frase, una risa o un momento concreto."
  }
];

/* Configuración de los sobres: cada entrada representa una carta para una
   situación concreta. Si se agrega una nota de voz, debe guardarse en la
   misma carpeta y referenciarse en la propiedad audio. */
const SOBRES = [
  {
    abrir: "no puedas dormir",
    audio: "",
    texto: "Cierra los ojitos, mi amor. Sé que a veces la noche se pone pesada y los pensamientos empiezan a dar vueltas sin freno cuando el silencio es demasiado grande. Piensa que, aunque el Atlántico nos separe y ahora mismo estemos a miles de kilómetros, bajo este mismo cielo hay un pedacito de mí que te acompaña en vela. Imagina que te abrazo fuerte, que te quito el insomnio a base de mimos y que el mundo de allá afuera puede esperar hasta mañana. Respira hondo, pon una canción suave de Chase Atlantic en tu mente y déjate caer, que yo cuido tus sueños desde aquí hasta que amanezca para los dos."
  },
  {
    abrir: "dudes de ti",
    audio: "",
    texto: "Escúchame bien y, si es necesario, vuelve a leer esto las veces que haga falta: eres increíblemente capaz, fuerte y brillante. A veces el espejo o el ruido de fuera intentan hacerte dudar de tu luz, pero yo te conozco bien y sé de lo que estás hecha. Has superado tanto, te has reinventado, le pones tanta pasión a tus proyectos y a lo que eres, que ninguna duda momentánea tiene derecho a hacerte sombra. Tienes una intuición que ya quisieran las cartas del tarot más sabias, y confío en ti con los ojos cerrados. Cree en ti tanto como yo lo hago, porque vas a comerte el mundo."
  },
  {
    abrir: "necesites reír",
    audio: "",
    texto: "¿Te acuerdas de cuando nos reímos de nuestras propias tonterías o de las ocurrencias más absurdas? Si hoy no te sale sonreír, no pasa nada; pero, cuando te apetezca, imagíname haciendo cualquier estupidez solo para arrancarte una carcajada. Si el día se pone tonto, podemos devolverle la jugada con humor. La vida ya es bastante complicada como para tomársela en serio todo el tiempo. Ojalá alguna de nuestras tonterías te regale un momento ligero; y si hoy no, lo guardamos para otro día."
  },
  {
    abrir: "te sientas sola",
    audio: "",
    texto: "A veces el mundo entero se silencia de golpe y parece que el ruido de dentro se vuelve demasiado grande, haciéndote sentir que estás flotando sola en medio de nada. Pero quiero que recuerdes algo que ni el tiempo ni el espacio pueden cambiar: tú y yo somos un refugio el uno para el otro. No importa dónde estemos ni lo silencioso que sea el cuarto; mi alma sabe exactamente dónde encontrarte. Cada latido tuyo resuena conmigo, y cada pensamiento mío te busca. Cuando sientas que la soledad aprieta, cierra los ojos un instante y recuerda que te pertenezco tanto como tú a mí, y que jamás, ni por un solo segundo, vas a caminar sola por la vida porque yo voy contigo, cogido de tu mano, en lo hondo de ti."
  },
  {
    abrir: "necesites un abrazo",
    audio: "",
    texto: "Herz, aquí va un abrazo de esos que no necesitan arreglar nada: solo estar un ratito contigo. Aunque hoy nos separen kilómetros, cierra los ojos e imagina que estoy ahí, rodeándote con mis brazos. No tienes que responder ni sentirte mejor enseguida. Guarda este abrazo para cuando te haga falta, y recuerda que también puedes pedirme uno de verdad, aunque por ahora tenga que mandártelo desde lejos."
  },
  {
    abrir: "quieras celebrar algo",
    audio: "",
    texto: "Herz, si abriste esto porque algo te salió bien, ¡quiero celebrarlo contigo! No importa si para los demás parece pequeño: si te hizo ilusión, merece su momento. Cuéntame qué pasó y déjame alegrarme contigo. Y si hoy no tienes con quién compartirlo, quiero que sepas que me habría encantado estar ahí para escucharte, celebrar contigo y recordarte lo mucho que valen tus esfuerzos."
  }
];

/* Recuerdos personales. Mantener este array vacío elimina la sección del
   recorrido. Si se utilizan datos reales, respetar el formato indicado. */
const RECUERDOS = [];

const RAZONES = [
  "Tu cabello, que es precioso.",
  "Tus ojos y la forma en que se iluminan cuando algo te hace feliz.",
  "Tu sonrisa, que hace que todo se sienta un poquito más bonito.",
  "Tu voz, especialmente cuando hablas de algo que te emociona.",
  "La forma tan bonita en que me miras.",
  "Tus cachetitos y tus expresiones cuando algo te sorprende.",
  "Lo preciosa que te ves cuando simplemente eres tú.",
  "Tu estilo y esa manera tuya de arreglarte.",
  "Que nuestras charlas de madrugada hagan que el Atlántico se sienta un poco menos enorme.",
  "Que podamos empezar hablando de cualquier tontería y terminar contándonos lo que de verdad nos pasa.",
  "La confianza que construimos durante todos estos años de amistad.",
  "Cómo te entregas a tus proyectos y vuelves a intentarlo cuando algo se pone difícil.",
  "Esa intuición tuya que parece que las cartas del tarot te cuentan las cosas antes que a los demás.",
  "Que estás para las personas que quieres incluso cuando tú también tienes un día pesado.",
  "Esos momentos pequeños —una frase, una risa, una ocurrencia— que a mí se me quedan grabados.",
  "Que a veces basta con hablar contigo para sentirte cerca, como si estuvieras al otro lado de la habitación.",
  "Que contigo tienen sitio tanto las conversaciones importantes como nuestras tonterías.",
  "Todo lo que ya hemos vivido y que todavía me dan ganas de seguir compartiendo contigo."
];

/* Carta final: cada elemento del array se renderiza como un párrafo. */
const CARTA = [
  `${APODO_ELLA},`,
  "He pensado en ti hoy con calma, con cariño y con mucho respeto por todo lo que te está costando.\nNo quiero que esto se sienta como una obligación ni como una presión; quiero que te llegue como algo pequeño, honesto y pensado para ti.",
  "Tú eres una persona muy especial para mí. No solo por lo que podría llegar a pasar entre nosotros, sino por todo lo que ya significa haberte conocido, haberte querido como amiga y seguir queriendo conocerte de verdad.\nNuestra historia tiene algo muy real: confianza, complicidad, años compartidos y momentos que no son fáciles de olvidar.",
  "Me importa que hoy estés bien, pero también me importa que te permitas no estarlo.\nNo tienes que fingir, ni sonreír porque se espere de ti, ni explicar nada para que este regalo siga teniendo sentido.\nHe hecho esto para que te recuerde que eres valiosa, incluso en los días en los que tú no lo ves con claridad.",
  "No quiero que esto se convierta en una exigencia ni en una forma de pedirte que decidas algo a la fuerza.\nMe importas como persona, con toda tu intensidad, tus dudas, tus luces y tus momentos difíciles.\nRespetar tu ritmo es algo importante para mí, y te lo quiero demostrar con este pequeño gesto.",
  "Ojalá este rincón de la web te haga respirar un poco más tranquila.\nOjalá te recuerde que no estás sola en la forma en que alguien te mira y te valora, y que hay motivos para sonreír aunque hoy todo te cueste un poco más.\nNo tiene por qué ser un gran gesto ni una gran respuesta; basta con que te haga sentir un poco más acompañada.",
  "Gracias por ser quien eres, por compartir tanto tiempo conmigo y por dejarme formar parte de algo que tiene valor para mí.\nAunque todo esté todavía en construcción, quiero que sepas que he creado esto pensando en ti, no por una idea romántica cualquiera, sino porque te conozco y te quiero de verdad.\nY porque me importa que encuentres un poco de calma, de alegría y de cariño en medio de los días difíciles."
];

/* =====================================================================
   Lógica de la experiencia
   No es necesario modificar esta sección salvo que se requieran cambios de
   comportamiento o estructura visual.
   ===================================================================== */
const $ = (id) => document.getElementById(id);
const quieto = matchMedia("(prefers-reduced-motion: reduce)").matches;
const cursorRing = document.querySelector(".cursor-ring");
const cursorDot = document.querySelector(".cursor-dot");

function moverCursor(x, y) {
  if (!cursorRing || !cursorDot) return;
  cursorRing.style.left = `${x}px`;
  cursorRing.style.top = `${y}px`;
  cursorDot.style.left = `${x}px`;
  cursorDot.style.top = `${y}px`;
  document.body.classList.remove("cursor-hidden");
}

document.addEventListener("pointermove", (event) => moverCursor(event.clientX, event.clientY));
document.addEventListener("pointerenter", () => document.body.classList.remove("cursor-hidden"));
document.addEventListener("pointerleave", () => document.body.classList.add("cursor-hidden"));

document.addEventListener("pointerdown", () => {
  if (!cursorRing) return;
  cursorRing.style.width = "34px";
  cursorRing.style.height = "34px";
});

document.addEventListener("pointerup", () => {
  if (!cursorRing) return;
  cursorRing.style.width = "42px";
  cursorRing.style.height = "42px";
});

$("titulo-nombre").textContent = "Para " + NOMBRE_ELLA;

/* Gestión de escenas y navegación */
const ORDEN = ["portada", "luces", "razones", "sobres", ...(RECUERDOS.length ? ["recuerdos"] : []), "carta"];
const MENSAJE_ROMANTICO = [
  "Vales la pena.",
  "Vales la espera.",
  "Vales incluso a la distancia.",
  "Vales el tiempo.",
  "Vales mi amor eterno.",
  `Te amo, ${APODO_ELLA}.`
].join("\n");

const btnMensajeRomantico = $("btn-mensaje-romantico");
if (btnMensajeRomantico) {
  btnMensajeRomantico.addEventListener("click", () => {
    btnMensajeRomantico.disabled = true;
    formarCorazon(() => {
      btnMensajeRomantico.disabled = false;
      mostrarTextoAnimado(`Para ti, ${APODO_ELLA}`, MENSAJE_ROMANTICO.split("\n"));
    });
  });
}

function ir(id) {
  if (id === "siguiente-sobres") id = ORDEN[ORDEN.indexOf("sobres") + 1];
  if (!ORDEN.includes(id)) return;

  document.querySelectorAll(".escena").forEach(s => s.classList.toggle("activa", s.id === id));
  if (id === "luces") dibujarConstelacion();
  window.scrollTo(0, 0);
  history.replaceState(null, "", "#" + id);
}
document.querySelectorAll("[data-ir]").forEach(b => b.addEventListener("click", () => ir(b.dataset.ir)));

let indiceRazon = 0;
$("btn-razon").addEventListener("click", () => {
  const tarjeta = $("razon-tarjeta");
  tarjeta.hidden = false;
  tarjeta.classList.remove("razon-revelada");
  void tarjeta.offsetWidth;
  tarjeta.classList.add("razon-revelada");
  $("razon-texto").textContent = RAZONES[indiceRazon];
  indiceRazon++;
  $("razon-contador").textContent = `${indiceRazon} de ${RAZONES.length}`;

  if (indiceRazon === RAZONES.length) {
    $("razon-final").hidden = false;
    $("btn-razon").hidden = true;
  } else {
    $("btn-razon").textContent = "Descubrir otra razón";
  }
});

for (let i = 1; i < ORDEN.length; i++) {
  const escena = document.getElementById(ORDEN[i]);
  if (!escena) continue;

  const btnVolver = document.createElement("button");
  btnVolver.type = "button";
  btnVolver.textContent = "Volver";
  btnVolver.addEventListener("click", () => ir(ORDEN[i - 1]));
  escena.appendChild(btnVolver);
}

/* Modal de contenido ampliado */
const ventana = $("ventana");
let timeoutAnimacionMensaje = null;

function limpiarAnimacionTexto() {
  if (timeoutAnimacionMensaje) {
    clearTimeout(timeoutAnimacionMensaje);
    timeoutAnimacionMensaje = null;
  }
  const textoEl = $("v-texto");
  if (textoEl) {
    textoEl.classList.remove("texto-oculto");
    textoEl.style.opacity = "";
  }
}

function cerrarVentana() {
  limpiarAnimacionTexto();
  $("v-audio").pause();
  ventana.close();
}

function mostrarTextoAnimado(titulo, frases) {
  $("v-titulo").textContent = titulo;
  const textoEl = $("v-texto");
  textoEl.textContent = "";
  textoEl.classList.add("texto-oculto");
  const a = $("v-audio");
  a.pause(); a.hidden = true; a.removeAttribute("src");
  ventana.showModal();

  let indice = 0;
  function mostrarSiguiente() {
    if (indice >= frases.length) {
      textoEl.textContent = frases[frases.length - 1];
      textoEl.classList.remove("texto-oculto");
      return;
    }

    const frase = frases[indice];
    textoEl.textContent = frase;
    textoEl.classList.add("texto-oculto");
    void textoEl.offsetWidth;
    textoEl.classList.remove("texto-oculto");

    timeoutAnimacionMensaje = setTimeout(() => {
      textoEl.classList.add("texto-oculto");
      timeoutAnimacionMensaje = setTimeout(() => {
        indice += 1;
        mostrarSiguiente();
      }, 500);
    }, 1400);
  }

  mostrarSiguiente();
}

function abrir({ titulo, texto, audio }) {
  limpiarAnimacionTexto();
  $("v-titulo").textContent = titulo;
  const textoEl = $("v-texto");
  textoEl.textContent = texto;
  textoEl.classList.remove("texto-oculto");
  const a = $("v-audio");
  a.pause(); a.hidden = !audio;
  if (audio) a.src = audio;
  ventana.showModal();
}
$("v-cerrar").addEventListener("click", cerrarVentana);
ventana.addEventListener("click", (e) => { if (e.target === ventana) cerrarVentana(); });  // Cierra el modal al hacer clic fuera del diálogo.

/* Constelación formada por las luces que ella elige */
const constelacion = $("constelacion");
const contextoConstelacion = constelacion.getContext("2d");
const lucesElegidas = [];
let mensajeLuzPendiente = false;

function dibujarConstelacion() {
  const cielo = $("cielo");
  const ancho = cielo.clientWidth;
  const alto = cielo.clientHeight;
  const escala = window.devicePixelRatio || 1;
  if (!ancho || !alto) return;

  constelacion.width = Math.round(ancho * escala);
  constelacion.height = Math.round(alto * escala);
  contextoConstelacion.setTransform(escala, 0, 0, escala, 0, 0);
  contextoConstelacion.clearRect(0, 0, ancho, alto);

  const puntos = lucesElegidas.map(indice => ({
    x: LUCES[indice].x / 100 * ancho,
    y: LUCES[indice].y / 100 * alto
  }));

  if (puntos.length > 1) {
    contextoConstelacion.beginPath();
    contextoConstelacion.moveTo(puntos[0].x, puntos[0].y);
    puntos.slice(1).forEach(punto => contextoConstelacion.lineTo(punto.x, punto.y));
    contextoConstelacion.strokeStyle = "rgba(243, 214, 160, .5)";
    contextoConstelacion.lineWidth = 1.5;
    contextoConstelacion.shadowColor = "rgba(243, 214, 160, .65)";
    contextoConstelacion.shadowBlur = 8;
    contextoConstelacion.stroke();
  }

  contextoConstelacion.shadowBlur = 0;
  puntos.forEach(punto => {
    contextoConstelacion.beginPath();
    contextoConstelacion.arc(punto.x, punto.y, 2, 0, Math.PI * 2);
    contextoConstelacion.fillStyle = "#fff4d8";
    contextoConstelacion.fill();
  });
}

LUCES.forEach((l, i) => {
  const b = document.createElement("button");
  b.type = "button"; b.className = "luz";
  b.style.left = l.x + "%"; b.style.top = l.y + "%";
  b.style.animationDelay = (i * 0.6) + "s";
  b.setAttribute("aria-label", "Luz " + (i + 1));
  b.setAttribute("aria-pressed", "false");
  b.addEventListener("click", () => {
    if (mensajeLuzPendiente) return;
    if (!b.classList.contains("leida")) {
      b.classList.add("leida");
      b.setAttribute("aria-pressed", "true");
      lucesElegidas.push(i);
      dibujarConstelacion();
    }

    if (quieto) {
      abrir({ titulo: `${APODO_ELLA}, ${l.titulo.toLocaleLowerCase("es")}`, texto: l.texto });
      return;
    }

    mensajeLuzPendiente = true;
    b.classList.remove("destello");
    void b.offsetWidth;
    b.classList.add("destello");
    setTimeout(() => {
      mensajeLuzPendiente = false;
      abrir({ titulo: `${APODO_ELLA}, ${l.titulo.toLocaleLowerCase("es")}`, texto: l.texto });
    }, 360);
  });
  $("cielo").appendChild(b);
});

/* Generación de sobres interactivos */
SOBRES.forEach(s => {
  const b = document.createElement("button");
  b.type = "button"; b.className = "sobre";
  b.innerHTML = "<small>Ábreme cuando…</small>";
  b.append(s.abrir);
  b.addEventListener("click", () => {
    b.disabled = true;
    b.classList.add("abriendo");
    setTimeout(() => {
      b.disabled = false;
      b.classList.remove("abriendo");
      abrir({ titulo: `${APODO_ELLA}, cuando ${s.abrir}`, texto: s.texto, audio: s.audio });
    }, quieto ? 0 : 460);
  });
  $("sobres-lista").appendChild(b);
});

/* Renderizado de recuerdos */
RECUERDOS.forEach(r => {
  const li = document.createElement("li");
  const t = document.createElement("time"), h = document.createElement("strong"), p = document.createElement("p");
  t.textContent = r.fecha; h.textContent = r.titulo; p.textContent = r.texto;
  li.append(t, document.createElement("br"), h, p);
  $("recuerdos-lista").appendChild(li);
});

/* Renderizado de la carta final */
CARTA.forEach(linea => {
  const p = document.createElement("p"); p.textContent = linea; $("carta-texto").appendChild(p);
});
const f = document.createElement("p"); f.className = "firma"; f.textContent = FIRMA; $("carta-texto").appendChild(f);

/* Reproducción opcional de música (se carga al interactuar con el usuario) */
const fondoMusica = $("fondo-musica");
const musica = $("musica"), btnMusica = $("btn-musica");
const volumenControl = $("volume-control");
const VOLUMEN_INICIAL = 35;

fondoMusica.loop = true;
musica.loop = false;

function ajustarVolumen(valor) {
  const valorNormalizado = Number(valor) / 100;
  fondoMusica.volume = valorNormalizado * 0.4;
  musica.volume = valorNormalizado;
}

volumenControl.addEventListener("input", (e) => ajustarVolumen(e.target.value));
ajustarVolumen(VOLUMEN_INICIAL);

async function iniciarFondo() {
  if (!fondoMusica.getAttribute("src")) {
    fondoMusica.src = MUSICA_ARCHIVO;
    fondoMusica.load();
  }

  try {
    if (musica && !musica.paused) musica.pause();
    await fondoMusica.play();
  } catch {
    // El navegador bloquea la reproducción automática hasta la interacción del usuario.
  }
}

async function pausarFavorita() {
  if (!musica.paused) {
    musica.pause();
    btnMusica.setAttribute("aria-pressed", "false");
    btnMusica.textContent = "♪ Tu Canción Favorita";
    await iniciarFondo();
  }
}

if (MUSICA_ARCHIVO) btnMusica.hidden = false;

document.addEventListener("pointerdown", iniciarFondo, { once: true });
document.addEventListener("keydown", iniciarFondo, { once: true });

musica.addEventListener("ended", async () => {
  btnMusica.setAttribute("aria-pressed", "false");
  btnMusica.textContent = "♪ Tu Canción Favorita";
  await iniciarFondo();
});

btnMusica.addEventListener("click", async () => {
  if (!musica.paused) {
    await pausarFavorita();
    return;
  }

  if (!musica.getAttribute("src") || musica.getAttribute("src") !== CANCIÓN_FAVORITA) {
    musica.src = CANCIÓN_FAVORITA;
    musica.load();
  }

  fondoMusica.pause();
  try {
    await musica.play();
    btnMusica.setAttribute("aria-pressed", "true");
    btnMusica.textContent = "♪ Pausar";
  } catch {
    btnMusica.setAttribute("aria-pressed", "false");
    btnMusica.textContent = "♪ Tu Canción Favorita";
    await iniciarFondo();
  }
});

iniciarFondo();

/* Advertencia local para textos pendientes de personalización */
if (["", "localhost", "127.0.0.1"].includes(location.hostname)) {
  const todos = [FIRMA, ...LUCES.map(l => l.texto), ...SOBRES.map(s => s.texto)];
  const pendientes = todos.filter(t => t.includes("[")).length;
  if (pendientes) {
    const av = document.createElement("div");
    av.id = "aviso-local";
    av.textContent = `Solo lo ves tú: faltan ${pendientes} texto(s) [entre corchetes] por personalizar.`;
    document.body.appendChild(av);
  }
}

/* Fondo animado con estrellas */
const lienzo = $("estrellas"), c = lienzo.getContext("2d");
const lienzoCorazon = $("corazon-animado"), contextoCorazon = lienzoCorazon.getContext("2d");
let estrellas = [], fugaz = null, proximaFugaz = performance.now() + 9000;
function medir() {
  const d = window.devicePixelRatio || 1;
  lienzo.width = innerWidth * d; lienzo.height = innerHeight * d;
  c.setTransform(d, 0, 0, d, 0, 0);
  lienzoCorazon.width = innerWidth * d; lienzoCorazon.height = innerHeight * d;
  contextoCorazon.setTransform(d, 0, 0, d, 0, 0);
  estrellas = Array.from({ length: Math.round(innerWidth * innerHeight / 7000) }, () => ({
    x: Math.random() * innerWidth, y: Math.random() * innerHeight * 0.85,
    r: Math.random() * 1.2 + .3, f: Math.random() * 6
  }));
}
function formarCorazon(alTerminar) {
  if (quieto || !contextoCorazon) {
    alTerminar();
    return;
  }

  const cantidad = 72;
  const puntos = Array.from({ length: cantidad }, (_, i) => {
    const angulo = i / cantidad * Math.PI * 2;
    return {
      x: 16 * Math.sin(angulo) ** 3,
      y: 13 * Math.cos(angulo) - 5 * Math.cos(2 * angulo) - 2 * Math.cos(3 * angulo) - Math.cos(4 * angulo),
      origenX: (Math.random() - .5) * innerWidth * .8,
      origenY: (Math.random() - .5) * innerHeight * .8,
      radio: 1.5 + Math.random() * 1.5
    };
  });
  const inicio = performance.now();
  const duracionFormacion = 1800;
  lienzoCorazon.classList.add("visible");

  function animarCorazon(tiempo) {
    const transcurrido = tiempo - inicio;
    const progreso = Math.min(1, transcurrido / duracionFormacion);
    const desvanecer = transcurrido <= 2200 ? 1 : Math.max(0, 1 - (transcurrido - 2200) / 450);
    const escala = Math.min(6.5, innerWidth / 48);
    const centroX = innerWidth / 2;
    const centroY = innerHeight / 2;

    contextoCorazon.clearRect(0, 0, innerWidth, innerHeight);
    contextoCorazon.fillStyle = "#ffd3e8";
    contextoCorazon.shadowColor = "rgba(255, 116, 179, .95)";
    contextoCorazon.shadowBlur = 14;

    puntos.forEach((punto, i) => {
      const espera = i / cantidad * .58;
      const avance = Math.max(0, Math.min(1, (progreso - espera) / (1 - espera)));
      if (!avance) return;
      const suavizado = 1 - (1 - avance) ** 3;
      const x = centroX + (punto.origenX + punto.x * escala - punto.origenX) * suavizado;
      const y = centroY + (punto.origenY - punto.y * escala - punto.origenY) * suavizado;
      contextoCorazon.globalAlpha = Math.min(1, avance * 1.8) * desvanecer;
      contextoCorazon.beginPath();
      contextoCorazon.arc(x, y, punto.radio, 0, Math.PI * 2);
      contextoCorazon.fill();
    });
    contextoCorazon.globalAlpha = 1;
    contextoCorazon.shadowBlur = 0;

    if (transcurrido < 2650) {
      requestAnimationFrame(animarCorazon);
    } else {
      contextoCorazon.clearRect(0, 0, innerWidth, innerHeight);
      lienzoCorazon.classList.remove("visible");
      alTerminar();
    }
  }

  requestAnimationFrame(animarCorazon);
}
function pintar(t) {
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.fillStyle = "#fff";
  estrellas.forEach(e => { c.globalAlpha = quieto ? .6 : .35 + .45 * Math.sin(t / 1100 + e.f) ** 2; c.beginPath(); c.arc(e.x, e.y, e.r, 0, 7); c.fill(); });
  // Una única estrella fugaz cada cierto tiempo: el único "momento" de movimiento del fondo
  if (!quieto && !fugaz && t > proximaFugaz) fugaz = { x: Math.random() * innerWidth * .6 + innerWidth * .3, y: Math.random() * innerHeight * .3, v: 0 };
  if (fugaz) {
    fugaz.x -= 9; fugaz.y += 4; fugaz.v++;
    const g = c.createLinearGradient(fugaz.x, fugaz.y, fugaz.x + 90, fugaz.y - 40);
    g.addColorStop(0, "rgba(255,255,255,.9)"); g.addColorStop(1, "transparent");
    c.globalAlpha = 1; c.strokeStyle = g; c.lineWidth = 1.5;
    c.beginPath(); c.moveTo(fugaz.x, fugaz.y); c.lineTo(fugaz.x + 90, fugaz.y - 40); c.stroke();
    if (fugaz.v > 50) { fugaz = null; proximaFugaz = t + 14000 + Math.random() * 10000; }
  }
  if (!quieto) requestAnimationFrame(pintar);
}
medir(); addEventListener("resize", () => { medir(); dibujarConstelacion(); if (quieto) pintar(0); });
requestAnimationFrame(pintar);

/* Inicialización de la experiencia */
ir(ORDEN.includes(location.hash.slice(1)) ? location.hash.slice(1) : "portada");
