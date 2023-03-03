import { render, waitFor } from '@testing-library/react';
import { mockUsers } from '../../fixture/mockUserData';
import { mock, mockNav, providerWrapper } from '../../service/__mock__';
import UserList from './UserList';

describe('UserList Page', () => {
  it('should navigate to login page incase there is no token in sessionStorage.', () => {
    render(<UserList />, { wrapper: providerWrapper() });

    expect(window.sessionStorage.getItem('access_token')).not.toBeDefined();
    expect(mockNav).toBeCalledWith('/');
  });

  describe('should render user list', () => {
    it('with rendering success', async () => {
      mock.onGet('/users').replyOnce(200, mockUsers);

      const { getByText } = render(<UserList />, { wrapper: providerWrapper() });

      await waitFor(() => expect(getByText(/Joey/)).toBeInTheDocument());

      expect(getByText(/Joey/)).toBeInTheDocument();
    });

    it('with rendering error', async () => {
      mock.onGet('/users').replyOnce(400);

      const { getByText } = render(<UserList />, { wrapper: providerWrapper() });

      await waitFor(() => expect(getByText(/error/i)).toBeInTheDocument());

      expect(getByText(/error/i)).toBeInTheDocument();
    });

    it('while loading', async () => {
      mock.onGet('/users').replyOnce(400);

      const { getByText } = render(<UserList />, { wrapper: providerWrapper() });

      await waitFor(() => expect(getByText(/loading/i)).toBeInTheDocument());

      expect(getByText(/loading/i)).toBeInTheDocument();
    });
  });

  describe('should filter list by both staff and active', () => {
    it('render all list as default', async () => {});
  });
  //
  // render another page when click page move button => prev ? page - 1 : page + 1
});

export default {};
