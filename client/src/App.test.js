import React from 'react';
import ReactDOM from 'react-dom';
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

// test('test', () => {
//   const { getByTestId } = render(<App />);
//   const linkElement = getByTestId(/strikes/i);
//   // console.log(linkElement)
//   expect(linkElement).toBeInTheDocument();
// });
