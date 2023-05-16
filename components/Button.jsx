import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ pressHandler, Icon, stylesText, title, stylesButton }) => {
    const RenderContentIconOrText = () => {
        if (!Icon) {
            return <Text style={stylesText}>{title && title}</Text>
        } else {
            return Icon;
        }
    }
    return (
        <TouchableOpacity style={stylesButton} onPress={pressHandler}>
            <RenderContentIconOrText />
        </TouchableOpacity>
    )
}

export default Button