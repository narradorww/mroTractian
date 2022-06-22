import * as React from 'react';
import { useFetch } from "../hooks/useFetch";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { ICompanies } from '../interfaces/ICompanies';
import {
    Card,
    WingBlank,
    Button,
    InputItem,
    WhiteSpace,
  } from "@ant-design/react-native";
import { LinearGradient } from 'expo-linear-gradient';

    const path = "/companies";

export default function Companies ({navigation}: any) {
    const { data: companies } = useFetch<ICompanies | null>(path);
    return (
      <LinearGradient
      colors={["#030852","#10239e","#2f54eb","#597ef7"]}
      style={styles.background}>
        <ScrollView>
            <View>
            <InputItem clear  placeholder="Search by Name" ></InputItem>
        <WhiteSpace size="lg" />
                {companies?.map((companie: ICompanies) => {
                    return (
                        <WingBlank key={companie.id} size="md">
                            <Card style={styles.card}>
                                <Card.Header title={companie.name} style={{ width: 320 }} />

                                <Card.Body>
                                    <View style={styles.body}>
                                        <Text>ID: {companie.id}</Text>
                                        <Text>Name: {companie.name}</Text>
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
  background:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
},
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
  });