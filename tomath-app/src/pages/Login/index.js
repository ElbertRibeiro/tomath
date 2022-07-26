import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image, ActivityIndicator } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import styles from './styles';
import colors from '../../styles/colors';
import imagemFundo from '../../assets/png/backgroud_img.png';

import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Login({ navigation }) {

  // 0 - careggando 1 - logado 2 - deslogado
  const [deslogado, setDeslogado] = useState(0);
  const [credenciais, setCredenciais] = useState({
    nameUser: '',
    email: '',
    typeUser: ''
  });

  const checkLogin = async () => {
    const user = await AsyncStorage.getItem('@user');
    if (user) {
      navigation.replace('Home');
    } else {
      setDeslogado(2);
    }
  }

  const user = async () => {
    try {
      const response = await api.post('users/create', credenciais);
      const res = response.data;

      console.log(res);
      alert('SUCESSO:' + 'Login criado. 😊👌')
      if (res.error) {
        alert(res.message)
        return false;
      }

      await AsyncStorage.setItem('@user', JSON.stringify(res.usuario));
      navigation.replace('Home');
    } catch (error) {
      alert('ERRO:' + 'Esse usuário(a) já existe. 😢')
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <ImageBackground source={imagemFundo}>
      <Image style={styles.logo} source={require('../../assets/png/Logo.png')} />

      {deslogado === 0 && <ActivityIndicator color={colors.blue} size='large' />}
      {deslogado === 2 && (<View style={styles.container}>
        <TextInput
          label='Nome'
          activeUnderlineColor='#4895EF'
          style={styles.email}
          value={credenciais.nameUser}
          onChangeText={(text) => setCredenciais({ ...credenciais, nameUser: text })}
        />

        <TextInput
          label='email'
          //secureTextEntry
          activeUnderlineColor='#4895EF'
          style={styles.senha}
          value={credenciais.email}
          onChangeText={(text) => setCredenciais({ ...credenciais, email: text })}
        />

        <Button
          mode='contained'
          style={styles.butaoLogin}
          onPress={() => user()}>
          Entrar
        </Button>

        <Text styles={styles.info}>
          Ao se cadastrar você estará concordando com os termos de uso.
        </Text>

      </View>)}
    </ImageBackground>
  )
};