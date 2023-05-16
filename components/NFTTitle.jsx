import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from "../Constant/index";
import NFTDate from './NFTDate';
import { MaterialCommunityIcons } from "@expo/vector-icons"

const NFTTitle = ({ _name, creator, date }) => {
    return (
        <View>
            <View>
                <Text style={styles.textName}>
                    {_name}
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: SIZES.small,
                    }}
                >
                    <NFTDate date={date} />
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginLeft: 35
                    }}>
                        <MaterialCommunityIcons
                            name="check-decagram"
                            size={20}
                            color="#AEE2FF"
                            style={{
                                margin: 2
                            }}
                        />
                        <Text style={styles.textCreator}>{creator}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default NFTTitle;


const styles = StyleSheet.create({
    textName: {
        color: COLORS.white,
        fontFamily: FONTS.semiBold,
        fontSize: 20,
    },
    textCreator: {
        color: "#AEE2FF",
        fontFamily: FONTS.regular,
        fontSize: 16,
        margin: 2
    },
});