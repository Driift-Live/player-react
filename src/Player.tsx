import React from 'react'
import { VideoPlayer, VideoPlayerProps } from '@videojs-player/react'
import 'video.js/dist/video-js.css'

export interface PlayerProps extends VideoPlayerProps {
  onPause: (event: Event) => void;
}

export const Player: React.FC<PlayerProps> = ({
  autoplay = true,
  controls = true,
  className = 'vjs-big-play-centered',
  crossorigin = 'anonymous',
  fluid = true,
  onPause,
  playsInline = true,
  ...options
}) => {
  return (
    <VideoPlayer
      id="driift-player-react"
      className={className}
      autoplay={autoplay}
      controls={controls}
      crossorigin={crossorigin}
      fluid={fluid}
      onpause={onPause}
      playsInline={playsInline}
      {...options}
    />
  )
}
