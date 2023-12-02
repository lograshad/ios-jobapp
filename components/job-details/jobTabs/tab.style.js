import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    tabButton: (name, activeTab) => ({
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 9,
        marginleft: 2,
        backgroundColor: name === activeTab ? "red" : "#F3F4F8",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
        shadowColor: "#F3F4F8",
    }),
    tabText: (name, activeTab) => ({
        color: name === activeTab ? "white" : "#AAA9B8",
        fontSize: 12,
    })
});

export default styles;