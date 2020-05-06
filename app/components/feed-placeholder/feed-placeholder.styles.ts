import { ViewStyle } from "react-native"
import { spacing, color } from "../../theme"
import { UI } from "../../constants/ui"

export const feedPlaceholderStyles = {
  WRAPPER: {
    backgroundColor: '#fff',
  } as ViewStyle,

  IMG: {
    height: UI.IMG_HEIGHT,
    width: UI.IMG_WIDTH,
  } as ViewStyle,
  INFO: {
    backgroundColor: color.white,
    marginVertical: spacing[3],
    marginHorizontal: spacing[4]
  } as ViewStyle,
}
