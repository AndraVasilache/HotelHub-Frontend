import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useFonts } from 'expo-font';

const DebugScreen = ({navigation}) => {
    return (
        <View>
            <Button
                title="StartScreen"
                onPress={() => navigation.navigate("Start")}
            />
            <Button
                title="LoginScreen"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="AboutUsScreen"
                onPress={() => navigation.navigate("AboutUs")}
            />
            <Button
                title="SignUpScreen"
                onPress={() => navigation.navigate("CreateAccount")}
            />
            <Button
                title="MakeReservation"
                onPress={() => navigation.navigate("MakeReservation")}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default DebugScreen;