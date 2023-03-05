import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { filteredMockUser, mockUsers } from '../../fixture/mockUserData';
import instance from '../../service/http';
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

  it('should navigate to user detail page when user name is clicked', async () => {
    mock.onGet('/users').replyOnce(200, mockUsers);

    const { getByText } = render(<UserList />, { wrapper: providerWrapper() });

    await waitFor(() => expect(getByText(/Joey/)).toBeInTheDocument());

    expect(getByText(/Joey/)).toBeInTheDocument();

    userEvent.click(getByText(/Joey/));

    expect(mockNav).toHaveBeenCalledWith('/users/1');
  });

  it('should show user create modal when add button is clicked', async () => {
    mock.onGet('/users').replyOnce(200, mockUsers);

    const { getByText } = render(<UserList />, { wrapper: providerWrapper() });

    await waitFor(() => expect(getByText(/Joey/)).toBeInTheDocument());

    expect(getByText('add')).toBeInTheDocument();

    act(() => userEvent.click(getByText('add')));

    expect(getByText('create new user')).toBeInTheDocument();
  });

  it('should delete user data when delete button is clicked', async () => {
    mock.onGet('/users').replyOnce(200, [mockUsers[0]]).onDelete('/users/1').replyOnce(200);

    const { getByText } = render(<UserList />, { wrapper: providerWrapper() });

    await waitFor(() => expect(getByText('delete')).toBeInTheDocument());

    userEvent.click(getByText('delete'));

    await waitFor(() => expect(mock.history.delete.length).toBe(1));

    expect(mock.history.delete.length).toBe(1);
  });
  //   describe('should filter list by both staff and active', () => {
  //     it('render staff list when select staff option in select element', async () => {
  //       mock.onGet('/users').replyOnce(200, mockUsers);
  //       mock.onGet('/users', { params: { is_staff: 'true' } }).replyOnce(200, filteredMockUser);

  //       const { getByText, getByLabelText } = render(<UserList />, { wrapper: providerWrapper() });

  //       await waitFor(() => expect(getByLabelText(/filter staff/)).toBeInTheDocument());

  //       expect(getByText(/joey/i)).toBeInTheDocument();

  //       userEvent.selectOptions(getByLabelText(/filter staff/), 'staff');

  //       await waitFor(() => expect(getByText(/marvin/i)).toBeInTheDocument());

  //       expect(getByText(/joey/i)).not.toBeInTheDocument();
  //     });
  //   });
  //
  // render another page when click page move button => prev ? page - 1 : page + 1
});

export default {};
