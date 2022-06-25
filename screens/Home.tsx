import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, WhiteSpace, WingBlank } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={["#030852", "#10239e", "#2f54eb", "#597ef7"]}
        style={styles.background}
      >
        <View style={styles.header}>
          <Image source={require("../assets/images/whiteLogoTractian.png")} />
          <Text style={styles.text}> Please, select your Service </Text>
        </View>

        <View style={styles.container}>
          <WingBlank size="md" style={styles.wingblank}>
            <Button
              type="ghost"
              size="large"
              onPress={() => navigation.navigate("Assets")}
            >
              <AntDesign size={26} name="tool" />
              Assets
            </Button>
          </WingBlank>

          <WingBlank size="md" style={styles.wingblank}>
            <Button
              type="ghost"
              size="large"
              onPress={() => navigation.navigate("Users")}
            > 
              <AntDesign size={26} name="team" />
              Users
            
              
            </Button>
          </WingBlank>

          <WingBlank size="md" style={styles.wingblank}>
            <Button
              type="ghost"
              size="large"
              onPress={() => navigation.navigate("Units")}
            >
              <AntDesign size={26} name="tagso" />
              Units
            </Button>
          </WingBlank>

          <WingBlank size="md" style={styles.wingblank}>
            <Button
              type="ghost"
              size="large"
              onPress={() => navigation.navigate("Companies")}
            >
              <AntDesign size={26} name="isv" />
              Companies
            </Button>
          </WingBlank>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  wingblank: {

    backgroundColor: "#adc6ff",
   
    marginBottom: 32,
    marginLeft: 20,
    marginRight: 20,
    zIndex: 3,
  },
});
