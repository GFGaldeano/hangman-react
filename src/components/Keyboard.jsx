import React from "react";

const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");

const Keyboard = ({ manejarLetra, letrasUsadas }) => {
  return (
    <div className="grid grid-cols-9 gap-2 mt-4">
      {letras.map((letra) => (
        <button
          key={letra}
          onClick={() => manejarLetra(letra.toLowerCase())}
          className={`px-2 py-1 rounded font-bold ${
            letrasUsadas.includes(letra.toLowerCase())
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          disabled={letrasUsadas.includes(letra.toLowerCase())}
        >
          {letra}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
