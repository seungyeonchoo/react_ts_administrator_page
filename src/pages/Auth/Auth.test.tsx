import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useMutate from '../../hooks/useMutate';
import instance from '../../service/http';
import { createWrapper, mock } from '../../service/__mock__';
import Auth from './Auth';

const setUp = () => {
  const { container, getByText } = render(<Auth />, { wrapper: createWrapper() });
  const emailInput = container.querySelector(`input[name='email']`) as HTMLInputElement;
  const passwordInput = container.querySelector(`input[name='password']`) as HTMLInputElement;
  const loginButton = getByText(/login/i) as HTMLButtonElement;

  return { emailInput, passwordInput, loginButton };
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

  jest.mock('../../hooks/uesMutate', () => ({ useMutate: jest.fn() }));

  describe('should submit input to login', () => {
    it('success to login', async () => {
      const { emailInput, passwordInput, loginButton } = setUp();
      userEvent.type(emailInput, 'cos4338@gmail.com');
      userEvent.type(passwordInput, '123456789');

      // sessionStorage에 토큰 저장 확인
      // sessionStorage에 id 저장 확인
      // 페이지 이동
    });
    it('fail to login', async () => {
      // inputValue 초기화 : userEvent()
      // 에러 메세지 렌더 : toBeInTheDocument()
    });
  });
});

export default {};
