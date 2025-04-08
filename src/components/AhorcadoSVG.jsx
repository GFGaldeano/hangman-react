import React from "react";

const AhorcadoSVG = ({ errores, estadoJuego }) => {
  const color = estadoJuego === "perdido" ? "red" : "black";

  return (
    <svg height="250" width="200" className="my-6">
      {/* Estructura */}
      <line x1="10" y1="240" x2="150" y2="240" stroke="#333" strokeWidth="4" />
      <line x1="50" y1="240" x2="50" y2="20" stroke="#333" strokeWidth="4" />
      <line x1="50" y1="20" x2="130" y2="20" stroke="#333" strokeWidth="4" />
      <line x1="130" y1="20" x2="130" y2="50" stroke="#333" strokeWidth="4" />

      {/* Cabeza */}
      <circle
        cx="130"
        cy="70"
        r="20"
        className={`transition-all duration-500 ${
          errores > 0 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
        stroke={color}
        strokeWidth="4"
        fill="none"
      />

      {/* Cuerpo */}
      <line
        x1="130"
        y1="90"
        x2="130"
        y2="150"
        className={`transition-all duration-500 ${
          errores > 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
        stroke={color}
        strokeWidth="4"
      />

      {/* Brazo izquierdo */}
      <line
        x1="130"
        y1="100"
        x2="110"
        y2="130"
        className={`transition-all duration-500 ${
          errores > 2 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
        stroke={color}
        strokeWidth="4"
      />

      {/* Brazo derecho */}
      <line
        x1="130"
        y1="100"
        x2="150"
        y2="130"
        className={`transition-all duration-500 ${
          errores > 3 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
        stroke={color}
        strokeWidth="4"
      />

      {/* Pierna izquierda */}
      <line
        x1="130"
        y1="150"
        x2="110"
        y2="180"
        className={`transition-all duration-500 ${
          errores > 4 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
        stroke={color}
        strokeWidth="4"
      />

      {/* Pierna derecha */}
      <line
        x1="130"
        y1="150"
        x2="150"
        y2="180"
        className={`transition-all duration-500 ${
          errores > 5 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
        stroke={color}
        strokeWidth="4"
      />
    </svg>
  );
};

export default AhorcadoSVG;
