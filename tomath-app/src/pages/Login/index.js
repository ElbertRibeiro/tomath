import React from 'react';
import AuthSession from 'expo-auth-session';
import { View, Text, ImageBackground, Button} from 'react-native';
import styles from './styles';

import imagemFundo from '../../assets/png/backgroud_img.png';

export function Login() {
    async function handleSignIn(){
       /* const CLIENT_ID = '539723624381-dltm4n0nelq00h2p6a6bkfdag5pip2k4.apps.googleusercontent.com';
        const REDIRECT_URI='https://auth.expo.io/@wandersouza/tomath-app';
        const RESPONSE_YPE='token';
        const SCOPO = encodeURI('profile email');

        const autUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_YPE}&scope=${SCOPO}`;
        await AuthSession.startAsync({autUrl});
        navigation.navigate('ChooseProfile');*/
    }

  return(
    <ImageBackground source={imagemFundo}>
        <View>
            <Text styles={styles.Text}>
            Ao se cadastrar você estará concordando com os termos de uso.
            </Text>     
            <Button 
                styles={styles.Button}
                title='Entrar com Google'
                icon='sociial-google'
                onPress={handleSignIn}
            />   
        </View>    
    </ImageBackground>
  );
}

