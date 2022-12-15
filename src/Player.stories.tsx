import React, { useRef } from 'react'
import { VideoJsPlayer } from 'video.js'
import { VideoPlayerState } from '@videojs-player/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Player } from './Player'

interface OnMountPayload {
  video: HTMLVideoElement
  player: VideoJsPlayer
  state: VideoPlayerState
}

export default {
  title: 'Player',
  argTypes: {
    fluid: {
      options: [true, false],
      control: { type: 'radio' },
    },
    src: {
      name: 'src',
      type: { name: 'string', required: true },
      defaultValue: '//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
      description: 'demo description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Player>

const Template: ComponentStory<typeof Player> = ({ fluid, src }) => {
  // Allows us to interrogate fullscreen status
  const playerRef = useRef<VideoJsPlayer>()

  const handlePlayerMounted = (payload: OnMountPayload) => {
    action('mounted')(payload)
    playerRef.current = payload.player
  }

  const handleToggleFullscreen = (event: Event) => {
    const act = `fullscreen ${
      playerRef.current!.isFullscreen() ? 'enabled' : 'disabled'
    }`
    action(act)(event)
  }

  return (
    <Player
      src={src}
      fluid={fluid}
      onMounted={handlePlayerMounted}
      onPlay={action('played')}
      onPause={action('paused')}
      onSeeked={action('seeked')}
      onFullscreenChange={handleToggleFullscreen}
      onDispose={action('disposed')}
    />
  )
}

export const ExampleStory = Template.bind({})
ExampleStory.args = {
  fluid: true,
}
