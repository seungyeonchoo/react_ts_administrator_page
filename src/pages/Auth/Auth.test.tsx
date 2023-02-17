import { fireEvent, render, renderHook, waitFor } from '@testing-library/react';
import useMutate from '../../hooks/useMutate';
import { createWrapper } from '../../service/__mock__';
import Auth from './Auth';

describe('Auth Page', () => {
  describe('Login input and button', () => {
    it('update input value when login input change', () => {
      const { getByLabelText } = render(<Auth />);
      const emailInput = getByLabelText('email') as HTMLInputElement;

      expect(emailInput.value).toBe('');

      fireEvent.change(emailInput, { target: { value: '23' } });

      expect(emailInput.value).toBe('23');
    });

    it('button is abled when login inputs are valid', () => {
      const { getByRole, getByLabelText } = render(<Auth />);
      const emailInput = getByLabelText('email') as HTMLInputElement;
      const passwordInput = getByLabelText('password') as HTMLInputElement;
      const loginButton = getByRole('button') as HTMLButtonElement;

      expect(emailInput.value).toBe('');
      expect(passwordInput.value).toBe('');
      expect(loginButton.disabled).toBe(true);

      fireEvent.change(emailInput, { target: { value: 'cos4338@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: '12345678' } });

      expect(emailInput.value).toBe('cos4338@gmail.com');
      expect(passwordInput.value).toBe('12345678');
      expect(loginButton.disabled).toBe(false);
    });

    it('button is abled when login inputs are valid', () => {
      const { getByRole, getByLabelText } = render(<Auth />);
      const emailInput = getByLabelText('email') as HTMLInputElement;
      const passwordInput = getByLabelText('password') as HTMLInputElement;
      const loginButton = getByRole('button') as HTMLButtonElement;

      expect(emailInput.value).toBe('');
      expect(passwordInput.value).toBe('');
      expect(loginButton.disabled).toBe(true);

      fireEvent.change(emailInput, { target: { value: 'cosmailcom' } });

      fireEvent.change(passwordInput, { target: { value: '125678' } });

      expect(emailInput.value).toBe('cosmailcom');
      expect(passwordInput.value).toBe('125678');
      expect(loginButton.disabled).toBe(true);
    });
  });

  describe('Click Login button', () => {
    it('with Success', async () => {
      const { getByRole, getByLabelText } = render(<Auth />);
      const emailInput = getByLabelText('email') as HTMLInputElement;
      const passwordInput = getByLabelText('password') as HTMLInputElement;
      const loginButton = getByRole('button') as HTMLButtonElement;

      const { result } = renderHook(
        () =>
          useMutate('/signin', 'post', { email: emailInput.value, password: passwordInput.value }),
        {
          wrapper: createWrapper(),
        }
      );

      fireEvent.change(emailInput, { target: { value: 'cos4338@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: '12345678' } });
      fireEvent.click(loginButton);

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      expect(result.current.data).toBeDefined();
    });
    // it('with Error', () => {});
    // it('while Loading', () => {});
  });
});

export default {};
