import { TouchableOpacity, Image } from "react-native";
import backIcon from "../../assets/Icons/back.png";
import { StyleSheet } from "react-native";

const BackIcon = ({handlePress}) => {
    return ( 
        <TouchableOpacity style={styles.menuWrapper} onPress={handlePress}>
            <Image 
                source={backIcon}
                resizeMode='cover'
                style={styles.menuImg}
            />
        </TouchableOpacity>
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
export default BackIcon;