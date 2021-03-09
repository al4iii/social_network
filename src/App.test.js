import { render, screen } from '@testing-library/react';
import MyApp from "./App"
import React from "react";
import ReactDOM from "react-dom";

// test('renders learn react link', () => {
//   render(<MyApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MyApp />, div)  
  ReactDOM.unmountComponentAtNode(div)
});
