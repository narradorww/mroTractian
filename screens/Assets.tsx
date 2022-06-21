import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useFetch } from "../hooks/useFetch";
import Colors from "../constants/Colors";

import { IAssets } from "../interfaces/IAssets";
import {
  Card,
  WingBlank,
  Button,
} from "@ant-design/react-native";

const url = "https://my-json-server.typicode.com/tractian/fake-api/assets";

export default function Assets() {
  const { data: assets } = useFetch<IAssets | null>(url);

  return (
    <ScrollView>
      <View>
        {assets?.map((asset) => {
          return (
            <WingBlank size="md" style={{ backgroundColor: "#125af6" }}>
              <Card style={styles.card}>
                <Card.Header title={asset.name} style={{ width: 320 }} />
                <Card.Body>
                  <View style={styles.body}>
                    <View style={styles.status}>
                      <Image
                        source={{ uri: asset.image }}
                        style={{ width: 100, height: 100 }}
                      />
                      <Text style={{marginTop: 20 }}>{asset.status}</Text>
                    </View>
                    <View style={styles.control}>
                      <Text>HealthScore</Text>
                      <Text>{asset.healthscore}%</Text>
                      <Button style={{marginTop: 40}}type='ghost' size='large'>View {asset.name} </Button>
                    </View>
                  </View>
                </Card.Body>
              </Card>
            </WingBlank>
          );
        })}
      </View>
    </ScrollView>
  );
}

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
});