import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 12,
  },
  title: {
    fontSize: 20,
    color: "#312651",
    fontWeight: "600",
  },
  pointsContainer: {
    marginVertical: 5,
  },
  pointWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 5,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: "#C1C0C8",
    marginTop: 6,
  },
  pointText: {
    color: "#83829A",
    marginLeft: 5,
  },
});

export default styles;