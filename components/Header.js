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

const Header = ({ title }) => {
  return (
    <StyledView>
      <StyledText>{title}</StyledText>
    </StyledView>
  );
};

Header.defaultProps = {
  title: 'Shopping List',
};

export default Header;
