import * as React from "react"
import Share from 'react-native-share';
import { View, Image, TouchableOpacity, Platform } from "react-native"
import { useObserver } from "mobx-react-lite"
import { Text } from "../"
import { imagePostStyles as styles } from "./image-post.styles"
import { getLocalTime } from "../../utils/date"
import { Icon } from 'react-native-elements'

export interface ImagePostProps { }

/**
 * React.FunctionComponent for your hook(s) needs
 *
 * Component description here for TypeScript tips.
 */
export const ImagePost: React.FunctionComponent<ImagePostProps> = props => {
  const { title, author, media, published, link } = props.data

  const email = author.split(" ")

  // const { someStore } = useStores()


  function openShareDialog() {
    const title = 'Awesome Contents';
    const message = 'Please check this out.';
    const icon = 'data:<data_type>/<file_extension>;base64,<base64_data>';
    const options = Platform.select({
      ios: {
        activityItemSources: [
          { // For sharing url with custom title.
            placeholderItem: { type: 'url', content: link },
            item: {
              default: { type: 'url', content: link },
            },
            subject: {
              default: title,
            },
            linkMetadata: { originalUrl: link, link, title },
          },
          { // For sharing text.
            placeholderItem: { type: 'text', content: message },
            item: {
              default: { type: 'text', content: message },
              message: null, // Specify no text to share via Messages app.
            },
            linkMetadata: { // For showing app icon on share preview.
              title: message
            },
          },
          { // For using custom icon instead of default text icon at share preview when sharing with message.
            placeholderItem: {
              type: 'url',
              content: icon
            },
            item: {
              default: {
                type: 'text',
                content: `${message} ${link}`
              },
            },
            linkMetadata: {
              title: message,
              icon: icon
            }
          },
        ],
      },
      default: {
        title,
        subject: title,
        message: `${message} ${link}`,
      },
    });

    Share.open(options);
  }

  return useObserver(() => (
    <View style={styles.WRAPPER}>

      <View style={styles.TITLE}>
        <View style={{ flex: 0.8 }}>
          <Text style={styles.AUTHOR}>{email[0]}</Text>
          <Text>{getLocalTime(published)}</Text>
        </View>

        <View style={{ flex: 0.2, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => openShareDialog()}>
            <Icon
              style={{ alignSelf: 'flex-end' }}
              color={"#888"}
              name='share' /></TouchableOpacity>
        </View>
      </View>
      <Image
        source={{ uri: media.m }}
        style={styles.IMG}
        resizeMode={"contain"} />
      <View style={styles.BOTTOM}>
        <Text>{title}</Text>
      </View>
    </View>
  ))
}
