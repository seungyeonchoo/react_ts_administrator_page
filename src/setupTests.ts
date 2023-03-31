// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { mock, mockNav } from './service/__mock__';

beforeAll(() => {
  mock.reset();
});

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockNav,
}));

const localStorageMock = (function () {
  let store: { [name: string]: string } = {};

  const getItem: (key: string) => string = key => store[key];
  const setItem: (key: string, value: string) => void = (key, value) => (store[key] = value);
  const removeItem: (key: string) => void = key => delete store[key];
  const clear: () => void = () => (store = {});

  return { getItem, setItem, removeItem, clear };
})();

Object.defineProperty(window, 'sessionStorage', { value: localStorageMock });
