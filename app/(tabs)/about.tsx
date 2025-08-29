import {Text, View, StyleSheet} from 'react-native'

export default function aboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
    },
    text: {
        color: '#fff',
    },
})