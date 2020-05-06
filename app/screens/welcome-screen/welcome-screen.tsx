import * as React from "react"
import { View, ViewStyle, FlatList, RefreshControl } from "react-native"
import { ParamListBase } from "@react-navigation/native"
import { NativeStackNavigationProp } from "react-native-screens/native-stack"
import { FeedPlaceholder, Text } from "../../components"
import {  spacing } from "../../theme"
import { ImagePost } from "../../components/image-post/image-post"
import { SearchBar } from 'react-native-elements'
import { Api, FeedResult } from "../../services/api"
import NetInfo from "@react-native-community/netinfo"

const FULL: ViewStyle = { flex: 1, backgroundColor: '#eee' }
export interface WelcomeScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>
}

export const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = props => {

  const [loading, setLoading] = React.useState(true)
  const [refreshing,] = React.useState(false)
  const [data, setData] = React.useState([])
  const [tag, setTag] = React.useState(null)
  const [connect, setConnect] = React.useState(true)

  const api = new Api()
  api.setup()

  React.useEffect(() => {
    getData()
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log("Is connected?", state.isConnected);
      setConnect(state.isConnected)
    });
  }, [])

  async function getData() {
    console.log("tag:" + tag)
    setLoading(true)
    const res: FeedResult = await api.getFeed(tag)
    setData(res.data)
    setLoading(false)
  }

  function renderList() {
    return connect ? <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={() => { getData() }} />
      }
      data={data}
      renderItem={({ item }) => <ImagePost data={item} />}
      keyExtractor={item => item.link}
    /> : noInternetView()
  }

  function noInternetView() {
    return (
      <View style={{marginTop:spacing[3]}}><Text>No Internet Connection</Text></View>
    )
  }

  return (
    <View style={FULL}>
      <SearchBar
        placeholder="Search image by tag here"
        onBlur={() => getData()}
        onChangeText={(t) => setTag(t)}
        value={tag}
        lightTheme
        style={{ marginBottom: spacing[6] }} />

      {loading ? <FeedPlaceholder /> : renderList()}

    </View>
  )
}