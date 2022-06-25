import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useFetch } from "../hooks/useFetch";
import { IAssets } from "../interfaces/IAssets";
import {
  Card,
  WingBlank,
  Button,
  InputItem,
  WhiteSpace,
} from "@ant-design/react-native";
import { LinearGradient } from "expo-linear-gradient";

const path = "/assets";

export default function Assets<IAssets> ({ navigation }: any) {
  const { data: assets } = useFetch<IAssets | null>(path);

  return (
    <LinearGradient
    colors={["#030852","#10239e","#2f54eb","#597ef7"]}
    style={styles.background}>
    <ScrollView>
   
      <View>
      
        <InputItem clear  placeholder="Search by Name" ></InputItem>
        <WhiteSpace size="lg" />
        {assets?.map((asset: IAssets) => {
          const id = asset.id;
          return (
            <WingBlank key={asset.id}size="md" >
              <Card style={styles.card}>
                <Card.Header title={asset.name} style={{ width: 320 }} extra={asset.id} />
                <Card.Body>
                  <View style={styles.body}>
                    <View style={styles.status}>
                      <Image
                        source={{ uri: asset.image }}
                        style={{ width: 100, height: 100 }}
                      />
                      {asset.status === "inAlert" && (
                        <Button type="ghost" size="small"  style={{backgroundColor:"#f5222d", width: 100, marginTop: 16}}>
                        <Text style={{marginTop: 20 }}>In Alert</Text>
                        </Button>
                      )}
                      {asset.status === "inOperation" && (
                        <Button type="ghost" size="small"  style={{backgroundColor:"#237804",width: 100, marginTop: 16}}>
                        <Text style={{marginTop: 20 }}>In Operation</Text>
                        </Button>
                      )}
                      {asset.status === "inDowntime" && (
                        <Button type="ghost" size="small"  style={{backgroundColor:"#faad14",width: 100, marginTop: 16}}>
                        <Text style={{marginTop: 20 }}>In Downtime</Text>
                        </Button>
                      )}
                      
                    </View>
                    <View style={styles.control}>
                      <Text>HealthScore</Text>
                      <Text>{asset.healthscore}%</Text>
                      <Button style={{marginTop: 60}}type='ghost' size='small' onPress={()=>navigation.navigate('Asset', {id: id} )}>View {asset?.name} </Button>
                    </View>
                  </View>
                </Card.Body>
              </Card>
            </WingBlank>
          );
        })}
       
      </View>
      
    </ScrollView>
    </LinearGradient>
  );
}

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
   
  },
});