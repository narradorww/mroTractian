import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, WhiteSpace, WingBlank } from "@ant-design/react-native";


export default function Home() {
    return (
        <View>
        <WingBlank size="md" style={styles.button}>
            <Button type="ghost"  size="large" onPress={() => navigation.navigate('Assets')}>
                Assets
            </Button>
        </WingBlank>

        <WingBlank size="md" style={styles.button}>
        <Button type="ghost" size="large" onPress={() => navigation.navigate('Users')}>
            Users
        </Button>
        </WingBlank>

        <WingBlank size="md" style={styles.button}>
        <Button type="ghost" size="large" onPress={() => navigation.navigate('Units')}>
            Units
        </Button>
        </WingBlank>

        <WingBlank size="md" style={styles.button}>
        <Button type="ghost" size="large" onPress={() => navigation.navigate('Companies')}>
            Companies
            </Button>
        </WingBlank>

        </View>
    );
};


const styles = StyleSheet.create({
    button:{
        backgroundColor: "#125af6",
        color: "white",
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,

        
    }
});



