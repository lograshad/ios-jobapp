import {View, Text} from "react-native";
import styles from "./about.style";

const JobAbout = ({info}) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>About the Job: </Text>
            <Text style={styles.body}>{info}</Text>
        </View>
     );
}
 
export default JobAbout;