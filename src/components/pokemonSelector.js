import React from 'react';

const PokemonSelector = (props) => {
  console.log(props.pokemons);
  function handleChange(event){
    props.onPokemonSelected(event.target.value);
  }

  if(!props.pokemons.results) return null;
  const options = props.pokemons.results.map((pokemon, index) => {
    return <option key={index} value={index}> {pokemon.name}</option>
  })

  return (
    <select id="pokemon-selector" defaultValue="default" onChange={handleChange}>
      <option disable="true" value ="default">Choose a pokemon...</option>
        {options}
    </select>
  )

}

export default PokemonSelector;
