import React from 'react';

const PokemonDetail = (props) => {
  const getDetails = (url) => {
    const abilities = [];
    fetch(url)
    .then((res) => res.json())
    // .then(res => {
    //   this.setState({abilities: abilities});
    // })
    // const abilities.map(ability){
    //   return abilities.push(ability)
    // }

  }

  if(!props.pokemon) return <p>Loading...</p>;
  return (
    <div>
    <h3>
      {props.pokemon.name}
    </h3>
      {getDetails(props.pokemon.url)}
    </div>
  )
}

export default PokemonDetail;
