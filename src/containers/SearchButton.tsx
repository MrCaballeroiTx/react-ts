import React, { MouseEvent } from 'react';

interface ToggleProps {
  handleSearch: (event: MouseEvent<HTMLButtonElement>) => void
}

const SearchButton: React.FC<ToggleProps> = (props: ToggleProps) => {
  return (
    <button onClick={props.handleSearch} className="search-button">
      Search
    </button>
  );
}

export default SearchButton;
