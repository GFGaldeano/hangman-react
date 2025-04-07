import React from "react";

const partes = [
  "Cabeza", "Cuerpo", "Brazo izquierdo", "Brazo derecho", "Pierna izquierda", "Pierna derecha"
];

const HangmanFigure = ({ errores }) => {
  return (
    <div className="flex flex-col items-center mt-4 text-red-600 font-semibold">
      <p>Errores: {errores}</p>
      <ul>
        {partes.slice(0, errores).map((parte, index) => (
          <li key={index}>{parte}</li>
        ))}
      </ul>
    </div>
  );
};

export default HangmanFigure;
