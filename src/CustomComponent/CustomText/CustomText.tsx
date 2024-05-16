import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import {useFonts} from "expo-font"
import { ReactNode } from "react";

interface CustomTextProps extends TextProps{
    children: ReactNode,
    style?: TextStyle,
    numberOfLines?: number;
    align?: 'left' | 'right' | 'center' | 'justify';
    color?: string;
    fontSize?: number;
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    fontStyle?: 'normal' | 'italic';
}

const CustomText:React.FC<CustomTextProps> = (
    {children, 
    style = StyleSheet.create({}), 
    numberOfLines = 100, 
    align = "left", 
    color="#3d3d3d", 
    fontSize = 16, 
    fontWeight = "normal", 
    fontStyle = "normal"}) => {
    const styles = StyleSheet.create({
        font: {
            fontFamily: "Outfit",
            color: `${color}`,
            fontSize: +`${fontSize}`,
            textAlign: `${align}`,
            fontWeight: `${fontWeight}`,
            fontStyle: `${fontStyle}`
        }
    })

    const [fontLoaded] = useFonts({
        "Outfit": require("../../assets/fonts/Outfit-Regular.ttf")
    })

    if(!fontLoaded) {
        return null
    }

    return ( <Text style={[styles.font, style]} 
                numberOfLines={numberOfLines} 
                ellipsizeMode="tail">
                {children}
            </Text> );
}

export default CustomText;
