# GPS TO TECH Loading Page

A modern, animated loading page built with React and Framer Motion, featuring a dynamic logo animation, progress bar, and rotating tech career tips.

## Features

- Animated SVG logo with gradient effects
- Smooth loading progress bar
- Rotating career tips and facts
- Responsive design
- Clean, modern UI

## Live Demo

[View Live Demo](https://gpstotechloader.netlify.app)

## Tech Stack

- React
- Vite
- Framer Motion
- Emotion (Styled Components)
- Netlify for deployment

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/GPSTOTECHLOADER.git
cd GPSTOTECHLOADER
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

### Deployment

The project is configured for easy deployment to Netlify:

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy to Netlify:
```bash
netlify deploy --prod
```

## Project Structure

```
GPSTOTECHLOADER/
├── src/
│   ├── App.jsx
│   ├── LoadingPage.jsx
│   ├── GPSTOTECHv2.svg
│   └── index.css
├── netlify.toml
└── package.json
```

## Customization

### Modifying Tips

Tips can be modified in the `tips` array in `LoadingPage.jsx`:

```javascript
const tips = [
  {
    id: 1,
    text: "Your custom tip here"
  },
  // Add more tips...
];
```

### Styling

The project uses Emotion (Styled Components) for styling. Main style components can be found in `LoadingPage.jsx`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Logo design by GPS TO TECH
- Career tips curated from industry research
- Built with React and Framer Motion
