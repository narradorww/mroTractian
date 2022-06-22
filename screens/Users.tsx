import { Card, Button, WingBlank  } from '@ant-design/react-native';
import * as React from 'react';
import { View, Text, ScrollView, StyleSheet  } from 'react-native'
import { useFetch } from '../hooks/useFetch';
import { IUsers } from '../interfaces/IUsers';
import { geekblue } from '@ant-design/colors';


const path = "/users";

export default function Users({navigation}: any) {
    const { data: users } = useFetch<IUsers | null>(path);


    return (
        <ScrollView >
      <View style={styles.container}>
        {users?.map((user) => {
          return (
            <WingBlank key={user.id} size="md" >
              <Card style={styles.card}>
                <Card.Header title={user.name} style={{ width: 320 }} />
                <Card.Body>
                  <View style={styles.body}>
                    <View style={styles.status}>
                      
                      <Text style={{marginTop: 20 }}>{user.email}</Text>
                    </View>
                    <View style={styles.control}>
                     <Text>Companie Id:</Text>
                      <Text>{user.companyId}</Text>
                      <Button style={{marginTop: 40}}type='ghost' size='large'>View {user.name} </Button>
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
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#2f54eb',
    },
    card: {
      width: "100%",
      height: 220,
      marginBottom: 20,
    },
    body: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 10,
      marginRight: 20,
      backgroundColor: 'geekblue-6',
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