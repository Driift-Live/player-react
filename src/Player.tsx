import React from 'react'
import videojs from 'video.js'
import airPlay from '@silvermine/videojs-airplay'
import chromecast from '@silvermine/videojs-chromecast'
import { VideoPlayer, VideoPlayerProps } from '@videojs-player/react'
import 'video.js/dist/video-js.css'
import '@silvermine/videojs-airplay/dist/silvermine-videojs-airplay.css'
import '@silvermine/videojs-chromecast/dist/silvermine-videojs-chromecast.css'

export interface PlayerProps extends VideoPlayerProps {
  onPause: (event: Event) => void;
}

export class Player extends React.Component<PlayerProps> {
  static defaultProps = {
    autoplay: true,
    controls: true,
    className: 'vjs-big-play-centered',
    crossorigin: 'anonymous',
    fluid: true,
    playsInline: true,
    techOrder: ['chromecast', 'html5'],
  }

  constructor(props: PlayerProps) {
    super(props)
    // Register casting plugins
    airPlay(videojs)
    chromecast(videojs)
  }

  render() {
    const {
      autoplay,
      controls,
      className,
      crossorigin,
      fluid,
      onPause,
      playsInline,
      techOrder,
      ...options
    } = this.props

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
        techOrder={techOrder}
        {...options}
      />
    )
  }
}

