# Text-to-Voice Converter

A simple yet powerful web app that converts written text into speech using the browser's built-in SpeechSynthesis API. Users can type or paste any text, click a button, and instantly hear it read aloud.

**Live Demo:** [https://pavithraadeenadayalan.github.io/TextToVoiceConvertor/](https://pavithraadeenadayalan.github.io/TextToVoiceConvertor/)

## Features

- **Clean and Responsive Design** – Works seamlessly across all devices
- **Native Web Speech API** – Uses browser's built-in text-to-speech conversion
- **Multiple Voices** – Supports different voices (browser-dependent)
- **Language Options** – Adjustable language and voice options via code customization
- **Instant Playback** – Speech playback without any backend required
- **Lightweight** – Fast to load and minimal resource usage

## Tech Stack

- **HTML5** – Application structure
- **CSS3** – Clean interface styling
- **JavaScript** – SpeechSynthesis API integration

## Usage

1. **Open the live demo link in your browser**
2. **Type or paste the text** you want to convert to speech
3. **Click the "Speak" button** to hear the audio
4. **Customize language:** Modify `utterance.lang` in `script.js` to change the language/accent
5. **Select voice:** Modify `utterance.voice` to select a specific voice from `synth.getVoices()`

## Project Structure

```
TextToVoiceConvertor/
├── index.html   # Main structure of the application
├── styles.css   # Styling for the app's clean interface
└── script.js    # Handles text-to-speech functionality
```

## How It Works

The application leverages the browser's native **SpeechSynthesis API** to convert text to speech:

- Text input is captured from the user interface
- JavaScript creates a `SpeechSynthesisUtterance` object with the input text
- The browser's speech synthesis engine processes and speaks the text
- No server-side processing or external APIs required

## Browser Compatibility

This app works on modern browsers that support the Web Speech API:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Customization

You can easily customize the speech output by modifying the JavaScript:

```javascript
// Change language/accent
utterance.lang = 'en-US'; // or 'en-GB', 'fr-FR', etc.

// Adjust speech rate and pitch
utterance.rate = 1.0;     // Speed (0.1 to 10)
utterance.pitch = 1.0;    // Pitch (0 to 2)
```

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any improvements or bug fixes.

## Author

**Pavithraa Deenadayalan**  
GitHub: [https://github.com/pavithraadeenadayalan](https://github.com/pavithraadeenadayalan)

---

*Made with love*
