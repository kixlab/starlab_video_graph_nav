import React, { useState, useEffect, useRef } from "react"
import './InstructionContainer.css';

import Instruction from "./Instruction";
// 6CJryveLzvI
const instructions_video1 = [
  {id: 1, script: "Yeah we want to go ahead and fill up the pot of water.", videoTime: 60}, 
  {id: 2, script: "Then I'm going to go ahead and put it on high for the temperature and I am going to just let this sit until the water starts to boil.\n", videoTime: 76}, 
  {id: 3, script: "While I'm waiting for my water to boil I'm going to go ahead and take out my eggs.", videoTime: 84}, 
  {id: 4, script: "It was we're going to turn this on like on a low heat.\n I usually put it like between like a three and a two so just like a low heat.", videoTime: 96}, 
  {id: 5, script: "So once you have your eggs in there you want to go ahead and start the timer. I always do six and a half minutes.", videoTime: 125}, 
  {id: 6, script: "I also eat my soft boiled eggs with toast so I like to get this ready as well.\n I don't start the toaster until after the eggs are done so I just have my toast.", videoTime: 173}, 
  {id: 7, script: "I went ahead and I turned it off the stove anyways and I want to go ahead and take these out.\n I didn't think about how I'm going to do this while filming but I'm going to take these out real quick.", videoTime: 198}, 
  {id: 8, script: "I'm just going to set it on my plate and then crack them open.", videoTime: 208}, 
  {id: 9, script: "They are going to be hot so I put them in a little bit under the water to kind of cool it down.", videoTime: 211}, {id: 10, script: "And I am just going to crack it open and then I spoon it out.\n You wanna move fast because you don't want you know your yoke too hard and cause that's like the best part about soft boiled eggs is that you have yummy yummy runny oak.\n So I'm just going to go in and literally like if you can see here I'm a spooning the egg out from the shell and these came out perfect.", videoTime: 216},
  {id: 11, script: "So now I want to season them up so I'm just going to add a little bit of the lemon pepper and then we're going to add just a tiny bit of salt.", videoTime: 267},
  {id: 12, script: "And then it's like ooh too much and then just a little bit of pepper and mix it up.", videoTime: 286}];

// Rcsy2HRuiyA
const instructions_video2 = [
  { id: 1, script: "So first you are going to be putting the desired amount of glue into your bowl and this is a basic slime recipe.", videoTime: 61,},
  { id: 2, script: "You're going to add in some of your food coloring or lotion and this step is totally optional you can choose to skip it or not.", videoTime: 76,},
  { id: 3, script: "And once you've done that then you are going to add in some of your activated and once again but in more than you usually would be to over activate it.", videoTime: 81,},
  { id: 4, script: "And now I'm going to take your bull again and fill it up with water. So I now have a bowl of water you need about that much. You need like a enough amount of water so your whole diaper in.", videoTime: 112,},
  { id: 5, script: "So I'm going to open my diaper. So here it is you're just going to go ahead and open it up.", videoTime: 125,},
  { id: 6, script: "So now I'm just going to pop it into your water. And I guess I'm going to like I'm not sure what I'm going to do but just pop it into your water and then make sure like all the areas are soaked and everything and just leave it there to soak for a bit.", videoTime: 144,},
  { id: 7, script: "So take like this upper they're like layer this Kind of hard to show you guys. Take this like upper area and make a sniff in it and start cutting.", videoTime: 174,},
  { id: 8, script: "It's kind of open like. So this three part you want to get rid of. I don't need this part just keep on cutting it open until you see all this stuff.", videoTime: 191,},
  { id: 9, script: "So I'm going to go ahead and just pump it all in falling out into my bowl.", videoTime: 222,},
  { id: 10, script: "So I'm going to make a bit more slim off camera just because I don't think I had enough for the amount of you know fix now I got.", videoTime: 235,},
  { id: 11, script: "You just want like the regular. I don't even know what this stuff is but yeah so just sort it out and then I'm gonna make a bit more slime. And then we're gonna put it in here.", videoTime: 253,},
  { id: 12, script: "Anyway so now it's the moment of truth so I'm going to go ahead and I guess just pop it in there. Ok so now I'm just going to mix it around try to make it all stick or feels so weird.", videoTime: 274,},
  { id: 13, script: "So just go ahead and mix it in and I'll be back.", videoTime: 301,},
  { id: 14, script: "Wanna see me in because you know the diaper stuff did have a bit of water in it. So just add some activator. And also if you are experiencing some like fallout as I am right now like some of the deeper stuff is falling out. Just add a bit more slime into it and then it's just fix it.", videoTime: 332,},
]

function InstructionContainer ({
  video }
  ) {
  const [currentSelect, setSelect] = useState (null);
  const instructionRef = useRef ();

  const handleClick = (item) => {
    setSelect(item.id);
  };

  useEffect(() => {
    instructionRef.current?.scrollIntoView ({
      behavior: "smooth",
      block: "end"
    });
  }, [currentSelect])

  return (
    <div className="instruction_container">
      {instructions_video2.map ((item) => (
        <Instruction
          key={item.id}
          video={video}
          videoTime={item.videoTime}
          id={item.id}
          script={item.script}
          selected={currentSelect && currentSelect === item.id}
          onClick={() => handleClick(item)}
          ref={currentSelect === item.id ? instructionRef : null}
        />
        ))
      }
    </div>
    );
  };
  
  export default InstructionContainer;