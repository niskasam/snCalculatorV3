import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, Alert} from 'react-native';

export default function History( {route, navigation} ) {

    let {history} = route.params;
    

  return (
   <View style={styles.container}>

    <Text style={{marginTop:10}}> Calculations history </Text>

    <FlatList style={styles.list}
          keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{justifyContent: 'center', alignItems:"center", marginTop: 20,}}
            data={history}
            renderItem={({ item }) =>
            <Text>{item.key} {item.key4} {item.key2} = {item.key3}</Text>
            }
    />

    {/* <Pressable onPress={deleteAll}>
        <Text style={styles.clearTxt}>Clear history</Text>
    </Pressable> */}
    

   </View>
  );
}





const styles = StyleSheet.create({
  
container: {
    alignItems:'center',
    justifyContent: 'center',

  },
   history: {
   height: 70,
   padding: 15,
   backgroundColor: 'darkslateblue',
   marginTop: 70,
  },

  text: {
      color: '#fff',
      fontSize: 24,
      textAlign: 'center',
  },
  clearTxt:{
    backgroundColor: '#E69EAB',
    color: 'black',
    width: 200,
    padding: 20,
    textAlign: 'center',
    fontWeight: "bold",
    marginTop: 20,
  },

});
