import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useFetch } from "../hooks/useFetch";
import { LinearGradient } from "expo-linear-gradient";


import { IUnits } from '../interfaces/IUnits';
import {
  Card,
  WingBlank,
  Button,
  InputItem,
  WhiteSpace,
} from "@ant-design/react-native";
import React from "react";

const path = "/units";

export default function Units({navigation}: any) {
    const { data: units } = useFetch<IUnits | null>(path);
    
    return (
      <LinearGradient
      colors={["#030852", "#10239e", "#2f54eb", "#597ef7"]}
      style={styles.background}
    >
        <ScrollView>

        <View>
        <InputItem clear  placeholder="Search by Name" ></InputItem>
        <WhiteSpace size="lg" />
            {units?.map((unit) => {
                return (
                    <WingBlank key={unit.id} size="md" >
                        <Card style={styles.card}>
                            <Card.Header title={unit.name} style={{ width: 320 }} />
                            <Card.Body>
                                <View style={styles.body}>
                                    <Text>ID: {unit.id}</Text>
                                    <Text>Name: {unit.name}</Text>
                                </View>
                            </Card.Body>
                        </Card>
                    </WingBlank>
                );})}
        </View>
         
        </ScrollView>
        </LinearGradient> 
    );
};

const styles = StyleSheet.create({
    card: {
      width: "100%",
      height: 220,
      marginBottom: 30,
    },
    body: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 10,
      marginRight: 20,
    },
    status: {
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },
    control: {
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "space-between",
      alignItems: "center",
      margin: 10,
    },

    background: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: "100%",
    },
  });
