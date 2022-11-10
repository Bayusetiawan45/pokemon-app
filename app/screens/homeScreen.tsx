import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';

import Card from '../components/card';
import Layout from '../layouts';
import { usePokemonService } from '../services/pokemon';

const HomeScreen = () => {
  const { getPokemon, pokemon, getPokemonDetail, pokemonDetail } = usePokemonService()

  const uri = pokemon.find((item: any) => item.url)

  console.log('uri', uri);

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <Layout>
      <FlatList data={pokemon} keyExtractor={pokemon => pokemon.url} renderItem={({ item }) => (<Card {...item} />)} />
    </Layout>
  );
};

export default HomeScreen;