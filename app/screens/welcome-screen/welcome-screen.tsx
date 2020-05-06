import * as React from "react"
import { View, ViewStyle, FlatList, RefreshControl } from "react-native"
import { ParamListBase } from "@react-navigation/native"
import { NativeStackNavigationProp } from "react-native-screens/native-stack"
import { Screen, FeedPlaceholder } from "../../components"
import { color, spacing } from "../../theme"
import { ImagePost } from "../../components/image-post/image-post"
import { SearchBar } from 'react-native-elements';
import { Api, FeedResult } from "../../services/api"

const FULL: ViewStyle = { flex: 1, backgroundColor: '#eee' }
export interface WelcomeScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>
}

export const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = props => {

  const [loading, setLoading] = React.useState(true)
  const [refreshing, ] = React.useState(false)
  const [data, setData] = React.useState([])
  const [tag, setTag] = React.useState(null)

  const api = new Api()
  api.setup()

  React.useEffect(() => {
    getData()
  }, [])

  async function getData() {
    console.log("tag:"+tag)
    setLoading(true)
    const res: FeedResult = await api.getFeed(tag)
    setData(res.data)
    setLoading(false)
  }

  function renderList() {
    return <FlatList
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={() => { getData() }} />
    }
      data={data}
      renderItem={({ item }) => <ImagePost data={item}/>}
      keyExtractor={item => item.link}
    />
  }

  return (
    <View style={FULL}>
      <SearchBar
        placeholder="Search image by tag here"
        onBlur={() => getData()}
        onChangeText={(t) => setTag(t)}
        value={tag}
        lightTheme style={{ marginBottom: spacing[4] }} />

      {loading ? <FeedPlaceholder /> : renderList()}

    </View>
  )
}