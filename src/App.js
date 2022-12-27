import React, { useState, useEffect, useCallback } from 'react'
import YouTube from 'react-youtube';
import './App.css';

import { labelInfo } from "./labelInfo";

// components
import InstructionContainer from './components/InstructionContainer';
import Timeline from './components/Timeline';

function App() {
  const [video, setVideo] = useState (null);
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState (false);

  // Videos:
  // Egg: 6CJryveLzvI
  // Slime: Rcsy2HRuiyA
  const [videoId, setVideoId] = useState ('Rcsy2HRuiyA');
  const [videoTime, setVideoTime] = useState (0);
  const [duration, setDuration] = useState (0);

  const [selectedLabels, setSelectedLabels] = useState (["instruction"]);
  const [script, setScript] = useState([]);
  const [scriptLoaded, setScriptLoaded] = useState (false);
  const [filteredScript, setFilteredScript] = useState ([]);
  const [processedScript, setProcessedScript] = useState([]);

  const [selectedIndex, setSelectedIndex] = useState (-1);

  const getScript=()=>{
    // fetch(process.env.PUBLIC_URL + `/data/6CJryveLzvI.json`)
    // .then(function (response){
    //   return response.json();
    // })
    // .then(function (jsonFile) {
    //   setScript (jsonFile);
    //   setScriptLoaded (true);
    //   // filter
    //   processScript (jsonFile);
    // });
    var jsonFile = require('./script/Rcsy2HRuiyA.json');
    setScript (jsonFile);
    setScriptLoaded (true);
    // filter
    processScript (jsonFile);
  };

  useEffect(()=>{
    getScript();
  }, [videoId]);

  // filter script
  const processScript = (inputScript=[]) => {
    const useScript = inputScript.length == 0 ? script : inputScript;
    const processed = useScript.map (item => {
        if (selectedLabels.includes (labelInfo[item.low_label])) item['use'] = true;
        else item['use'] = true; // all labels are stil clickable
        return item;
    });
    const filtered = processed.filter (item => item.use == true);
    const newIndex = filtered.length > 0 ? filtered[0].index : -1;

    setProcessedScript (processed);
    setFilteredScript (filtered);
    setSelectedIndex (newIndex);
    // console.log(this.processedScript);
  }

  useEffect(() => {
    if (script.length > 0) {
        // filterScript();
        processScript();
    }
  }, [videoId, selectedLabels])

  // video related
  const onGetCurrentTime = useCallback(() => {
    if (video === null) return 0;
    const currentTime = video.getCurrentTime().toFixed(3);
    return currentTime;
  }, [video]);

  const onReady = (event) => {
    setVideo (event.target);
    setDuration (onGetDuration());
  };

  const onPause = () => {
    setIsPlaying (false);
  }

  const onPlay = () => {
    if (!started) {
      setStarted(true);
      const interval = setInterval(() => {
        const time = onGetCurrentTime();
        setVideoTime (time);
      }, 10);
      return () => {
        clearInterval(interval);
      };
    };
  };

  const onGetDuration = () => {
    if (video === null) return 0;
    return video.getDuration();
  }

  const opts = {
  height: '400',
  width: '650',
  playerVars: {
      autoplay: 0,
      controls: 1,
      },
  };

  return (
    <div className="App">
      <div className='body_wrapper'>
        <div className="video_wrapper">
          <YouTube 
              className='player'
              videoId={videoId} 
              opts={opts} 
              onReady={onReady}
              onPlay={onPlay}
              onPause={onPause}
          />
          <Timeline
            video={video}
            videoId={videoId}
            videoTime={videoTime}
            duration={duration}
            setVideoTime={setVideoTime}
            //colorPalette={colorPalette}
            //logData={logData}
            //showLabelInfo={showLabelInfo}
            //hideLabelInfo={hideLabelInfo}
            selectedLabels={selectedLabels}
            processedScript={processedScript}
            setSelectedIndex={setSelectedIndex}
          />
        </div>
        <div className="graph_wrapper">
          <InstructionContainer video={video} />
        </div>
      </div>
    </div>
  );
}

export default App;
