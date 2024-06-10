import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import StockList from './StockList';
import { useGetStocks } from '../../hooks/useGetStocks';

jest.mock('../../hooks/useGetStocks');

const mockUseGetStocks = useGetStocks as jest.MockedFunction<typeof useGetStocks>;

describe('StockList', () => {
    beforeEach(() => {
        mockUseGetStocks.mockReturnValue({
            data: {
                pages: [
                    { data: { results: [{ name: 'Apple', ticker: 'AAPL' }, { name: 'Google', ticker: 'GOOGL' }] } },
                ],
            },
            refetch: jest.fn(),
            isRefetching: false,
            fetchNextPage: jest.fn(),
            isFetchingNextPage: false,
            isLoading: false,
            isFetching: false,
        });
    });

    it('renders correctly with given props', () => {
        const tree = renderer.create(
            <StockList searchQuery="test" />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders the loader when loading', () => {
        mockUseGetStocks.mockReturnValueOnce({
            data: null,
            refetch: jest.fn(),
            isRefetching: true,
            fetchNextPage: jest.fn(),
            isFetchingNextPage: true,
            isLoading: true,
            isFetching: false,
        });

        const tree = renderer.create(
            <StockList />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders the list of stocks correctly', () => {
        const { getByText } = render(<StockList searchQuery="test" />);

        expect(getByText('Apple')).toBeTruthy();
        expect(getByText('Google')).toBeTruthy();
    });
});
