import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import HeaderBar from '../components/HeaderBar'

export default function AccountsScreen({navigation}) {
    return (
        <View>
            <HeaderBar navigation={navigation} title="Accounts" />
            <Text>AccountsScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
