import React, { useState, useEffect, useRef } from "react"
import './Instruction.css';

import SceneGraph from './SceneGraph.js';

function Instruction({
  video,
  videoTime,
  id,
  script,
  selected,
  onClick,
}) {
    const handleSentenceClick = (index) => {
      onClick();
      video.seekTo(index);
  };

    return (
      <div className="instruction_wrapper">
        <div className="script" style={{backgroundColor: selected ? '#F5A7A6' : '', border: selected ? '' : '7px solid #F5A7A6'}} onClick={() => handleSentenceClick(videoTime)}> 
          <strong>Instruction {id}: </strong>
          {script}
        </div>      
        <SceneGraph id={id}/>
      </div>
    );
    
};

export default Instruction;