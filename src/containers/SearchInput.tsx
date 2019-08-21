import React, { ChangeEvent } from 'react';

interface Props {
  input: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: React.FC<Props> = (props: Props) => {
  return (
    <input type="text" name="searchInput" onChange={props.onChange} value={props.input}/>
  );
}

export default SearchInput;
