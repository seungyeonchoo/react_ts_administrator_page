import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { providerWrapper, mock, mockNav } from '../../service/__mock__';
import Auth from './Auth';

const setUp = () => {
  const { container, getByText } = render(<Auth />, { wrapper: providerWrapper() });
  const emailInput = container.querySelector(`input[name='email']`) as HTMLInputElement;
  const passwordInput = container.querySelector(`input[name='password']`) as HTMLInputElement;
  const loginButton = getByText(/sign/i) as HTMLButtonElement;

  return { emailInput, passwordInput, loginButton, getByText };
};

describe('Auth Page', () => {
  it('should render default component', () => {
    const { emailInput, passwordInput, loginButton } = setUp();

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
    expect(loginButton).toBeDisabled();
  });

  it('should update input change', () => {
    const { emailInput, passwordInput } = setUp();

    userEvent.type(emailInput, 'abc');
    userEvent.type(passwordInput, 'def');

    expect(emailInput.value).toBe('abc');
    expect(passwordInput.value).toBe('def');
  });

  describe('should check if input value is valid', () => {
    it('both values are valid ', () => {
      const { emailInput, passwordInput, loginButton } = setUp();
      userEvent.type(emailInput, 'cos4338@gmail.com');
      userEvent.type(passwordInput, '123456789');

      expect(loginButton).not.toBeDisabled();
    });

    it('email input is invalid', () => {
      const { emailInput, passwordInput, loginButton } = setUp();
      userEvent.type(emailInput, 'cos4338gmail.com');
      userEvent.type(passwordInput, '123456789');

      expect(loginButton).toBeDisabled();
    });

    it('password input is invalid', () => {
      const { emailInput, passwordInput, loginButton } = setUp();
      userEvent.type(emailInput, 'cos4338@gmail.com');
      userEvent.type(passwordInput, '789');

      expect(loginButton).toBeDisabled();
    });
  });

  describe('should submit input to login', () => {
    it('success to login', async () => {
      const { emailInput, passwordInput, loginButton } = setUp();
      userEvent.type(emailInput, 'cos4338@gmail.com');
      userEvent.type(passwordInput, '123456789');

      mock.onPost('/signin').reply(200, { accessToken: 'a', user: { id: 1 } });

      await waitFor(() => userEvent.click(loginButton));

      await waitFor(() => expect(emailInput.value).toBe(''));
      await waitFor(() => expect(mockNav).toHaveBeenCalledWith('/users'));

      expect(window.sessionStorage.getItem('access_token')).toBe('a');
      expect(sessionStorage.getItem('user_id')).toBe(1);
    });

    it('fail to login', async () => {
      const { emailInput, passwordInput, loginButton, getByText } = setUp();

      userEvent.type(emailInput, 'cos4338@gmail.com');
      userEvent.type(passwordInput, '123456789');

      mock.onPost('/signin').reply(500, {});

      await waitFor(() => userEvent.click(loginButton));

      await waitFor(() => expect(emailInput.value).toBe(''));
      await waitFor(() => expect(getByText(/Error/i)).toBeInTheDocument());
    });
  });
});

export default {};
