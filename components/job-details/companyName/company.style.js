import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#FAFAFC",
    },
    header: {
        alignItems: "center",
        width: "100%",
        paddingTop: "15%",
        paddingBottom: "5%",
    },
    imageWrapper: {
        width: 40,
        height: 40,
    },
    logoImage: {
        width: "100%",
        height: "100%",
    },
    jobTitle: {
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center"
    },
    nameNlocation: {
        flexDirection: "row",
    },
    companyName: {
        fontWeight: "400",
        fontSize: 13,
        color: "#312651",
    },
    location: {
        color: "#83829A",
        fontSize: 13,
    }
});

export default styles;