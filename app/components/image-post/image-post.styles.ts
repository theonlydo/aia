import { ViewStyle } from "react-native"
import { color, spacing } from "../../theme"
import { UI } from "../../constants/ui"

export const imagePostStyles = {
  WRAPPER: {
    justifyContent: 'center',
    marginBottom: spacing[5],
    backgroundColor: color.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  } as ViewStyle,

  IMG: {
    width: UI.IMG_WIDTH,
    height: UI.IMG_HEIGHT,
    backgroundColor: color.grey
  } as ViewStyle,

  TITLE: {
    marginHorizontal: spacing[4],
    marginVertical: spacing[3],
    flexDirection:'row'

  } as ViewStyle,

  BOTTOM: {
    marginHorizontal: spacing[4],
    marginVertical: spacing[3],
  } as ViewStyle,


  AUTHOR: {
    fontWeight: 'bold',
  } as ViewStyle
}
