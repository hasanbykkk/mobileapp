import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
//onPress={() => props.navigation.navigate('Home')
const Settings = (props) => {
  
  const [writeMode, setWriteMode] = useState(false); 
  const [txt, setTxt] = useState('');

  const oriDiary = [
    {
      id:'1',
      diary:'It was rainy'
    },
    {
      id:'2',
      diary:'It was sunny'
    }
  ];

  const [diarys, setdiarys] = useState(oriDiary);
  const [idx, setIdx] = useState(3);

  const addDiary = () => {
    let a = {id:idx, diary:txt};
    setdiarys(prev=>[...prev,a]); //[]로 배열화 하는것 왜냐? 위가 배열이기에.
    setWriteMode(false); // 화면이 닫히게 하는것.

    setIdx(prev=>prev+1);
  }

  const render = ({item}) => {
    return(
      <View style={{padding:10, borderBottomColor:'#ddd', borderBottomWidth:1, flex: 1, }}>
        <Text>{item.diary}</Text>
      </View>
    )
  }


  if(writeMode){
    return (
      <SafeAreaView style={styles.container2}>
      <View style={{flex:1, backgroundColor:'#FFCD00'}}>
        <View style={{flexDirection:'row', fontSize:20, justifyContent:'space-between', }}>
          <TouchableOpacity style={{padding:15,}} onPress={()=>setWriteMode(false)}>
            <Text>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{padding:15,}} onPress={()=>addDiary()}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{flex:1, backgroundColor:'#fff', }}>
        <TextInput
          style={{ backgroundColor: 'gray', borderWidth: 1, flex: 1, padding: 15, }}
          onChangeText={text => setTxt(text)}
          multiline
         />
        </View>
        <StatusBar style="auto" />
      </View>
      </SafeAreaView>
    );
  }
  
  return (

    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor:'#FFCD00', 
        justifyContent:'space-between',
        flexDirection:'row',
        padding:10,
        }}>

          <Text style={{fontSize:20, }}>Write your day!</Text>
          <TouchableOpacity onPress={()=>setWriteMode(true)}>
            <AntDesign name="pluscircleo" size={12} color="red" />
          </TouchableOpacity>
      </View>
      <View style={{flex:1, backgroundColor:'gray'}}>
        <FlatList data={diarys} renderItem={renderDiary} style={{flex:1}}/>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCD00', 
  },
  container2: {
    flex: 1,
    backgroundColor: '#FFCD00',
  },
});

export default Settings;