import React from 'react';
import * as glamor from 'glamor';
import renderer from 'react-test-renderer';
import serializer from 'jest-glamor-react';
import rhythm from '../../index';

expect.addSnapshotSerializer(serializer);

const baseline = rhythm.configure();

function Element(props) {
  const className = glamor.css({
    ...baseline(16),
  });
  return <div className={`${className}`} />;
}

describe('works with galmour', () => {
  it(`renders component with correct 'font-size' and 'line-height'`, () => {
    const tree = renderer.create(<Element />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
