import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'
import { AppInput } from '../shared/components/AppInput'

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center">
      <AppInput/>
      <Text className="text-purple-base">Login!!</Text>
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text>Registro</Text>
      </TouchableOpacity>
    </View>
  )
}