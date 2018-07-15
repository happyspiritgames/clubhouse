import * as enzyme from 'enzyme';
import * as React from 'react';
import Hello from './Hello';

it('renders when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' />);
  expect(hello.find(".greeting").text()).toEqual('Hello, Daniel.')
});

it('renders with enthusiasm greater than 0', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={1} />);
  expect(hello.find(".greeting").text()).toEqual('Hello, Daniel!');
});

it('throws when enthusiasm is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={-1} />);
  }).toThrow();
});
