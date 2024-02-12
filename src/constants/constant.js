import { Dimensions  ,Appearance} from "react-native";
export const width = Dimensions.get('window').width;
export const isDark = Appearance.getColorScheme();
