import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

export const styles = StyleSheet.create({
    ContentContainer: {
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    emptyContainer: {
        padding: 10,
        alignItems: 'center',
    },
    emptyText: {
        color: Colors.primaryText,
        fontSize: 15,
    }
})
