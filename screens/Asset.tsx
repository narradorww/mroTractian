import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Card, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { useFetch } from "../hooks/useFetch";
import { LinearGradient } from "expo-linear-gradient";
import  window  from "../constants/Layout";
import { IAssets } from "../interfaces/IAssets";

const path = "/assets/"


export default function Asset({ route, navigation }: any) {
    const { id } = route.params;
const { data: asset } = useFetch<any>(path+id);

    return(
        <LinearGradient
        colors={["#030852","#10239e","#2f54eb","#597ef7"]}
        style={styles.background}>
        <ScrollView>
        <WhiteSpace size="lg" />
        <WingBlank size="md" >
            <Card style={styles.card}>
                <Card.Header title={asset?.name} style={{ width: 320 }} extra={asset?.id}/>
                
                <Card.Body>
               < View style={styles.body}>
                    <View style={styles.status}>
                      <Image
                        source={{ uri: asset?.image }}
                        style={{ width: 100, height: 100 }}
                      />
                      {asset?.status === "inAlert" && (
                        <Button type="ghost" size="small"  style={{backgroundColor:"#f5222d", width: 100, marginTop: 16}}>
                        <Text style={{marginTop: 20 }}>In Alert</Text>
                        </Button>
                      )}
                      {asset?.status === "inOperation" && (
                        <Button type="ghost" size="small"  style={{backgroundColor:"#237804",width: 100, marginTop: 16}}>
                        <Text style={{marginTop: 20 }}>In Operation</Text>
                        </Button>
                      )}
                      {asset?.status === "inDowntime" && (
                        <Button type="ghost" size="small"  style={{backgroundColor:"#faad14",width: 100, marginTop: 16}}>
                        <Text style={{marginTop: 20 }}>In Downtime</Text>
                        </Button>
                      )}
                      
                    </View>
                    <View style={styles.control}>
                      <Text>HealthScore</Text>
                      <Text>{asset?.healthscore}%</Text>
                      <Button style={{marginTop: 60}}type='ghost' size='small' onPress={()=>navigation.navigate('Asset')}>View {asset?.name} </Button>
                    </View>
                    
                  </View>
                    <View>
                    <Text> Technical Features</Text>    
                    </View>

                    <View>
                    <Text>Model: {asset?.model}</Text>
                    </View>

                    <View>
                    <Text>Specifications:</Text>
                     { Object.keys(asset?.specifications).map((key: string) => {
                        return (
                            <Text>{key}: {asset?.specifications[key]}</Text>
                        )
                    }
                     )}
                    </View>

                    <View>
                    <Text>Metrics:</Text>
                     { Object.keys(asset?.metrics).map((key: string) => {
                        return (
                            <Text>{key}: {asset?.metrics[key]}</Text>
                        )
                    }
                     )}
                    </View>

                    <View>
                    <Text>Unit Id: {asset?.unitId}</Text>
                    </View>

                    <View>
                    <Text>Company Id: {asset?.companyId}</Text>
                    </View>
                   
                    
                </Card.Body>
            </Card>
        </WingBlank>
        </ScrollView>
        </LinearGradient>
    )
}



const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#030852",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    card: {
        width: window.window.width * 0.9,
        height: window.window.height * 0.9,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    body: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        paddingTop: window.window.height * 0.1,
        paddingBottom: window.window.height * 0.1,
    },
});
                   