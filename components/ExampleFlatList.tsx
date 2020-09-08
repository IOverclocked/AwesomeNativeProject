import React from 'react';
import { View, Text, FlatList, SectionList } from 'react-native';

const list = [
  { key: 'Devin' },
  { key: 'Dan' },
  { key: 'Dominic' },
  { key: 'Jackson' },
  { key: 'James' },
  { key: 'Joel' },
  { key: 'John' },
  { key: 'Jillian' },
  { key: 'Jimmy' },
  { key: 'Julie' },
];

const ExampleFlatList: React.FC = () => {
  const handleRenderItem = (item: { key: string }) => {
    return <Text>{item.key}</Text>;
  };

  return (
    <View>
      <FlatList data={list} renderItem={({ item }) => handleRenderItem(item)} />
      <Text>-------------------------------------------------------------</Text>
      <SectionList
        sections={[
          { title: 'D', data: ['David', 'Dan', 'Dominic'] },
          { title: 'J', data: ['Jacson', 'James', 'Jillian'] },
        ]}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={{ color: 'red' }}>Section: {section.title}</Text>
        )}
        keyExtractor={(item: string) => item}
      />
    </View>
  );
};

export default ExampleFlatList;
