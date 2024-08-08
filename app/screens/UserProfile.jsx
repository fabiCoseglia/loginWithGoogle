import React from 'react';
import { useClerk, signOut } from '@clerk/clerk-expo';
import { View, Text, Image, Pressable } from 'react-native';

export default function UserProfile() {
    const { user } = useClerk();

  return (
    <View className="bg-white rounded-lg shadow-md p-4">
        <Image source={require('./../../assets/profile.png')}
      className = 'w-full h-[470px] object-cover mb-3'  
      />
        <View className="flex items-center border p-3 shadow-lg border-gray-400">
            <Image
            source={{ uri: user.imageUrl }}
            className="rounded-full h-20 w-20 mb-3"
            alt="Foto de perfil"
            />
            <View className="ml-4">
            <Text className="text-lg font-bold">{user.fullName}</Text>
            <Text className="text-gray-500">{user.primaryEmailAddress.emailAddress}</Text>
            </View>
            <Pressable className='p-4 bg-green-700 rounded-full mt-5 w-[150px] mx-auto'>
                <Text className='text-white text-center text-[16px]'>Logout</Text>
            </Pressable>
        </View>
    </View>

  )
}