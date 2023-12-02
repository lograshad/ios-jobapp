import { View, Image, Text } from "react-native";
import styles from "./company.style";
import { checkImageURL } from "../../../utils";

const CompanyName = ({ company_logo, jobTitle, companyName, location }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={{
                            url: checkImageURL(company_logo)
                                ? company_logo
                                : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
                        }}
                        resizeMode='contain'
                        style={styles.logoImage}
                    />
                </View>
                <View>
                    <Text style={styles.jobTitle}>{jobTitle}</Text>
                </View>
                <View style={styles.nameNlocation}>
                    <Text style={styles.companyName}>{companyName} / </Text>
                    <Text style={styles.location}>{location}</Text>
                </View>
            </View>
        </View>
    );
}

export default CompanyName;