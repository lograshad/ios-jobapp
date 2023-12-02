import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: (selectedJob, item) => ({
        width: 250,
        backgroundColor: selectedJob === item.job_id ? "#fff" : "#FFF",
        justifyContent: "space-between",
        borderRadius: 20,
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
    }),
    logoContainer: (selectedJob, item) => ({
        width: 45,
        height: 45,
        padding: 5,
        borderRadius: 9,
        // backgroundColor: "#C1C0C8"
    }),
    logoImage: {
        width: "100%",
        height: "100%",
    },
    companyName: {
        fontSize: 12,
        color: "#B3AEC6",
        marginTop: 5,
    },
    jobName: (selectedJob, item) => ({
        fontSize: 19,
        // color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
      }),
      infoWrapper: {
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "flex-start",
        alignItems: "center",
      },
      publisher: (selectedJob, item) => ({
        fontSize: 13,
        // color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
      }),
      location: {
        fontSize: 13,
        color: "#B3AEC6",
      },
});

export default styles;