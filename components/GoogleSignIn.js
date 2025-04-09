import React, { useEffect } from 'react';
import { Button, Alert } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { LogBox } from 'react-native';



// Configure these values
const CLIENT_ID = '905613179786-pgg92oac76pnbdkmdb7kl4slfj7r9mum.apps.googleusercontent.com';
const REDIRECT_URI = 'https://auth.expo.io/@sumaiya-expo/myapp';

export default function AuthScreen() {
  LogBox.ignoreLogs(['Cross-Origin-Opener-Policy']);

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: CLIENT_ID,
      scopes: ['openid', 'profile', 'email'],
      redirectUri: REDIRECT_URI,
    },
    {
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
      tokenEndpoint: 'https://oauth2.googleapis.com/token',
    }
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
    
    }
  }, [response]);

  return (
    <Button
      title="Login"
      disabled={!request}
      onPress={() => promptAsync({ useProxy: false })}
    />
  );
}