import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

interface Param {
  type: string,
  payload: string
}

function* fetchPokemon(param: Param) {
  let res = yield axios.get(`https://pokeapi.co/api/v2/pokemon/${param.payload}`)
    .then(res => res);
  if (res.status === 200) {
    yield put({ type: 'POKEMON_RECEIVED', json: res.data });
  }
}

function* actionWatcher() {
  yield takeLatest('GET_POKEMON', fetchPokemon);
}

export default function* rootSaga() {
  yield all([
    actionWatcher()
  ]);
}