import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./card.style";
import { checkImageURL } from "../../utils/index";
const PopularJobCard = ({ item, selectedJob, handlePress }) => {
    return (
        <TouchableOpacity
            style={styles.container(selectedJob, item)}
            onPress={() => { handlePress(item) }}
        >
            <TouchableOpacity
                style={styles.logoContainer(selectedJob, item)}
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
            <Text numberOfLines={1} style={styles.companyName}>
                {item.employer_name}
            </Text>
            <Text numberOfLines={1} style={styles.jobName(selectedJob, item)}>
                {item.job_title}
            </Text>
            <View style={styles.infoWrapper}>
                <Text  style={styles.publisher(selectedJob, item)}>
                {item?.job_publisher} -
                </Text>
                <Text style={styles.location}>{item.job_country}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default PopularJobCard;