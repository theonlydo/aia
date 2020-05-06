import * as React from "react"
import { View, Image } from "react-native"
import { useObserver } from "mobx-react-lite"
import { Text } from "../"
import { useStores } from "../../models/root-store"
import { imagePostStyles as styles } from "./image-post.styles"
import { getLocalTime } from "../../utils/date"

export interface ImagePostProps { }

/**
 * React.FunctionComponent for your hook(s) needs
 *
 * Component description here for TypeScript tips.
 */
export const ImagePost: React.FunctionComponent<ImagePostProps> = props => {
  const { title, author, media, published} = props.data

  // const { someStore } = useStores()


  return useObserver(() => (
    <View style={styles.WRAPPER}>
      <Text>{author}</Text>
      <Image
        source={{ uri: media.m }}
        style={styles.IMG}
        resizeMode={"contain"}

      />
      <Text>{getLocalTime(published)}</Text>
      <Text>{title}</Text>
    </View>
  ))
}
