import { TouchableOpacity, Image } from "react-native";
import heartIcon from "../../assets/Icons/heart.png";
import { StyleSheet } from "react-native";

const HeartIcon = () => {
    return ( 
        <TouchableOpacity style={styles.menuWrapper}>
            <Image 
                source={heartIcon}
                resizeMode='cover'
                style={styles.menuImg}
            />
        </TouchableOpacity>
     );
}
 
const styles = StyleSheet.create({
    menuWrapper: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    menuImg: {
        width: "100%",
        height: "100%",

    }
});
export default HeartIcon;