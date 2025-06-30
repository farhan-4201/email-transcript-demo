import React, { useState, useEffect } from "react";

const TextChanger = () => {
  const textArray = [
    "Analyzing email classification",

    "Compiling and summarizing results",
  ];

  const [currentText, setCurrentText] = useState(textArray[0]);
  const [isLastText, setIsLastText] = useState(false);

  useEffect(() => {
    if (isLastText) return;

    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = textArray.indexOf(prevText);
        if (currentIndex === textArray.length - 1) {
          setIsLastText(true);
          return textArray[currentIndex];
        }
        return textArray[(currentIndex + 1) % textArray.length];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isLastText]);

  return (
    <span className="flex items-center gap-2">
      {currentText}
      <div className="typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </span>
  );
};

export default TextChanger;
