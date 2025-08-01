# sLoading - Loading Screen

An elegant and modern loading screen with YouTube video background and interactive controls.

## 🎬 Background Video

The video used as background comes from YouTube:
- **URL**: [https://www.youtube.com/watch?v=1ckbDbl657Q](https://www.youtube.com/watch?v=1ckbDbl657Q)
- **ID**: `1ckbDbl657Q`

### ⚠️ Credits and Copyright

This video is used for educational and demonstration purposes only. All rights belong to their respective creators. If you are the owner of this video and wish to have it removed, please contact us.

## ✨ Features

- **YouTube video background**: Automatic loop playback
- **Audio controls**: Button to enable/disable sound with Material-UI icons
- **Animated logo**: Central logo with smooth animation and color effects
- **GitHub link**: Direct access to GitHub profile with tooltip
- **Responsive design**: Interface adapted to all screens
- **Color filters**: Consistent visual effects across the entire page

## 🛠️ Technologies Used

- **React 19**: Main framework
- **TypeScript**: Static typing
- **Material-UI (MUI)**: Components and icons
- **React YouTube**: YouTube video integration
- **Vite**: Build tool and dev server
- **CSS Modules**: Modular styles

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/slowwdown/sLoading.git
cd sLoading

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
sLoading/
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── App.css
│   │       ├── SoundButton.css
│   │       ├── YoutubePlayer.module.css
│   │       └── index.css
│   ├── components/
│   │   ├── SoundButton/
│   │   │   └── SoundButton.tsx
│   │   └── YoutubePlayer/
│   │       └── YoutubePlayer.tsx
│   ├── theme/
│   │   └── muiTheme.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── assets/
│       ├── logo.png
│       └── github.png
└── package.json
```

## 🎨 Components

### YoutubePlayer
- Manages YouTube video background playback
- Automatic configuration for loop playback
- Integrated volume controls

### SoundButton
- Button to enable/disable sound
- Material-UI icons (VolumeUp/VolumeOff)
- Dynamic descriptive text

### Logo Overlay
- Central logo with animation
- Color effects and shadows
- Smooth rotation and scale animation

## 🎯 Configuration

### Change the video
Modify the video ID in `src/components/YoutubePlayer/YoutubePlayer.tsx`:

```typescript
const videoId = "YOUR_VIDEO_ID";
```

### Customize the logo
Replace the `public/assets/logo.png` file with your own logo.

### Modify colors
Adjust color filters in `src/assets/styles/App.css`:

```css
.app {
  filter: hue-rotate(0deg) saturate(1.1) brightness(1.05);
}
```

## 📱 Responsive Design

The interface automatically adapts to different screen sizes:
- **Desktop**: Full display with all elements
- **Tablet**: Size and spacing adaptations
- **Mobile**: Interface optimized for small screens

## 🎵 Audio Controls

- **Automatic playback**: Video starts automatically
- **Muted by default**: Compliance with modern browsers
- **Manual control**: Button to enable/disable sound
- **Persistent state**: Sound state is maintained during the session

## 🔧 Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Build preview
npm run lint     # Code verification
```

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 👨‍💻 Author

- **GitHub**: [@slowwdown](https://github.com/slowwdown)

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create a branch for your feature
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## ⚠️ Legal Disclaimer

This project uses a YouTube video as background. Make sure to respect copyright and YouTube's terms of service when using this code in production.

---

**Note**: This loading screen is designed to be used in personal or educational projects. For commercial use, make sure you have the appropriate rights for the video used.
