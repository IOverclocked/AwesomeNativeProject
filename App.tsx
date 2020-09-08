import React, { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { uuidv4 } from './utils';
import styled from 'styled-components/native'
import ListItem from './components/ListItem';
import Header from './components/Header';
import AddItem from './components/AddItem';
import ExampleScrollView from './components/ExampleScrollView';
import ExampleFlatList from './components/ExampleFlatList';

const StyledView = styled.View`
  flex: 1;
`

const App = () => {
  const [items, setItems] = useState <{ id: string, text: string }[]>([
    {
      id: uuidv4(),
      text: 'Milk',
    },
    {
      id: uuidv4(),
      text: 'Eggs',
    },
    {
      id: uuidv4(),
      text: 'Bread',
    },
    {
      id: uuidv4(),
      text: 'Juice',
    },
  ]);

  const deleteItem = useCallback((id: string): void => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }, [setItems]);

  const addItem = useCallback((item): void => {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  }, [setItems]);

  return (
    <StyledView>
      {/* crush curse */}
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={({ id }) => id}
      />

      {/* Examples from docs */}
      {/* <ExampleScrollView /> */}
      {/* <ExampleFlatList /> */}
    </StyledView>
  );
};

export default App;
