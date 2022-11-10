import axios, { Axios } from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { PokemonService } from "../config/axios.config";

interface PokemonServiceContext {
  getPokemon(): void
  pokemon: any
  getPokemonDetail(url: string): void
  pokemonDetail: any
}

interface PokemonServiceProviderProps {
  children: ReactNode
}

const PokemonServiceContext = createContext({} as PokemonServiceContext)

export const usePokemonService = () => useContext(PokemonServiceContext)

export default function PokemonServiceProvider({ children }: PokemonServiceProviderProps) {
  const [pokemon, setPokemon] = useState([])
  const [pokemonDetail, setPokemonDetail] = useState({})
  
  const getPokemon = async () => {
    try {
      const results = await PokemonService.get('pokemon')
      setPokemon(results.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const getPokemonDetail = async (url: string) => {
    try {
      const results = await axios.get(url)
      setPokemonDetail(results.data)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <PokemonServiceContext.Provider value={{ getPokemon, pokemon, getPokemonDetail, pokemonDetail }}>
      {children}
    </PokemonServiceContext.Provider>
  )
}