import React, { useState, useEffect } from "react";
import pokemons from "./pokemons";

export default function PokeNameValidator() {
  /**
   * Component logic goes here
   */
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const [randomName, setRandomName] = useState(
    pokemons[getRandomInt(pokemons.length)]
  );
  const [pokename, setPokename] = useState("");

  const handleKeyPress = (event) => {
    setPokename(event.target.value);
  };

  useEffect(() => {
    function handlekeydownEvent(event) {
      if (randomName === pokename) {
        alert("Correct! Play again?");
        setPokename("");
        setRandomName(pokemons[getRandomInt(pokemons.length)]);
      }
    }

    document.addEventListener("keyup", handlekeydownEvent);

    return () => {
      document.removeEventListener("keyup", handlekeydownEvent);
    };
  }, [randomName, pokename]);

  return (
    <div className="app">
      <h2>Mini Challenge 4: Poke Name Validator</h2>
      <p>
        Pokémon name:&nbsp;
        <strong>{randomName}</strong>
      </p>
      <p className="secondary">Type the Pokémon name correctly:</p>
      <input
        type="text"
        placeholder="Enter the Pokémon name"
        value={pokename}
        onChange={handleKeyPress}
      />
    </div>
  );
}
