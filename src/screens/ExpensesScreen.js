import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Header} from 'react-native-elements'
import SideMenuIcon from '../components/SideMenuIcon'

export default function ExpensesScreen({navigation}) {
    return (
        <View>
            <Header
                leftComponent={<SideMenuIcon navigation={navigation} />}
                centerComponent={{ text: 'Expenses' }}
                rightComponent={{ icon: 'home'}}
            />
            <Text>ExpensesScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
