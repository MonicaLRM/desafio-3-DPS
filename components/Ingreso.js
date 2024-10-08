import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Ingreso({ navigation }) {
  const [contra, setContra] = useState('');
  const [email, setEmail] = useState('');
  const [ingreso, setIngreso] = useState(false);
  const [mssgError, setMssgError] = useState('');

  const validarEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validarIngreso = async () => {
    setMssgError(''); // Reinicia el mensaje de error al intentar ingresar

    if (email === "") {
      setMssgError("Ingresar correo electrónico.");
      return;
    }
    if (!validarEmail(email)) {
      setMssgError('Ingresar correo electrónico válido.');
      return;
    }
    if (contra === "") {
      setMssgError("Ingresar contraseña.");
      return;
    }

    try {
      const response = await fetch('https://66f726ffb5d85f31a34220f7.mockapi.io/api/v1/users');
      const data = await response.json();

      const usuario = data.find(user => user.email === email && user.password === contra);

      if (usuario) {
        setIngreso(true);
        navigation.navigate('Mostrar');
      } else {
        setMssgError('Email o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setMssgError('Error al conectar con el servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        value={contra}
        onChangeText={setContra}
        style={styles.input}
        secureTextEntry
      />
      {mssgError ? <Text style={styles.error}>{mssgError}</Text> : null}
      <Button title="Iniciar Sesión" onPress={validarIngreso} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#820F0F',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

