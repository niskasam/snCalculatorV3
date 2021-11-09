import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Button, Pressable } from 'react-native';

export default function Calculator({navigation}) {

  const addHandler = () => {
    const sum = (num + num2)
    const sign = "+"
    setResult(sum)
    setData([...data, { key: num, key2: num2, key3: sum, key4: sign}]);
    setNum('')
    setNum2('')
  }
  
  const subtractHandler = () => {
    const sum = (num - num2)
    const sign = "-"
    setResult(sum)
    setData([...data, { key: num, key2: num2, key3: sum, key4: sign}]);
    setNum('')
    setNum2('')
  }
  
  const multiplyHandler = () => {
    const sum = (num * num2)
    const sign = "*"
    setResult(sum)
    setData([...data, { key: num, key2: num2, key3: sum, key4: sign}]);
    setNum('')
    setNum2('')
  }
  
  const divideHandler = () => {
    const sum = (num / num2)
    const sign = "/"
    setResult(sum)
    setData([...data, { key: num, key2: num2, key3: sum, key4: sign}]);
    setNum('')
    setNum2('')
  }
  
  const clear = () => {
    const result = setResult('')
    setNum("")
    setNum2("")
  }

  const [num, setNum] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(num + num2)
  const [data, setData] = useState([]);

  return (
<View style={styles.container}>
        <View style={styles.body}>
          <TextInput 
            onChangeText={num => setNum(+num)}
            style={styles.input} 
            placeholder="Give first number"
            keyboardType="numeric"
            value={num.toString()}
            >
            
          </TextInput>
          <TextInput    
            onChangeText={num2 => setNum2(+num2)}
            style={styles.input} 
            placeholder="Give second number"
            keyboardType="numeric"
            value={num2.toString()}
            >
            
            </TextInput>
          
          <View style={styles.buttonStyle}>
            <Button title="  +  " color="green" onPress={addHandler}></Button>
            <Button title="  -  " color="red" onPress={subtractHandler}></Button>
            <Button title="  *  " color="black"onPress={multiplyHandler}></Button>
            <Button title="  /  " color="grey" onPress={divideHandler}></Button>
          
          </View>

          <Text style={{ marginTop: 50, fontSize: 30, color: "black", textAlign:"center"}}>Result: {result} </Text>
  
          <View style={styles.clear}>
            <Pressable onPress={clear}> 
              <Text style={styles.clearTxt}>Clear all</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('History', {history:data})}> 
              <Text style={styles.clearTxt}>Show history</Text>
            </Pressable>
          </View>
  
       
        
        </View>
  
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  body:{
    flex: 1,  
    justifyContent: 'center',  
    marginTop: 80,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    minWidth: "50%",
  },

  whiteTxt: {
    color: '#fff',
    marginTop: 20,
  
  },

  buttonStyle:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  clear: {
    alignItems: 'center',
    marginTop: 40,
    justifyContent: 'center',
    flexDirection:'row',
  },

  clearTxt:{
    backgroundColor: '#f3f3f3',
    color: 'black',
    width: 150,
    padding: 10,
    textAlign: 'center',
    fontWeight: "bold",
    borderRadius: 50,
    borderWidth: 1,
    margin: 5,
  },
});
