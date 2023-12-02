import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    boldText: {
        fontSize: 18,
        fontWeight: "600"
    },
    dimText: {
        color: "#C1C0C8",
    },
    cardsContainer: {
        gap: 15,
    }
})

export default styles;