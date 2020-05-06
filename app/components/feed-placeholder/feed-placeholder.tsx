import * as React from "react"
import { View, ViewStyle } from "react-native"
import { Text, Screen } from "../"
import { feedPlaceholderStyles as styles } from "./feed-placeholder.styles"
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";

export interface FeedPlaceholderProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: string

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function FeedPlaceholder(props: FeedPlaceholderProps) {
  // grab the props
  const { tx, text, style, ...rest } = props
  const textStyle = {}

  return (
    <View style={styles.WRAPPER} {...rest}>

      <View style={styles.INFO}>
        <Placeholder
          Animation={Fade}
          Left={PlaceholderMedia}
        >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
        </Placeholder>
      </View>
      <PlaceholderMedia style={styles.IMG} />


      <View style={styles.INFO}>
        <Placeholder
          Animation={Fade}
          Left={PlaceholderMedia}
        >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
        </Placeholder>
      </View>
      <PlaceholderMedia style={styles.IMG} />


    </View>
  )
}
