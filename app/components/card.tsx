import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { usePokemonService } from '../services/pokemon';
import colors from '../utilities/colors';

const Card = ({ name, url }: any) => {
  // const { getPokemonDetail, pokemonDetail } = usePokemonService()

  // useEffect(() => {
  //   getPokemonDetail(url)
  // }, [])

  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <Text>{name}</Text>
        {/* <Image source={{ uri: pokemonDetail.sprites.other.home.front_default }} style={styles.image} /> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 200,
    borderRadius: 25,
    backgroundColor: colors.white,
    marginVertical: 5,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  image: {
    width: 200,
    height: 200,
  }
})

export default Card;