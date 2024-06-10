import React from 'react';
import renderer from 'react-test-renderer';
import TickerBox from './TickerBox';

describe('TickerBox', () => {
  it('renders correctly with given props', () => {
    const tree = renderer.create(
      <TickerBox
        src={{ uri: 'https://picsum.photos/200' }}
        name="Stock Name"
        ticker="SN"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with default image source', () => {
    const tree = renderer.create(
      <TickerBox
        name="Stock Name"
        ticker="SN"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});