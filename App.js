import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform, ScrollView } from 'react-native';
import ToDo from './ToDo';

const { height, width } = Dimensions.get('window');
const App = () => {
  const [newTodo, setNewTodo] = useState('');

  const onChangeNewTodo = (e) => {
    // setNewTodo(e.target.value);
    setNewTodo(e);
    console.log(newTodo);
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Kawai To Do</Text>
      <View style={styles.card}>
        <TextInput 
        onChangeText={onChangeNewTodo} 
        value={newTodo} 
        style={styles.input} 
        placeholder={"New To Do"} 
        placeholderTextColor={'#999'}
        returnKeyType={'done'}
        autoCorrect={false}
        />
        <ScrollView contentContainerStyle={styles.toDos}>
          <ToDo/>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginTop: 40,
    fontWeight: '200',
    marginBottom: 30,
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50, 50, 50)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0,
        },
      },
      android: {
        elevation: 3
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25,
  },
  toDos: {
    alignItems: 'center',
  }
});

export default App;
