# player-react
[Driift]'s video player supporting HTML5 video and modern streaming formats, built for use in React. Written in [TypeScript], leveraging [Video.js], and published via [NPM].

## Usage

### Install
Use your package manager of choice to install the npm package:

```
npm install @driift/player-react --save
```

```
pnpm add @driift/player-react
```

### In practice
In your React application...

```JavaScript
import React from 'react'
import { Player } from '@driift/player-react'

function App() {
  // Event handlers

  return (
    <Player
      src="//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8"
      onMounted={handlePlayerMounted}
      onPlay={handlePlay}
      onPause={handlePause}
      onSeeked={handleSeek}
      onFullscreenChange={handleToggleFullscreen}
      onDispose={handleExit}
    />
  )
}
```

## Component Props
All parameters are optional except `src` or `sources`, one of which is required. [Video.js] determines the default value of most props, although several props are tailored to the Driift experience. Namely:

| Prop Name | Driift Default |
| :-------- | :------------- |
| autoplay | `true` |
| controls | `true` |
| className | `'vjs-big-play-centered'` |
| crossorigin | `'anonymous'` |
| fluid | `true` |
| playsInline | `true` |

In the table below, `"responsive"` indicates that Video.js will automatically respond to any updates passed into the given prop, e.g. a change in `volume` will cause the player to change the volume.

