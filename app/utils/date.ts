
import TimeAgo from 'react-native-timeago'

export function getLocalTime(utc) {
    // ISO-8601 formatted date returned from server
    var localDate = new Date(utc);
    return localDate.toLocaleString()
}