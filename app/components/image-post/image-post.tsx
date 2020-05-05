import * as React from "react"
import { View } from "react-native"
import { useObserver } from "mobx-react-lite"
import { Text } from "../"
import { useStores } from "../../models/root-store"
import { imagePostStyles as styles } from "./image-post.styles"

export interface ImagePostProps {}

/**
 * React.FunctionComponent for your hook(s) needs
 *
 * Component description here for TypeScript tips.
 */
export const ImagePost: React.FunctionComponent<ImagePostProps> = props => {
  // const { someStore } = useStores()

  return useObserver(() => (
    <View style={styles.WRAPPER}>
      <Text>asd</Text>
    </View>
  ))
}
