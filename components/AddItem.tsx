import React, { useState, useRef, useCallback } from 'react';
import {
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { uuidv4 } from '../utils';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';


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

interface IProps {
  addItem: (item: { id: string, text: string }) => void
}

const AddItem: React.FC<IProps> = ({ addItem }) => {
  const [text, setText] = useState<string>('');
  const inputRef = useRef<TextInput | null>(null);

  const handleChangeText = useCallback((textValue: string): void => {
    setText(textValue);
  }, [setText]);

  const refreshInput = useCallback((): void => {
    if (inputRef && inputRef.current) {
      inputRef.current.blur();
      inputRef.current.clear();
    }
    setText('');
  }, [inputRef, setText]);

  const handlePressItem = useCallback((): void => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'Ok' }]);
    } else {
      addItem({ id: uuidv4(), text });
      refreshInput()
    }
  }, [text, addItem, refreshInput]);

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
