import { TouchableOpacity, Image } from "react-native";
import shareIcon from "../../assets/Icons/share.png";
import { StyleSheet } from "react-native";

const ShareIcon = () => {
    return ( 
        <TouchableOpacity style={styles.menuWrapper}>
            <Image 
                source={shareIcon}
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
export default ShareIcon;