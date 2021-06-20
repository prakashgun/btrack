import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import AccountsScreen from './src/screens/AccountsScreen'
import AddExpenseScreen from './src/screens/AddExpenseScreen'
import ExpensesScreen from './src/screens/ExpensesScreen'

export default function App() {
  const Drawer = createDrawerNavigator()
  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ExpensesScreen">
        <Drawer.Screen name="Expenses" component={ExpensesScreen} />
        <Drawer.Screen name="Accounts" component={AccountsScreen} />
        <Drawer.Screen name="AddExpense" component={AddExpenseScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})  
