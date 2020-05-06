import * as React from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { ParamListBase } from "@react-navigation/native"
import { NativeStackNavigationProp } from "react-native-screens/native-stack"
import { Button, Screen, FeedPlaceholder } from "../../components"
import { color, spacing } from "../../theme"
import { ImagePost } from "../../components/image-post/image-post"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  //paddingHorizontal: spacing[4],
}

export interface WelcomeScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>
}

export const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = props => {

  const [loading, setLoading] = React.useState(true);

  //if(loading){ return <FeedPlaceholder/> }
  return (
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.background}>
        <FeedPlaceholder />
      </Screen>
  )

  return (
    <View testID="WelcomeScreen" style={FULL}>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.background}>
        <ImagePost/>
      </Screen>
    
    </View>
  )
}