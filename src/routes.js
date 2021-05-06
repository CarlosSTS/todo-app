import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const AppStack = createStackNavigator();

import Todo from './pages/Todo'
import {connect} from "react-redux";

const Routes = ({todoSize}) => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{
                headerShown: true,
                headerTitleAlign: 'center',
                headerTintColor: "#fff",
                headerStyle: {
                    backgroundColor: "#074885"
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
                <AppStack.Screen
                    name='Todo'
                    component={Todo}
                       options={{
                           title: `Total de To-dos: ${todoSize}`,
                           headerRight: () => (
                               <MaterialCommunityIcons
                                   style={{ marginRight: 50 }}
                                   name="file-document-edit"
                                   size={36}
                                   color={todoSize > 0 ? '#fff':'#074885' }
                               />
                           )}}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
export default connect(state => ({
    todoSize: state.todo.length,
}))(Routes);