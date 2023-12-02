import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 10,
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: "400"
    },
    boldText: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 20,
    },
    searchContainer: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        gap: 10,
    },
    textInputContainer: {
        width: "80%",
        height: 40,
        borderRadius: 9,
        backgroundColor: "#F3F4F8",
        backgroundOpacity: "20%",
    },
    searchBtnWrapper: {
        width: "12%",
        height: 40,
        borderRadius: 9,
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabsContainer: {
        width: "100%",
        marginTop: 10,
    },
    tab: (activeItem, item) => ({
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: activeItem === item ? "black" : "#C1C0C8"
    }),
    tabText: (activeItem, item) => ({
        color: activeItem === item ? "black" : "#C1C0C8"
    })
})

export default styles;