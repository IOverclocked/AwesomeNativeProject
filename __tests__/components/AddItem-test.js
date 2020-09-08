import React from 'react';
import App from '../../App';
import { render, fireEvent } from '@testing-library/react-native';

it('User can add an item', () => {
  const { getByPlaceholderText, getByText, getAllByText } = render(
    <App />
  );

  fireEvent.changeText(
    getByPlaceholderText('Add item...'),
    'banana'
  );

  fireEvent.press(getByText('Add Item'));

  const bananaElemets = getAllByText('banana');
  expect(bananaElemets).toHaveLength(1);
})