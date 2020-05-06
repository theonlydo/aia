import * as React from "react"
import { View, ViewStyle } from "react-native"
import { ParamListBase } from "@react-navigation/native"
import { NativeStackNavigationProp } from "react-native-screens/native-stack"
import { Screen, FeedPlaceholder } from "../../components"
import { color, spacing } from "../../theme"
import { ImagePost } from "../../components/image-post/image-post"
import { SearchBar } from 'react-native-elements';
import { Api } from "../../services/api"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  //paddingHorizontal: spacing[4],
}

export interface WelcomeScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>
}

export const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = props => {

  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState([])
  const [tag, setTag] = React.useState(null)

  const api = new Api()


  React.useEffect(() => {
    console.log("ulang")
    api.setup()
    getData()
  });

  async function getData(){
    setLoading(true)
    const res = api.getFeed(tag)
    console.log(JSON.stringify(res))
    setLoading(false)
  }

  function renderList() {
    return <ImagePost />
  }

  return (
    <View style={FULL}>
      <SearchBar
        placeholder="Search tag image here"
        onChangeText={(t) => setTag(t)}
        value={tag}
        lightTheme style={{marginBottom:spacing[4]}}/>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.background}>

        {loading ? <FeedPlaceholder /> : renderList()}

      </Screen>

    </View>
  )
}