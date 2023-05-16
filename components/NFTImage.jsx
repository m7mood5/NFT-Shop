import { View, StyleSheet, Image, StatusBar } from "react-native";
import React from "react";
import Button from "./Button";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../Constant";

const NFTImage = ({ image, imageStyles, arrow, love, pressHandler }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={imageStyles} resizeMode="cover" />
            {arrow && (
                <Button
                    stylesButton={styles.buttonArrow}
                    Icon={<Feather name="arrow-right" size={20} color={COLORS.second} />}
                    pressHandler={pressHandler && pressHandler}
                />
            )}
            {love && (
                <Button
                    stylesButton={styles.buttonHeart}
                    Icon={<AntDesign name="heart" size={20} color={COLORS.second} />}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        position: "relative",
    },

    buttonHeart: {
        position: "absolute",
        top: StatusBar.currentHeight + 10,
        right: 10,
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 40,
    },
    buttonArrow: {
        position: "absolute",
        top: StatusBar.currentHeight + 10,
        left: 10,
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 40,
    },
});

export default NFTImage;