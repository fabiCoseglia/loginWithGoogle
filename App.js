import {  StatusBar, Text, View } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import UserProfile from './app/screens/UserProfile';

export default function App() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return (
  <ClerkProvider publishableKey={publishableKey}>    
    <View className="flex-1 bg-white">
      <StatusBar style={'auto'} />
      <SignedIn>
        <UserProfile/>
      </SignedIn>
      <SignedOut>
        <LoginScreen/>        
      </SignedOut>
    </View>
  </ClerkProvider>
  );
}
