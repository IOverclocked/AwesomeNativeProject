import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { uuidv4 } from '../utils';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({ addItem }) => {
  const [text, setText] = useState('');

  const handleChangeText = (textValue) => {
    setText(textValue);
  };

  const handlePressItem = () => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'Ok' }]);
    } else {
      addItem({ id: uuidv4(), text })
    }
  }

  return (
    <View>
      <TextInput
        placeholder="Add item..."
        style={styles.input}
        value={text}
        onChangeText={handleChangeText}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={handlePressItem}>
        <Text style={styles.btnText}>
          Add Item &nbsp;
          <Icon name="plus" size={20} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'lightblue',
    borderWidth: 1,
    padding: 15,
    fontSize: 20,
    color: '#000',
  },
  btn: {
    backgroundColor: 'lightblue',
    padding: 15,
    borderColor: '#fff',
    borderWidth: 5,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
});

export default AddItem;
