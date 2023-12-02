import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 14,
        padding: 20,
        backgroundColor: "#fff"
    },
    likeBtn: {
        borderWidth: 1,
        borderRadius: 9,
        borderColor: "#777070",
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
    },
    applyBtn: {
        backgroundColor: "red",
        borderRadius: 11,
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    applyBtnText: {
        color: "white",
        fontWeight: "600"
    } 
});

export default styles;