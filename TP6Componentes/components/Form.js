// Formulario.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import BotonPersonalizado from './BotonPersonalizado';

export default function Formulario() {
  const [usuario, setUsuario] = useState('');
  const [celular, setCelular] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const enviar = () => {
    console.log({
      Usuario: usuario,
      Celular: celular,
      Correo: correo,
      Contraseña: password,
    });
  };

  return (
    <View style={styles.wrapper}>
      <Campo
        etiqueta="Nombre"
        valor={usuario}
        onChange={setUsuario}
        placeholder="Escribe tu nombre"
      />
      <Campo
        etiqueta="Teléfono"
        valor={celular}
        onChange={setCelular}
        placeholder="Escribe tu teléfono"
        keyboardType="phone-pad"
      />
      <Campo
        etiqueta="Email"
        valor={correo}
        onChange={setCorreo}
        placeholder="Escribe tu email"
        keyboardType="email-address"
      />
      <Campo
        etiqueta="Clave"
        valor={password}
        onChange={setPassword}
        placeholder="Escribe tu clave"
        secureTextEntry
      />

      <BotonPersonalizado variant="button" label="Enviar con Button" onPress={enviar} />
      <BotonPersonalizado variant="touchable" label="Enviar con TouchableOpacity" onPress={enviar} />
      <BotonPersonalizado variant="pressable" label="Enviar con Pressable" onPress={enviar} />
    </View>
  );
}

function Campo({ etiqueta, valor, onChange, ...props }) {
  return (
    <>
      <Text style={styles.label}>{etiqueta}:</Text>
      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={onChange}
        {...props}
      />
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fafafa',
  },
  label: {
    marginVertical: 6,
    fontSize: 15,
    color: '#444',
  },
  input: {
    height: 45,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#999',
    paddingHorizontal: 14,
    marginBottom: 18,
  },
});