import { StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../outils/constantes";

const homeStyles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.main,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },

  userImg: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },

  userName: {
    fontSize: 16,
  },

  scrollableList: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },

  title: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },

  titleBold: {
    fontWeight: "bold",
    fontFamily: "Arial",
  },

  title_space_between: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 1,
    justifyContent: "space-between",
  },

  link: {
    color: COLORS.main,
    fontWeight: "bold",
  },

  plantsContainer: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },

  plantsCard: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    elevation: 50,
    padding: 10,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    marginBottom: 20,
    borderRadius: 10,
  },

  plantsImg: {
    width: 80,
    height: 80,
    borderRadius: 30,
    marginRight: 15,
  },

  plantsinfo: {
    flexDirection: "column",
  },

  plantTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 15,
  },

  plantOwner: {
    backgroundColor: COLORS.main,
    borderRadius: 15,
    padding: 5,
    fontSize: 14,
    color: "white",
    // paddingHorizontal: PADDING.horizontal,
  },
});

export default homeStyles;
