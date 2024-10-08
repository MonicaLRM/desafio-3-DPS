import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button, FlatList, StyleSheet } from 'react-native';

const Mostrar = ({ navigation }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await fetch('https://66f726ffb5d85f31a34220f7.mockapi.io/api/v1/books');
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };

  const validarCierre = () => {
    navigation.navigate('Ingreso');
  };

  const renderItem = ({ item }) => (
    <View style={estilos.contenedor}>
      <View style={estilos.tarjeta}>
        <View style={estilos.detallesPelicula}>
          {item.listBooks.map((book) => (
            <View key={book.id}>
              <Text style={estilos.tituloPelicula}>{book.title}</Text>
              <Image source={{ uri: book.image }} style={estilos.imagenPelicula} />
              <Text style={estilos.TextNombre}>{book.author}</Text>
              <Text style={estilos.TextNombre}>{book.year}</Text>
              <Text style={estilos.TextNombre}>{book.description}</Text>
            </View>
          ))}
          
        </View>
      </View>   
     
      </View>
  );

  return (
    <View style={estilos.container}>
      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} 
        contentContainerStyle={{ paddingBottom: 20 }} 
      />
      <Button title="Cerrar Sesión" onPress={validarCierre} />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tarjeta: {
    flexDirection: 'row',
    padding: 15,
    margin: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  imagenPelicula: {
    width: 80,
    height: 130,
    borderRadius: 10,
  },
  detallesPelicula: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  tituloPelicula: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  TextNombre: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Mostrar;
