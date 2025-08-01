import React, { useState } from 'react';
import { VolumeUp, VolumeOff } from '@mui/icons-material';
import '../../assets/styles/SoundButton.css';

interface SoundButtonProps {
  youtubePlayer?: any;
}

const SoundButton: React.FC<SoundButtonProps> = ({ youtubePlayer }) => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (youtubePlayer) {
      if (isMuted) {
        youtubePlayer.unMute();
      } else {
        youtubePlayer.mute();
      }
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="sound-button-container">
      <button
        onClick={toggleMute}
        className="sound-button"
      >
        {isMuted ? <VolumeOff /> : <VolumeUp />}
        <span className="sound-button-text">
          {isMuted ? 'Unmute' : 'Mute'}
        </span>
      </button>
    </div>
  );
};

export default SoundButton;