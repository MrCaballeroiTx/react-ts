const reducer = (state: object = {}, action: any): object => {
  switch (action.type) {
    case 'GET_POKEMON':
      return { ...state, loading: true };
    case 'POKEMON_RECEIVED':
      return { ...state, pokemon: action.json, loading:false };
    default:
      return state;
  }
};

export default reducer;