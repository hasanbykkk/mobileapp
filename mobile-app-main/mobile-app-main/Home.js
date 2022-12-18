import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFCD00'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10,
    marginTop: 10,
   
  }
});

const Home = (props) => {
  return(
    <View style={styles.container}>
      <View>

        <Text style={{fontSize:25,backgroundColor: 'gary' }}>Start your dairy</Text>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Memo')}>
        <Text>Write</Text>
        </TouchableOpacity>
        </View>
       
    </View>
  )
}

export default Home;