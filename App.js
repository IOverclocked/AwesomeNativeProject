import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { uuidv4 } from './utils';
import ListItem from './components/ListItem';
import Header from './components/Header';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
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

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
