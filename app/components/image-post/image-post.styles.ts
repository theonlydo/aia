import { ViewStyle } from "react-native"
import { color, spacing } from "../../theme"
import { UI } from "../../constants/ui"

export const imagePostStyles = {
  WRAPPER: {
    justifyContent: 'center',
    marginBottom: spacing[4]
  } as ViewStyle,

  IMG: {
    height: UI.IMG_HEIGHT,
    width: UI.IMG_WIDTH,
    backgroundColor: color.grey
  } as ViewStyle

}
