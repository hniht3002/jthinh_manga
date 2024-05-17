import { StyleSheet, Text } from "react-native";
import CustomText from "../CustomComponent/CustomText/CustomText";
import tw from 'twrnc';
function Home() {
    return ( <>
        <CustomText align="center" style={tw`text-rose-400`}>Home</CustomText>
    </> );
}

export default Home;