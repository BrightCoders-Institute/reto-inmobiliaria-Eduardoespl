/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import VerticalList from '../components/verticalList';
import InmobiliariaCard from '../components/InmobiliariaCard';

describe('Test in App', () => {
  it('renders the app correctly', () => {
    renderer.create(<App />);
  });
  it('renders the correct number of items', () => {
    const {getAllByTestId} = render(<VerticalList />);
    const items = getAllByTestId('inmobiliariaCard');
    expect(items.length).toBe(1);
  });
  //write a test for the InmobiliariaCard component that checks that the title is correct
  it('renders the correct title', () => {
    const {getByTestId} = render(
      <InmobiliariaCard
        id={1}
        title={''}
        ubication={''}
        rooms={0}
        bathrooms={0}
        size={0}
        price={0}
        rate={0}
      />,
    );
    const title = getByTestId('title');
    expect(title.props.children).toBe('The Meadows');
  });
});
