import React, { useRef } from 'react';
import YouTube, { type YouTubeProps } from 'react-youtube';
import styles from '../../assets/styles/YoutubePlayer.module.css';

interface YoutubePlayerProps {
  onVolumeChange?: (volume: number) => void;
  onPlayerReady?: (player: any) => void;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ onVolumeChange: _onVolumeChange, onPlayerReady }) => {
  const playerRef = useRef<any>(null);
  const videoId = "1ckbDbl657Q";

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: 1,
      rel: 0,
      modestbranding: 1,
      loop: 1,
      playlist: videoId,
      playsinline: 1,
      iv_load_policy: 3,
      start: 0,
    },
  };

  const onReady: YouTubeProps['onReady'] = (event: any) => {
    playerRef.current = event.target;
    onPlayerReady?.(event.target);
  };

  const onStateChange: YouTubeProps['onStateChange'] = (event) => {
    if (event.data === 0) {
      if (playerRef.current) {
        playerRef.current.playVideo();
      }
    }
  };

  const onError: YouTubeProps['onError'] = (event) => {
    console.error('YouTube error:', event.data);
  };

  return (
    <div className={styles.container} style={{ 
      position: 'fixed', 
      top: 0,
      left: 0,
      width: '100vw', 
      height: '100vh', 
      backgroundColor: 'black',
      zIndex: 1
    }}>
      <YouTube
        key={videoId}
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        onStateChange={onStateChange}
        onError={onError}
        iframeClassName={styles.reactPlayer}
        style={{ 
          width: '100%', 
          height: '100%',
          display: 'block',
          objectFit: 'cover'
        }}
      />
    </div>
  );
};

export default YoutubePlayer;
