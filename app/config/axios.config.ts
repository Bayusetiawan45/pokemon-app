import axios from 'axios'

export const PokemonService = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})
