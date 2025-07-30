const speakButton = document.getElementById("speakButton");
const textInput = document.getElementById("text");

// Initialize the SpeechSynthesis API
const synth = window.speechSynthesis;

speakButton.addEventListener("click", () => {
    const textToSpeak = textInput.value;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Configure the voice and language
    const voices = synth.getVoices();
    utterance.voice = voices[0]; // You can choose a specific voice from the voices array
    utterance.lang = "en-US"; // Set the language

    // Speak the text
    synth.speak(utterance);
});









