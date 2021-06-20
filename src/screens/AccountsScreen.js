import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import HeaderBar from '../components/HeaderBar'

export default function AccountsScreen() {
    const navigation = useNavigation()
    
    return (
        <View>
            <HeaderBar title="Accounts" />
            <Text>AccountsScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
