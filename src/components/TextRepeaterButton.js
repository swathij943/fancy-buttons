import React, { useState } from "react";

function TextRepeaterButton() {
  const [repetitions, setRepetitions] = useState(1);
  const textArray = [];

  const handleClick = (amount) => {
    setRepetitions(repetitions + amount);

 
  }

  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>I like this text</span>);
  }

  return (
    <button
     className="TextRepeaterButton"
     onClick={() => handleClick(1)}
    >
      {textArray}
    </button>
  );

}

export default TextRepeaterButton;