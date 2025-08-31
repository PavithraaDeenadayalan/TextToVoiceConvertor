# Text-to-Voice Converter

A simple yet powerful web app that converts written text into speech using the browser's built-in SpeechSynthesis API. Features a clean dark theme interface that's easy on the eyes and works seamlessly across all devices.

**Live Demo:** [https://pavithraadeenadayalan.github.io/TextToVoiceConvertor/](https://pavithraadeenadayalan.github.io/TextToVoiceConvertor/)

## Features

- **Dark Theme Design** – Easy on the eyes with excellent contrast for better readability
- **Fully Responsive** – Works seamlessly across desktop, tablet, and mobile devices
- **Native Web Speech API** – Uses browser's built-in text-to-speech conversion
- **Multiple Voices** – Supports different voices (browser-dependent)
- **Real-time Feedback** – Visual status indicator shows when speech is active
- **Instant Playback** – Speech playback without any backend required
- **Lightweight** – Fast to load and minimal resource usage

## Tech Stack

- **HTML5** – Application structure and semantic markup
- **CSS3** – Modern dark theme styling with responsive design
- **JavaScript** – SpeechSynthesis API integration and user interaction handling

## Usage

1. **Open the live demo link in your browser**
2. **Type or paste the text** you want to convert to speech in the dark-themed text area
3. **Click the "Speak" button** to hear the audio - button will show "Speaking..." while active
4. **Visual feedback** - Green status indicator appears during speech playback

## Project Structure

```
TextToVoiceConvertor/
├── index.html   # Main structure of the application
├── styles.css   # Styling for the app's clean interface
└── script.js    # Handles text-to-speech functionality
```

## How It Works

The application leverages the browser's native **SpeechSynthesis API** to convert text to speech:

- Clean, dark-themed interface provides excellent readability
- Text input is captured from the user interface with real-time visual feedback
- JavaScript creates a `SpeechSynthesisUtterance` object with the input text
- Visual status indicators show when speech is active
- The browser's speech synthesis engine processes and speaks the text
- No server-side processing or external APIs required

## Design Features

- **Dark Theme** – Reduces eye strain with a professional dark color scheme
- **High Contrast** – Excellent readability with light text on dark backgrounds
- **Modern UI** – Clean, minimalist interface focusing on functionality
- **Responsive Layout** – Adapts perfectly to any screen size

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

*Made with love ❤️*
