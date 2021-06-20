import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import {Icon} from 'react-native-elements'

export default function SideMenuIcon({navigation}) {

    const onPress = () => {
        navigation.openDrawer()
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name="menu" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10
    }
})
