import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./card.style";
import { checkImageURL } from "../../../utils/index";
const NearbyJobCard = ({ item, handlePress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => { handlePress(item) }}
            // come back here
        >
            <TouchableOpacity
                style={styles.logoContainer}
            >
                <Image
                    source={{
                        url: checkImageURL(item?.employer_logo)
                            ? item.employer_logo
                            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
                    }}
                    resizeMode='contain'
                    style={styles.logoImage}
                />
            </TouchableOpacity>
            <Text numberOfLines={1} style={styles.jobName}>
                {item?.job_title}
            </Text>
            <View style={styles.infoWrapper}>
                <Text  style={styles.publisher}>
                {item?.job_publisher} -
                </Text>
                <Text style={styles.location}>{item?.job_employment_type}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default NearbyJobCard;