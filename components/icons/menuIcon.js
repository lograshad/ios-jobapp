import { TouchableOpacity, Image } from "react-native";
import menuIcon from "../../assets/Icons/menu.png";
import { StyleSheet } from "react-native";

const MenuIcon = () => {
    return ( 
        <TouchableOpacity style={styles.menuWrapper}>
            <Image 
                source={menuIcon}
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
export default MenuIcon;