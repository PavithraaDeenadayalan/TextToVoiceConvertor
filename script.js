const speakButton = document.getElementById("speakButton");
const textInput = document.getElementById("text");
const status = document.getElementById("status");

// Initialize the SpeechSynthesis API
const synth = window.speechSynthesis;

speakButton.addEventListener("click", () => {
const textToSpeak = textInput.value.trim();
            
if (!textToSpeak) {
    textInput.focus();
    textInput.style.borderColor = '#e74c3c';
        setTimeout(() => {
            textInput.style.borderColor = '#ddd';
            }, 1500);
            return;
    }
    
 const utterance = new SpeechSynthesisUtterance(textToSpeak);
            
            // Configure the voice and language
            const voices = synth.getVoices();
            utterance.voice = voices[0];
            utterance.lang = "en-US";

            // Show status
            status.classList.add('active');
            speakButton.textContent = 'Speaking...';
            speakButton.disabled = true;

            // Handle speech events
            utterance.onend = () => {
                status.classList.remove('active');
                speakButton.textContent = 'Speak';
                speakButton.disabled = false;
            };

            utterance.onerror = () => {
                status.classList.remove('active');
                speakButton.textContent = 'Speak';
                speakButton.disabled = false;
            };

            // Speak the text
            synth.speak(utterance);
        });
