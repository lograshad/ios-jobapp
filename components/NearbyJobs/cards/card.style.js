import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FFF",
        justifyContent: "space-between",
        borderRadius: 30,
        padding: 16,
        shadowColor: "#F3F4F8",
        // shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
    logoContainer: {
        width: 45,
        height: 45,
        padding: 5,
        borderRadius: 9,
        // backgroundColor: "#C1C0C8"
    },
    logoImage: {
        width: "100%",
        height: "100%",
    },
    companyName: {
        fontSize: 12,
        color: "#B3AEC6",
        marginTop: 5,
    },
    jobName: {
        fontSize: 19,
      },
      infoWrapper: {
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "flex-start",
        alignItems: "center",
      },
      publisher: {
        fontSize: 13,
      },
      location: {
        fontSize: 13,
        color: "#B3AEC6",
      },
});

export default styles;