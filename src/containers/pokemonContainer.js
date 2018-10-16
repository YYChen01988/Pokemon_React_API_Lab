import React from 'react';
import PokemonSelector from '../components/PokemonSelector';
import PokemonDetail from '../components/PokemonDetail';


class PokemonContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemons:[],
      currentPokemon: null
    };
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }
  componentDidMount(){
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=949'
    fetch(url)
    .then((res) => res.json())
    .then((pokemons) => {
      this.setState({pokemons: pokemons});
    })

  }

  handlePokemonSelected(index){
    const pokemon = this.state.pokemons.results[index];
    this.setState({currentPokemon: pokemon});
  }

  render(){
    return (
      <div>
        <h2> Pokemon World</h2>
        <PokemonSelector pokemons = {this.state.pokemons} onPokemonSelected={this.handlePokemonSelected}/>
        <PokemonDetail pokemon={this.state.currentPokemon}/>
      </div>
    );
  }



}

export default PokemonContainer;
