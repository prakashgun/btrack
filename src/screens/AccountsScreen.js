import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Header} from 'react-native-elements'
import SideMenuIcon from '../components/SideMenuIcon'

export default function AccountsScreen({navigation}) {
    return (
        <View>
            <Header
                leftComponent={<SideMenuIcon navigation={navigation} />}
                centerComponent={{ text: 'Accounts', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <Text>AccountsScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
