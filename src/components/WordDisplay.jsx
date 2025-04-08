const WordDisplay = ({ palabra, letrasUsadas }) => {
    return (
      <div className="flex justify-center gap-4 text-3xl my-6">
        {palabra.split("").map((letra, index) => (
          <span key={index} className="w-6 text-center">
            {letrasUsadas.includes(letra) ? letra.toUpperCase() : "_"}
          </span>
        ))}
      </div>
    );
  };
  
  export default WordDisplay;
  