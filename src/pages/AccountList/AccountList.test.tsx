import { render, waitFor } from '@testing-library/react';
import { mock, mockNav, providerWrapper } from '../../service/__mock__';
import AccountList from './AccountList';

describe('AccountList component', () => {
  it('should navigate to login page incase there is no token in sessionStorage.', () => {
    render(<AccountList />, { wrapper: providerWrapper() });

    expect(window.sessionStorage.getItem('access_token')).not.toBeDefined();

    expect(mockNav).toBeCalledWith('/');
  });

  describe('Rendering account list', () => {
    beforeAll(() => {
      mock
        .onGet('/accounts')
        .replyOnce(200)
        .onGet('/accounts')
        .replyOnce(400)
        .onGet('/accounts')
        .replyOnce(200);
    });

    afterAll(() => mock.reset());

    it('should render account list with rendering success', async () => {
      const { getByTestId } = render(<AccountList />, { wrapper: providerWrapper() });

      await waitFor(() => getByTestId('data-component'));

      expect(getByTestId('data-component')).toBeInTheDocument();
    });

    it('should render Erorr component with rendering error', async () => {
      const { getByTestId } = render(<AccountList />, { wrapper: providerWrapper() });

      await waitFor(() => getByTestId('error-component'));

      expect(getByTestId('error-component')).toBeInTheDocument();
    });

    it('should render Loading component while loading', async () => {
      const { getByTestId } = render(<AccountList />, { wrapper: providerWrapper() });

      await waitFor(() => expect(getByTestId('loading-component')).toBeInTheDocument());

      expect(getByTestId('loading-component')).toBeInTheDocument();
    });
  });
});

export default {};
