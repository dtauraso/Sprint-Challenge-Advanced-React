import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
// https://github.com/testing-library/jest-dom/
import '@testing-library/jest-dom/extend-expect'

// import {toBeInTheDocument, toHaveClass} from '@testing-library/jest-dom'

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// test for displays
test('testing search title', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/search-title/i);
  // console.log(linkElement)
  expect(linkElement).toBeInTheDocument();
});


// tests for form stuff
test('submit test', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/submit/i);
  console.log(linkElement)
  expect(linkElement).toBeInTheDocument();
});

test('clear test', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/clear/i);
  console.log(linkElement)
  expect(linkElement).toBeInTheDocument();
});

test('search-field test', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/search-field/i);
  console.log(linkElement)
  expect(linkElement).toBeInTheDocument();
});

