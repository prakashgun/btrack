import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header } from 'react-native-elements'
import SideMenuIcon from './SideMenuIcon'

export default function HeaderBar({navigation, title}) {
    return (
        <View>
            <Header
                leftComponent={<SideMenuIcon navigation={navigation} />}
                centerComponent={{ text: title }}
                rightComponent={{ icon: 'home' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
