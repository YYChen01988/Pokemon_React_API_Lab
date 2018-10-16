import React from 'react';

const PokemonDetail = (props) => {
  if(!props.pokemon) return <p>Loading...</p>;

  return (
    <h3>
      {props.pokemon.name}
    </h3>
  )
}

export default PokemonDetail;
