import { TouchableOpacity, Image } from "react-native";
import profileIcon from "../../assets/Icons/user.png";
import { StyleSheet } from "react-native";

const ProfileIcon = () => {
    return ( 
        <TouchableOpacity style={styles.profileWrapper}>
            <Image 
                source={profileIcon}
                resizeMode='cover'
                style={styles.profileImg}
            />
        </TouchableOpacity>
     );
}
 
const styles = StyleSheet.create({
    profileWrapper: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    profileImg: {
        width: "100%",
        height: "100%",

    }
});
export default ProfileIcon;