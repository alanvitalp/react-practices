import React, { useState } from 'react';
import Video from '../Video';
import Playlist from './Playlist';
import { ThemeProvider } from 'styled-components';
import StyledWbnPlayer from '../../styles/StyledWbnPlayer';

const theme = {
  bgcolor: "#353535",
  bgcoloritem: "#414141",
  bgcolorItemActive: "#405c63",
  bgcolorPlayed: "#526d4e",
  border: "none",
  borderPlayed: "none",
  color: "#fff",
}

const themeLight = {
  bgcolor: "#fff",
  bgcoloritem: "#fff",
  bgcolorItemActive: "#80a7b1",
  bgcolorPlayed: "#7d9979",
  border: "1px solid #353535",
  borderPlayed: "none",
  color: "#353535",
}


const WbnPlayer = ({  }) => {
  const [isDark, setIsDark] = useState(false);

  const nightModeCallback = () => {

  }

  const endCallback = () => {

  }

  const progressCallback = () => {

  }
  
  return (
    <ThemeProvider theme={isDark ? theme : themeLight}>
      {state.videos !== null 
      ? (
        <StyledWbnPlayer>
        <Video
          active={state.activeVideo}
          autoplay={state.autoplay}
          endCallback={endCallback}
          progressCallback={progressCallback}
        />
        <Playlist
          videos={state.videos}
          active={state.activeVideo}
          nightModeCallback={nightModeCallback}
          nightMode={isDark}
        /> 
      </StyledWbnPlayer>
      ) : (
        null
      )}
    </ThemeProvider>
   
  )
}

export default WbnPlayer;