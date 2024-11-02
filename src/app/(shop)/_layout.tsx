import { Tabs } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import {StyleSheet} from 'react-native';
import React from "react";
import { FontAwesome, Ionicons } from '@expo/vector-icons';

function TabBarIcons(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={24} style={{ color: '#1BC464' }} {...props} />;
}

const TabsLayout = () => {
    return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#1BC464',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {
                fontSize: 16,
            },
            tabBarStyle: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingTop: 10,
                height: 80,
                paddingBottom: 10
            }
        }}
    >
        <Tabs.Screen name="index" 
        options={{
            title: 'Shop',
            tabBarIcon: (props) => <TabBarIcons {...props} name="shopping-cart"  />,
        }} />
        <Tabs.Screen name="orders"
        options={{
            title: 'Orders',
            tabBarIcon: (props) => <TabBarIcons {...props} name="book"  />,
        }} />
    </Tabs>
    </SafeAreaView>
    )
}

export default TabsLayout;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    }
})