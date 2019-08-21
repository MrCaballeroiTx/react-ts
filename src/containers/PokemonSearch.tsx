import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux';

import { getPokemon } from '../actions';

import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

import PokemonReducer from '../interfaces/PokemonReducer.interface';

interface Props {
  getPokemon: any
}

interface SearchState {
  searchInput: string
}

export class PokemonSearch extends Component<Props, SearchState> {

  state = {
    searchInput: ''
  }

  onSearchClick = (): void => {
    this.props.getPokemon(this.state.searchInput);
  }

  onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  render() {
    return (
      <div>
        <SearchInput input={this.state.searchInput} onChange={this.onChange}/>
        <SearchButton handleSearch={this.onSearchClick}/>
      </div>
    )
  }
}

const mapDispatchToProps = ({
  getPokemon
});

const mapStateToProps = (state: PokemonReducer) => ({
  pokemon: state.pokemon
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSearch);
