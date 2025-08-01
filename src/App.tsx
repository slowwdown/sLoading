import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GitHub } from '@mui/icons-material';
import { loadingScreenTheme } from './theme/muiTheme';
import YoutubePlayer from './components/YoutubePlayer/YoutubePlayer';
import SoundButton from './components/SoundButton/SoundButton';
import './App.css';

function App() {
  const [youtubePlayer, setYoutubePlayer] = useState<any>(null);

  const handleVolumeChange = (_volume: number) => {
    // Volume change handler for future use
  };

  const handlePlayerReady = (player: any) => {
    setYoutubePlayer(player);
  };

  return (
    <ThemeProvider theme={loadingScreenTheme}>
      <CssBaseline />
      <div className="app">
        <YoutubePlayer
          onVolumeChange={handleVolumeChange}
          onPlayerReady={handlePlayerReady}
        />

        <SoundButton youtubePlayer={youtubePlayer} />

        <div className="logo-overlay">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="logo-image"
          />
        </div>

        <div className="github-container">
          <div className="github-wrapper">
            <a
              href="https://github.com/slowwdown"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <GitHub className="github-icon" />
            </a>

            <div className="github-tooltip">
              @slowwdown
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
