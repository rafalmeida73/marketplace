import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export default function App() {
  return (
    <View>
      <Text className='text-emerald-300'>Olá mugfgndo!</Text>
      <TouchableOpacity onPress={() => router.push('login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}