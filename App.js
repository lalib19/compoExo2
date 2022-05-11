import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>   
      <Image style={styles.image} source={require('./rover.jpg')} />
      <Text style={styles.text}>Le rover Opportunity</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain', 
    width: "75%",
    
  },
  text: {
    width: "25%",
  }




});
