import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity } from 'react-native';

const StyledTouchableOpacity = styled.TouchableOpacity`
  padding: 15px;
  background-color: #f8f8f8;
  border: 1px solid #eee;
`;

const StyledView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 20px;
`;

interface IProps {
  item: { id: string, text: string },
  deleteItem: (id: string) => void
}

const ListItem: React.FC<IProps> = ({ item, deleteItem }) => {
  const { id, text } = item;
  return (
    <StyledTouchableOpacity>
      <StyledView>
        <StyledText>{text}</StyledText>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteItem(id)}
        />
      </StyledView>
    </StyledTouchableOpacity>
  );
};

export default ListItem;
