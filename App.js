import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style = {{backgroundColor:"red", height:"34%", width: 
      "100%", alignItems:"center", justifyContent:'center' }}>
         <Text style = {{color:"white" }}>Open up App.js to start working on your app!</Text>
      </View>

       <View style = {{backgroundColor:"yellow", height:"34%", width: 
      "100%", alignItems:"center", justifyContent:'center' }}>
         <Text style = {{color:"white" }}>Open up App.js to start working on your app!</Text>
      </View>

       <View style = {{backgroundColor:"blue", height:"34%", width: 
      "100%", alignItems:"center", justifyContent:'center' }}>
         <Text style = {{color:"white" }}>Open up App.js to start working on your app!</Text>
      </View>
     
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
});
