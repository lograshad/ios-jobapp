import { TouchableOpacity, Image, View } from "react-native";
import chevRightIcon from "../../assets/Icons/chev-right.png";
import { StyleSheet } from "react-native";

const ChevRightIcon = () => {
    return ( 
        <View style={styles.menuWrapper}>
            <Image 
                source={chevRightIcon}
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
export default ChevRightIcon;