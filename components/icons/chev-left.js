import { TouchableOpacity, Image, View } from "react-native";
import chevLeftIcon from "../../assets/Icons/chev-left.png";
import { StyleSheet } from "react-native";

const ChevLeftIcon = () => {
    return ( 
        <View style={styles.menuWrapper}>
            <Image 
                source={chevLeftIcon}
                resizeMode='cover'
                style={styles.menuImg}
            />
        </View>
     );
}
 
const styles = StyleSheet.create({
    menuWrapper: {
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    menuImg: {
        width: "100%",
        height: "100%",

    }
});
export default ChevLeftIcon;