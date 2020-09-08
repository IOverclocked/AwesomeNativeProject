import React, { useState, useRef } from 'react';
import {
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { uuidv4 } from '../utils';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const StyledTextInput = styled.TextInput`
  border: 1px solid lightblue;
  padding: 15px;
  font-size: 20px;
  color: #000;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: lightblue;
  padding: 15px;
  border: 5px solid #fff;
`;

const StyledTextInBtn = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 20px;
`

const AddItem = ({ addItem }) => {
  const [text, setText] = useState('');
  const inputRef = useRef(null)

  const handleChangeText = (textValue) => {
    setText(textValue);
  };

  const refreshInput = () => {
    inputRef.current.blur()
    inputRef.current.clear()
    setText('')
  }

  const handlePressItem = (e) => {
    console.log(e)
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'Ok' }]);
    } else {
      addItem({ id: uuidv4(), text });
      refreshInput()
    }
  };

  return (
    <View>
      <StyledTextInput
        ref={inputRef}
        placeholder="Add item..."
        value={text}
        onChangeText={handleChangeText}
      />
      <StyledTouchableOpacity onPress={handlePressItem}>
        <StyledTextInBtn>
          Add Item
          <Icon name="plus" size={20} />
        </StyledTextInBtn>
      </StyledTouchableOpacity>
    </View>
  );
};

export default AddItem;
