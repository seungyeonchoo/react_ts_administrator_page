import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { filteredMockUser, mockUsers } from '../../fixture/mockUserData';
import { mock, mockNav, providerWrapper } from '../../service/__mock__';
import UserList from './UserList';

describe('UserList Page', () => {
  afterEach(() => {
    mock.reset();
  });

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
    mock
      .onGet('/users')
      .replyOnce(200, [mockUsers[0]])
      .onDelete('/users/1')
      .replyOnce(200)
      .onGet('/users')
      .replyOnce(200, []);

    const { getByText, queryByText } = render(<UserList />, { wrapper: providerWrapper() });

    await waitFor(() => expect(getByText('delete')).toBeInTheDocument());

    userEvent.click(getByText('delete'));

    await waitFor(() => expect(mock.history.delete.length).toBe(1));

    expect(queryByText(/joey/i)).not.toBeInTheDocument();
  });

  describe('should filter list by both staff and active', () => {
    beforeEach(() => {
      mock.onGet('/users').reply((config: any) => {
        if (config.params.is_staff === 'true') return [200, filteredMockUser];
        if (config.params.is_active === 'false') return [200, [mockUsers[0]]];
        else return [200, mockUsers];
      });
    });

    it('render staff user list when select staff option in select element', async () => {
      const { getByText, getByLabelText, queryByText, getByRole } = render(<UserList />, {
        wrapper: providerWrapper(),
      });

      await waitFor(() => expect(getByText(/joey/i)).toBeInTheDocument());

      const staffFilter = getByLabelText(/filter staff/);

      expect(staffFilter).toBeInTheDocument();
      expect(getByText(/marvin/i)).toBeInTheDocument();
      expect(getByText(/joey/i)).toBeInTheDocument();

      userEvent.selectOptions(staffFilter, ['staff']);

      await waitFor(() => expect(queryByText(/joey/i)).not.toBeInTheDocument());

      const staffOpt = getByRole('option', { name: 'staff' }) as HTMLOptionElement;

      expect(staffOpt.selected).toBe(true);
      expect(getByText(/marvin/i)).toBeInTheDocument();
      expect(queryByText(/joey/i)).not.toBeInTheDocument();
    });

    it('render active user list when select staff option in select element', async () => {
      const { getByText, getByLabelText, getByRole, queryByText } = render(<UserList />, {
        wrapper: providerWrapper(),
      });

      await waitFor(() => expect(getByText(/joey/i)).toBeInTheDocument());

      const activeFilter = getByLabelText(/filter active/);

      expect(getByText(/joey/i)).toBeInTheDocument();
      expect(getByText(/marvin/i)).toBeInTheDocument();

      userEvent.selectOptions(activeFilter, ['inactive']);

      await waitFor(() => expect(queryByText(/marvin/i)).not.toBeInTheDocument());

      const activeOpt = getByRole('option', { name: 'inactive' }) as HTMLOptionElement;

      expect(activeOpt.selected).toBe(true);
      expect(queryByText(/marvin/i)).not.toBeInTheDocument();
      expect(getByText(/joey/i)).toBeInTheDocument();
    });
  });
  //
  // render another page when click page move button => prev ? page - 1 : page + 1
});

export default {};
