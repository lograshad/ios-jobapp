import {View, TouchableOpacity, Text, Linking} from 'react-native';
import  HeartIcon from "../icons/heartIcon";
import styles from "./footer.style";

const Footer = ({url}) => {
    return ( 
        <View style={styles.container}>
            <TouchableOpacity style={styles.likeBtn}>
                <HeartIcon/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyBtn} onPress={() => Linking.openURL(url)}>
                <Text style={styles.applyBtnText}>Apply Now</Text>
            </TouchableOpacity>
        </View>
     );
}
 
export default Footer;