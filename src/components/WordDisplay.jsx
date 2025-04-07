import React from "react";

const WordDisplay = ({ palabra, letrasUsadas }) => {
  return (
    <div className="flex justify-center flex-wrap gap-4 my-8 text-6xl font-bold">
      {palabra.split("").map((letra, index) => (
        <span
          key={index}
          className={`border-b-4 border-black w-20 h-24 flex items-center justify-center transition-all duration-300 ${
            letrasUsadas.includes(letra) ? "text-black" : "text-transparent"
          }`}
        >
          {letrasUsadas.includes(letra) ? letra.toUpperCase() : ""}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;