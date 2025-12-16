import { FC } from 'react'
import { Image, Text, View } from 'react-native'
import Logo from '../../../assets/images/Logo.png'

interface AuthFormHeaderProps {
  title: string
  subTitle: string
}

export const AuthFormHeader: FC<AuthFormHeaderProps> = ({
  title,
  subTitle,
}) => {
  return (
    <View className="items-center mb-8">
      <Image
        source={Logo}
        resizeMode="contain"
        className="w-[80px] h-[60px] mb-8"
      />

      <Text className="text-3xl font-bold mb-3 text-gray-500">{title}</Text>
      <Text className="text-base text-gray-300">{subTitle}</Text>
    </View>
  )
}