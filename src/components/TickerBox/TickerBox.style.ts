import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginTop: 10,
        overflow: 'hidden',
        borderWidth: 0.5,
        borderColor: Colors.borderColor,
        width: (width - 60) / 2,
    },
    tickerText: {
        color: Colors.primaryText,
        marginVertical:10,
        fontWeight:'700',
        textAlign: "center",
    },
    stockName: {
        color: Colors.secondaryText,
        fontSize: 15,
        textAlign: "center",
        width: 100,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
})