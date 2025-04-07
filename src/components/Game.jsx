import React, { useState } from "react";
import WordDisplay from "./WordDisplay"; // Componente para mostrar las letras
import Keyboard from "./Keyboard"; // Componente para las teclas
import HangmanFigure from "./HangmanFigure"; // Componente para mostrar la figura del ahorcado
import AhorcadoSVG from "./AhorcadoSVG"; // Componente SVG de la figura

import { words } from "../data/words"; // Suponiendo que tienes un archivo de palabras

const Game = () => {
  // Estado para la palabra actual, errores, letras usadas y estado del juego
  const [palabra, setPalabra] = useState(""); // La palabra que el jugador debe adivinar
  const [letrasUsadas, setLetrasUsadas] = useState([]); // Letras que ya fueron adivinadas
  const [errores, setErrores] = useState(0); // Número de errores cometidos
  const [estadoJuego, setEstadoJuego] = useState("jugando"); // Puede ser "jugando", "ganado" o "perdido"

  // Función para seleccionar una nueva palabra aleatoria
  const seleccionarPalabra = () => {
    const palabraAleatoria = words[Math.floor(Math.random() * words.length)];
    setPalabra(palabraAleatoria);
    setLetrasUsadas([]); // Reiniciar las letras usadas
    setErrores(0); // Reiniciar los errores
    setEstadoJuego("jugando"); // Reiniciar el estado del juego
  };

  // Función para manejar el clic en una letra del teclado
  const manejarLetra = (letra) => {
    if (letrasUsadas.includes(letra) || estadoJuego !== "jugando") {
      return; // No hacer nada si la letra ya fue usada o si el juego ya terminó
    }

    setLetrasUsadas([...letrasUsadas, letra]);

    if (!palabra.includes(letra)) {
      setErrores(errores + 1);
    }

    if (errores + 1 >= 6) { // Si ya se alcanzaron los 6 errores, el juego se pierde
      setEstadoJuego("perdido");
    }

    // Verificar si el jugador ha ganado
    const palabraAdivinada = palabra.split("").every((letraPalabra) =>
      letrasUsadas.includes(letraPalabra)
    );

    if (palabraAdivinada) {
      setEstadoJuego("ganado");
    }
  };

  // Iniciar un nuevo juego al presionar el botón
  const reiniciarJuego = () => {
    seleccionarPalabra();
  };

  // Primero seleccionamos una palabra cuando se carga el juego
  React.useEffect(() => {
    seleccionarPalabra();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Título del juego */}
      <h1 className="text-4xl font-bold my-6">Juego del Ahorcado</h1>

      {/* Mostrar la figura del ahorcado */}
      <AhorcadoSVG errores={errores} />

      {/* Mostrar la palabra, con las letras adivinadas */}
      <WordDisplay palabra={palabra} letrasUsadas={letrasUsadas} />

      {/* Mostrar las letras usadas (errores) */}
      <div className="my-4 text-xl">Errores: {errores}</div>

      {/* Mostrar el teclado */}
      <Keyboard manejarLetra={manejarLetra} letrasUsadas={letrasUsadas} />

      {/* Mensaje de victoria o derrota */}
      {estadoJuego === "perdido" && (
        <div className="mt-6 text-2xl text-red-600">¡Perdiste! La palabra era {palabra}.</div>
      )}
      {estadoJuego === "ganado" && (
        <div className="mt-6 text-2xl text-green-600">¡Ganaste!</div>
      )}

      {/* Botón para reiniciar el juego */}
      <button
        onClick={reiniciarJuego}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Reiniciar
      </button>
    </div>
  );
};

export default Game;
