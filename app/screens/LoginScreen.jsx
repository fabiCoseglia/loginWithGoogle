import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import * as WebBrowser from 'expo-web-browser'
import { useWarmUpBrowser } from '../../hooks/WarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();
    const {startOAuthFlow} = useOAuth({strategy:'oauth_google'});

    const onPress = React.useCallback(async ()=>{
        try {
          const { createdSessionId,setActive} = await startOAuthFlow();
          if(createdSessionId){
            setActive({session: createdSessionId})
          }else{
            //use sigIN or signUp
          }
        } catch (error) {
          console.error('OAuth error',err)
        }
      },[]);
  return (
    <View>
      <Image source={require('./../../assets/login.jpg')}
      className = 'w-full h-[380px] object-cover'  
      />

      <View  className='p-10 bg-white mt-[-18px] rounded-t-lg shadow-sm'>
        <Text className='text-[25px] font-bold'>Login With Google & Clerk</Text>
        <Text className='text-[18px] text-slate-500 mt-5'>SignIn app to login with Clerk and you'r google account.</Text>
        <Pressable onPress={onPress}  className='p-4 bg-green-700 rounded-full mt-20 w-[350px] mx-auto'>
          <Text className='text-white text-center text-[16px]'>Log in With Google</Text>
        </Pressable>
      </View>
    </View>
  )
}