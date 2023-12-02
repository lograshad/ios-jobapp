import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    searchTitle: {
        fontSize: 24,
        color: "#312651",
    },
    noOfSearchedJobs: {
        marginTop: 2,
        fontSize: 12,
        color: "#312651",
    },
    loaderContainer: {
        marginTop: 16
    },
    footerContainer: {
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    paginationButton: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#FF7754",
    },
    paginationImage: {
        width: '60%',
        height: '60%',
        tintColor: "#F3F4F8"
    },
    paginationTextBox: {
        width: 30,
        height: 30,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F3F4F8"
    },
    paginationText: {
        fontSize: 16,
        color: "#312651",
    }
});

export default styles;