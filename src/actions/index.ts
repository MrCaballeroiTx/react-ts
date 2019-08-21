export const getPokemon = (data: string): object => ({
  type: 'GET_POKEMON',
  payload: data
});