import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
    it('should render correctly and handle text input with debounce', async () => {
      const setSearchQuery = jest.fn();
      const { getByTestId } = render(<SearchBar setSearchQuery={setSearchQuery} />);
      const input = getByTestId('search');
      fireEvent.changeText(input, 'AAPL');
      await waitFor(() => {
        expect(setSearchQuery).toHaveBeenCalledWith('AAPL');
      }, { timeout: 1500 });
    });
  });