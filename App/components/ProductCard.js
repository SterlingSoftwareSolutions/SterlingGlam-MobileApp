// ProductCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} />

      <Text style={styles.name}>{product.name}</Text>
      {product.oldPrice && (
        <Text style={styles.oldPrice}>{product.oldPrice}</Text>
      )}
      <Text style={styles.newPrice}>{product.newPrice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 5,
    borderRadius: 8,
    backgroundColor: '#fff',
    margin: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '90%',
    height: 83,
    borderRadius: 8,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  oldPrice: {
    fontSize: 12,
    color: 'red',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontSize: 12,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default ProductCard;
