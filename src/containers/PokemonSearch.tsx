import React, { Component, ChangeEvent } from 'react'
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

import SearchState from '../interfaces/SearchState.interface';

export class PokemonSearch extends Component<{}, SearchState> {

  state = {
    searchInput: ''
  }

  onSearchClick = (): void => {
    
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

export default PokemonSearch
