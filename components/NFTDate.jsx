import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES, FONTS } from "../Constant";

const NFTDate = ({ date }) => {
    return (
        <View>
            <Text style={styles.textDate}>{date}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    textDate: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.small+3,
        color: COLORS.gray,
    },
});

export default NFTDate;