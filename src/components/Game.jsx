import React, { useState } from "react";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";
import HangmanFigure from "./HangmanFigure";
import AhorcadoSVG from "./AhorcadoSVG";
import { words } from "../data/words";

const Game = () => {
  const [palabra, setPalabra] = useState(() => words[Math.floor(Math.random() * words.length)]);
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [errores, setErrores] = useState(0);
  const [estadoJuego, setEstadoJuego] = useState("jugando");

  const seleccionarPalabra = () => {
    const palabraAleatoria = words[Math.floor(Math.random() * words.length)];
    setPalabra(palabraAleatoria);
    setLetrasUsadas([]);
    setErrores(0);
    setEstadoJuego("jugando");
  };

  const manejarLetra = (letra) => {
    if (letrasUsadas.includes(letra) || estadoJuego !== "jugando") return;

    setLetrasUsadas([...letrasUsadas, letra]);

    if (!palabra.includes(letra)) {
      setErrores(errores + 1);
    }

    if (errores + 1 >= 6) {
      setEstadoJuego("perdido");
    }

    const palabraAdivinada = palabra
      .split("")
      .every((letraPalabra) => letrasUsadas.includes(letraPalabra));

    if (palabraAdivinada) {
      setEstadoJuego("ganado");
    }
  };

  const reiniciarJuego = () => {
    seleccionarPalabra();
  };

  React.useEffect(() => {
    seleccionarPalabra();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold my-6">Juego del Ahorcado</h1>
  
      {/* Figura del ahorcado */}
      <div className={`transition-all duration-300 ${estadoJuego === "perdido" ? "animate-shake" : ""} mb-8`}>
        <AhorcadoSVG errores={errores} estadoJuego={estadoJuego} />
      </div>
  
      {/* Palabra a adivinar */}
      <div className="mb-8">
        <WordDisplay palabra={palabra} letrasUsadas={letrasUsadas} />
      </div>
  
      {/* Contador de errores */}
      <div className="text-xl mb-8">Errores: {errores}</div>
  
      {/* Teclado */}
      <div className="mb-8">
        <Keyboard manejarLetra={manejarLetra} letrasUsadas={letrasUsadas} />
      </div>
  
      {/* Mensajes finales */}
      {estadoJuego === "perdido" && (
        <div className="mb-6 text-2xl text-red-600">
          ¡Perdiste! La palabra era <span className="uppercase">{palabra}</span>.
        </div>
      )}
      {estadoJuego === "ganado" && (
        <div className="mb-6 text-2xl text-green-600">¡Ganaste!</div>
      )}
  
      {/* Botón de reinicio */}
      <div className="mt-4">
        <button
          onClick={reiniciarJuego}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
  
  
};

export default Game;
