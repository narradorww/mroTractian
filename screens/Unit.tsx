import { Text, View, StyleSheet } from "react-native";
import { useFetch } from "../hooks/useFetch";

const path = "/units/1"

export default function Unit({ navigation }: any) {
    const { data: unit } = useFetch<any>(path);
    
    return (
        <View>
        <Text>{unit.id}</Text>
        <Text>{unit.name}</Text>
        <Text>{unit.companyId}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
});