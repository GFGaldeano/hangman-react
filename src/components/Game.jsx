import React, { useState, useEffect } from "react";
import palabras from "../data/words";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";
import HangmanFigure from "./HangmanFigure";

const Game = () => {
  const [palabra, setPalabra] = useState("");
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [errores, setErrores] = useState(0);

  useEffect(() => {
    const random = palabras[Math.floor(Math.random() * palabras.length)];
    setPalabra(random);
  }, []);

  const manejarLetra = (letra) => {
    if (!letrasUsadas.includes(letra)) {
      setLetrasUsadas((prev) => [...prev, letra]);

      if (!palabra.includes(letra)) {
        setErrores((prev) => prev + 1);
      }
    }
  };

  const reiniciarJuego = () => {
    const nueva = palabras[Math.floor(Math.random() * palabras.length)];
    setPalabra(nueva);
    setLetrasUsadas([]);
    setErrores(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
      <h1 className="text-4xl font-bold mb-4">Juego del Ahorcado</h1>
      <HangmanFigure errores={errores} />
      <WordDisplay palabra={palabra} letrasUsadas={letrasUsadas} />
      <Keyboard manejarLetra={manejarLetra} letrasUsadas={letrasUsadas} />
      <button onClick={reiniciarJuego} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
        Reiniciar
      </button>
    </div>
  );
};

export default Game;