| Prop Name                                       | Video.js API Doc & Description                                                                     | Type                   | Responsive |
| :---------------------------------------------- | :------------------------------------------------------------------------------------------------- | :--------------------- | :--------- |
| id                                              | [options.id](https://videojs.com/guides/options/#id)                                               | `String`               |            |
| src (required or `sources`)                   | [options.src](https://videojs.com/guides/options/#src)                                             | `String`               | ✓          |
| sources                                         | [options.sources](https://videojs.com/guides/options/#sources)                                     | `Array`                | ✓          |
| width                                           | [options.width](https://videojs.com/guides/options/#width)                                         | `Number`               | ✓          |
| height                                          | [options.height](https://videojs.com/guides/options/#height)                                       | `Number`               | ✓          |
| preload                                         | [options.preload](https://videojs.com/guides/options/#preload)                                     | `String`               | ✓          |
| loop                                            | [options.loop](https://videojs.com/guides/options/#loop)                                           | `Boolean`              | ✓          |
| muted                                           | [options.muted](https://videojs.com/guides/options/#muted)                                         | `Boolean`              | ✓          |
| poster                                          | [options.poster](https://videojs.com/guides/options/#poster)                                       | `String`               | ✓          |
| controls                                        | [options.controls](https://videojs.com/guides/options/#controls)                                   | `Boolean`              | ✓          |
| autoplay                                        | [options.autoplay](https://videojs.com/guides/options/#autoplay)                                   | `Boolean \| String`    | ✓          |
| playsinline                                     | [options.playsinline](https://docs.videojs.com/player#playsinline)                                 | `Boolean`              | ✓          |
| crossorigin                                     | [options.crossOrigin](https://docs.videojs.com/player#crossorigin)                                 | `String`               | ✓          |
| volume                                          | A number, between 0 and 1, control the volume of the player.                                       | `Number`               | ✓          |
| playbackRate                                    | Control the playback rate of the player.                                                           | `Number`               | ✓          |
| playbackRates                                   | [options.playbackRates](https://videojs.com/guides/options/#playbackrates)                         | `Array<Number>`        | ✓          |
| fluid                                           | [options.fluid](https://videojs.com/guides/options/#fluid)                                         | `Boolean`              | ✓          |
| fill                                            | [options.fill](https://videojs.com/guides/options/#fill)                                           | `Boolean`              | ✓          |
| language                                        | [options.language](https://videojs.com/guides/options/#language)                                   | `String`               | ✓          |
| languages                                       | [options.languages](https://videojs.com/guides/options/#languages)                                 | `Object`               |            |
| tracks                                          | [options.tracks](https://videojs.com/guides/text-tracks/)                                          | `Array`                | ✓          |
| textTrackSettings                               | [options.textTrackSettings](https://docs.videojs.com/texttracksettings)                            | `Object`               | ✓          |
| responsive                                      | [options.responsive](https://videojs.com/guides/options/#responsive)                               | `Boolean`              | ✓          |
| breakpoints                                     | [options.breakpoints](https://videojs.com/guides/options/#breakpoints)                             | `Object`               | ✓          |
| fullscreen                                      | [options.fullscreen](https://videojs.com/guides/options/#fullscreen)                               | `FullscreenOptions`    |            |
| aspectRatio                                     | [options.aspectRatio](https://videojs.com/guides/options/#aspectratio)                             | `Boolean`              | ✓          |
| liveui                                          | [options.liveui](https://videojs.com/guides/options/#liveui)                                       | `Boolean`              |            |
| liveTracker                                     | [options.liveTracker](https://videojs.com/guides/options/#livetrackertrackingthreshold)            | `Object`               |            |
| disablePictureInPicture                         | [options.disablePictureInPicture](https://docs.videojs.com/html5#disablePictureInPicture)          | `Boolean`              | ✓          |
| notSupportedMessage                             | [options.notSupportedMessage](https://videojs.com/guides/options/#notsupportedmessage)             | `String`               | ✓          |
| normalizeAutoplay                               | [options.normalizeAutoplay](https://videojs.com/guides/options/#normalizeautoplay)                 | `Boolean`              | ✓          |
| audioPosterMode                                 | [options.audioPosterMode](https://videojs.com/guides/options/#audiopostermode)                     | `Boolean`              | ✓          |
| audioOnlyMode                                   | [options.audioOnlyMode](https://videojs.com/guides/options/#audioonlymode)                         | `Boolean`              | ✓          |
| noUITitleAttributes                             | [options.noUITitleAttributes](https://videojs.com/guides/options/#nouititleattributes)             | `Boolean`              |            |
| preferFullWindow                                | [options.preferFullWindow](https://videojs.com/guides/options/#preferfullwindow)                   | `Boolean`              |            |
| suppressNotSupportedError                       | [options.suppressNotSupportedError](https://videojs.com/guides/options/#suppressnotsupportederror) | `Boolean`              |            |
| techCanOverridePoster                           | [options.techCanOverridePoster](https://videojs.com/guides/options/#techcanoverrideposter)         | `Boolean`              |            |
| techOrder                                       | [options.techOrder](https://videojs.com/guides/options/#techorder)                                 | `Array`                |            |
| inactivityTimeout                               | [options.inactivityTimeout](https://videojs.com/guides/options/#inactivitytimeout)                 | `Number`               |            |
| userActions                                     | [options.userActions](https://videojs.com/guides/options/#useractions)                             | `Object`               |            |
| restoreEl                                       | [options.restoreEl](https://videojs.com/guides/options/#restoreel)                                 | `Boolean \| Element`   |            |
| vtt.js                                          | [options['vtt.js']](https://videojs.com/guides/options/#vttjs)                                     | `String`               |            |
| videoJsChildren | [options.children](https://videojs.com/guides/options/#children)                                   | `Array \| Object`      |            |
| html5                                           | [options.html5](https://videojs.com/guides/options/#html5)                                         | `Object`               |            |
| plugins                                         | [options.plugins](https://videojs.com/guides/options/#plugins)                                     | `Object`               |            |
| options                                         | A fallback scheme, if you need to use options that don't exist in props, pass them to `options`.   | `VideoJsPlayerOptions` |            |

## Component Events

Events emitted by [Video.js]; every event's argument type is always [`EventTarget`](https://docs.videojs.com/eventtarget).

| Video.js Event                                                                             | 🫥 🫥 🫥 🫥 🫥 🫥 | Component event       |
| :----------------------------------------------------------------------------------------- | :---------- | :------------------------ |
| [event.loadstart](https://docs.videojs.com/player#event:loadstart)                         | -           | `onLoadStart`             |
| [event.suspend](https://docs.videojs.com/player#event:suspend)                             | -           | `onSuspend`               |
| [event.abort](https://docs.videojs.com/player#event:abort)                                 | -           | `onAbort`                 |
| [event.error](https://docs.videojs.com/player#event:error)                                 | -           | `onError`                 |
| [event.emptied](https://docs.videojs.com/player#event:emptied)                             | -           | `onEmptied`               |
| [event.stalled](https://docs.videojs.com/player#event:stalled)                             | -           | `onStalled`               |
| [event.loadedmetadata](https://docs.videojs.com/player#event:loadedmetadata)               | -           | `onLoadedMetadata`        |
| [event.loadeddata](https://docs.videojs.com/player#event:loadeddata)                       | -           | `onLoadedData`            |
| [event.canplay](https://docs.videojs.com/player#event:canplay)                             | -           | `onCanPlay`               |
| [event.canplaythrough](https://docs.videojs.com/player#event:canplaythrough)               | -           | `onCanPlayThrough`        |
| [event.playing](https://docs.videojs.com/player#event:playing)                             | -           | `onPlaying`               |
| [event.waiting](https://docs.videojs.com/player#event:waiting)                             | -           | `onWaiting`               |
| [event.seeking](https://docs.videojs.com/player#event:seeking)                             | -           | `onSeeking`               |
| [event.seeked](https://docs.videojs.com/player#event:seeked)                               | -           | `onSeeked`                |
| [event.ended](https://docs.videojs.com/player#event:ended)                                 | -           | `onEnded`                 |
| [event.durationchange](https://docs.videojs.com/player#event:durationchange)               | -           | `onDurationChange`        |
| [event.timeupdate](https://docs.videojs.com/player#event:timeupdate)                       | -           | `onTimeUpdate`            |
| [event.progress](https://docs.videojs.com/player#event:progress)                           | -           | `onProgress`              |
| [event.play](https://docs.videojs.com/player#event:play)                                   | -           | `onPlay`                  |
| [event.pause](https://docs.videojs.com/player#event:pause)                                 | -           | `onPause`                 |
| [event.ratechange](https://docs.videojs.com/player#event:ratechange)                       | -           | `onRateChange`            |
| [event.resize](https://docs.videojs.com/player#event:resize)                               | -           | `onResize`                |
| [event.volumechange](https://docs.videojs.com/player#event:volumechange)                   | -           | `onVolumeChange`          |
| [event.posterchange](https://docs.videojs.com/player#event:posterchange)                   | -           | `onPosterChange`          |
| [event.languagechange](https://docs.videojs.com/player#event:languagechange)               | -           | `onLanguageChange`        |
| [event.fullscreenchange](https://docs.videojs.com/player#event:fullscreenchange)           | -           | `onFullscreenChange`      |
| [event.playbackrateschange](https://docs.videojs.com/player#event:playbackrateschange)     | -           | `onPlaybackRatesChange`   |
| [event.controlsdisabled](https://docs.videojs.com/player#event:controlsdisabled)           | -           | `onControlsDisabled`      |
| [event.controlsenabled](https://docs.videojs.com/player#event:controlsenabled)             | -           | `onControlsEnabled`       |
| [event.enterFullWindow](https://docs.videojs.com/player#event:enterFullWindow)             | -           | `onEnterFullWindow`       |
| [event.exitFullWindow](https://docs.videojs.com/player#event:exitFullWindow)               | -           | `onExitFullWindow`        |
| [event.enterpictureinpicture](https://docs.videojs.com/player#event:enterpictureinpicture) | -           | `onEnterPictureInPicture` |
| [event.leavepictureinpicture](https://docs.videojs.com/player#event:leavepictureinpicture) | -           | `onLeavePictureInPicture` |
| [event.sourceset](https://docs.videojs.com/player#event:sourceset)                         | -           | `onSourceSet`             |
| [event.texttrackchange](https://docs.videojs.com/player#event:texttrackchange)             | -           | `onTextTrackChange`       |
| [event.textdata](https://docs.videojs.com/player#event:textdata)                           | -           | `onTextData`              |
| [event.useractive](https://docs.videojs.com/player#event:useractive)                       | -           | `onUserActive`            |
| [event.userinactive](https://docs.videojs.com/player#event:userinactive)                   | -           | `onUserInactive`          |
| [event.usingcustomcontrols](https://docs.videojs.com/player#event:usingcustomcontrols)     | -           | `onUsingCustomControls`   |
| [event.usingnativecontrols](https://docs.videojs.com/player#event:usingnativecontrols)     | -           | `onUsingNativeControls`   |
| [event.dispose](https://docs.videojs.com/player#event:dispose)                             | -           | `onDispose`               |
| [event.beforepluginsetup](https://docs.videojs.com/player#event:beforepluginsetup)         | -           | `onBeforePluginSetup`     |
| [event.pluginsetup](https://docs.videojs.com/player#event:pluginsetup)                     | -           | `onPluginSetup`           |
| [event.componentresize](https://docs.videojs.com/player#event:componentresize)             | -           | `onComponentResize`       |
| [event.playerresize](https://docs.videojs.com/player#event:playerresize)                   | -           | `onPlayerResize`          |
| [event.tap](https://docs.videojs.com/player#event:tap)                                     | -           | `onTap`                   |
| [event.ready](https://docs.videojs.com/player#event:ready)                                 | -           | `onReady`                 |

Events emitted by the `@driift/player-react` component:

| Component Event | Description                                                                                                               | React           |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------ | :-------------- |
| mounted         | Fires when player component mounted. <br> `({ video: HTMLVideoElement, player: VideoJsPlayer, state: VideoPlayerState })` | `onMounted`     |
| unmounted       | Fires when player component unmounted. | `onUnmounted`   |
| stateChange     | Fires when player state changed. `(state: VideoPlayerState)` | `onStateChange` |

## Player State
The component maintains a fully responsive state object reflecting the internally state of the [Video.js] player. This allows you to consume the player state out-of-the-box, outside the player. You can get this object via the `mounted` or `stateChange` event.

| Key                  | Description                                                    | Value type                                                                         |
| :------------------- | :------------------------------------------------------------- | :--------------------------------------------------------------------------------- |
| src                  | The URL of the currently playing video.                        | `String`                                                                           |
| currentSrc           | ditto                                                          | `String`                                                                           |
| currentSource        | The currently playing video source object.                     | [`videojs.Tech.SourceObject`](https://docs.videojs.com/tech#~SourceObject)         |
| width                | Player's width.                                                | `Number`                                                                           |
| height               | Player's height.                                               | `Number`                                                                           |
| currentWidth         | ditto                                                          | `Number`                                                                           |
| currentHeight        | ditto                                                          | `Number`                                                                           |
| videoWidth           | Video element's width.                                         | `Number`                                                                           |
| videoHeight          | Video element's height.                                        | `Number`                                                                           |
| controls             | Whether player controls are enabled or not.                    | `Boolean`                                                                          |
| volume               | Player's volume.                                               | `Number`                                                                           |
| muted                | Is the player muted.                                           | `Boolean`                                                                          |
| poster               | Player poster image URL.                                       | `String`                                                                           |
| playing              | Is it playing now.                                             | `Boolean`                                                                          |
| waiting              | Is it waiting now.                                             | `Boolean`                                                                          |
| seeking              | A seek operation began.                                        | `Boolean`                                                                          |
| paused               | Playback has been paused.                                      | `Boolean`                                                                          |
| ended                | Playback has stopped because the end of the media was reached. | `Boolean`                                                                          |
| currentTime          | -                                                              | `Number`                                                                           |
| duration             | -                                                              | `Number`                                                                           |
| playbackRate         | -                                                              | `Number`                                                                           |
| playbackRates        | -                                                              | `Array<Number>`                                                                    |
| isFullscreen         | -                                                              | `Boolean`                                                                          |
| isInPictureInPicture | Whether it is picture-in-picture mode.                         | `Boolean`                                                                          |
| isLive               | Is the currently playing live video.                           | `Boolean`                                                                          |
| language             | Video.js current language.                                     | `String`                                                                           |
| userActive           | -                                                              | `Boolean`                                                                          |
| readyState           | -                                                              | [`videojs.ReadyState`](https://docs.videojs.com/player#readyState)                 |
| networkState         | -                                                              | [`videojs.NetworkState`](https://docs.videojs.com/player#networkState)             |
| error                | A Custom MediaError of Video.js.                               | [`MediaError \| Null`](https://docs.videojs.com/mediaerror)                        |
| buffered             | An object that contains ranges of time.                        | [`videojs.TimeRange`](https://docs.videojs.com/module-time-ranges.html#~TimeRange) |
| bufferedPercent      | -                                                              | `Number`                                                                           |
| played               | -                                                              | `TimeRanges`                                                                       |
| seekable             | -                                                              | `TimeRanges`                                                                       |
| textTracks           | -                                                              | [`videojs.TextTrackList`](https://docs.videojs.com/texttracklist)                  |
| audioTracks          | -                                                              | [`videojs.AudioTrackList`](https://docs.videojs.com/audiotracklist)                |
| videoTracks          | -                                                              | `videojs.VidioTrackList`                                                           |

## Questions & troubleshooting
For how-to questions or problems that may involve making changes to the code base, please use GitHub issues or reach out to the Driift engineering team directly.

## Contributing
Coming soon...

### Development
Soon I say!

### Testing
Like...sometime in 2023.

### CI-CD
It's happening, really!

### Publishing
Automatic via `semantic-release`...also coming soon.

[Driift]: <https://driift.live> "Driift Live Ltd"
[React]: <https://reactjs.org/>
[TypeScript]: <https://www.typescriptlang.org/>
[NPM]: <https://www.npmjs.com/>
[Video.js]: <https://videojs.com/>