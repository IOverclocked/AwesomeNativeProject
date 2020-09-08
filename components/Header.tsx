import React from 'react';
import { View, Text } from 'react-native'
import styled from 'styled-components/native';

const StyledView = styled.View`
  height: 60px;
  padding: 15px;
  background-color: lightblue;
`;

const StyledText = styled.Text`
  color: #fff;
  font-size: 23px;
  text-align: center;
`;

interface IProps {
  title?: string
}

const Header: React.FC<IProps> = ({ title = 'Shopping List' }) => {
  return (
    <StyledView>
      <StyledText>{title}</StyledText>
    </StyledView>
  );
};

export default Header;
