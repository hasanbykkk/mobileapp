import { Text, View, TouchableOpacity, StyleSheet, TextInput,  } from 'react-native';
import React, {useState} from 'react';

const [txt, setTxt] = useState('');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    marginTop: 10
  }
});



const Settings = (props) => {
  return(
    <View>
      <View style={{flex:1, backgroundColor: 'gray', }}>
         <TextInput 
            style= {{ backgroundColor: '#fff', flex:1,padding: 10,}}
            onChangeText={text => setTxt(text)}
            multiline
            />
         </View>
      <View>
      <TouchableOpacity onPress={()=>addDiary()} style={{flex:1,alignItems: 'center', justifyContent: 'center', backgroundColor:'green'}}>
      <Text>save</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Settings;