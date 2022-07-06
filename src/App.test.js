import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'

test('renders learn react link', () => {
<Provider store={store}>
  render(<App />);

</Provider>
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
