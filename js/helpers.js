const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;

/* Functions
-------------------------------------------------- */
function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  let utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
}
