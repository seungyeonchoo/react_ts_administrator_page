import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockUserList from '../../fixture/MockUserList';
import { mock, mockNav, providerWrapper } from '../../service/__mock__';
import store from '../../store';

import UserList from './UserList';

const { userParams } = store.getState().params;
const filteredParams = { ...userParams, is_active: false, is_staff: false };

describe('UserList Page', () => {
  it('should navigate to login page incase there is no token in sessionStorage.', () => {
    render(<UserList />, { wrapper: providerWrapper() });

    expect(window.sessionStorage.getItem('access_token')).not.toBeDefined();

    expect(mockNav).toBeCalledWith('/');
  });

  describe('Rendering user list', () => {
    beforeAll(() => {
      mock
        .onGet('/users')
        .replyOnce(200)
        .onGet('/users')
        .replyOnce(400)
        .onGet('/users')
        .replyOnce(200);
    });

    afterAll(() => mock.reset());

    it('should render user list with rendering success', async () => {
      const { getByTestId } = render(<UserList />, { wrapper: providerWrapper() });

      await waitFor(() => getByTestId('data-component'));

      expect(getByTestId('data-component')).toBeInTheDocument();
    });

    it('should render Erorr component with rendering error', async () => {
      const { getByTestId } = render(<UserList />, { wrapper: providerWrapper() });

      await waitFor(() => getByTestId('error-component'));

      expect(getByTestId('error-component')).toBeInTheDocument();
    });

    it('should render Loading component while loading', async () => {
      const { getByTestId } = render(<UserList />, { wrapper: providerWrapper() });

      await waitFor(() => expect(getByTestId('loading-component')).toBeInTheDocument());

      expect(getByTestId('loading-component')).toBeInTheDocument();
    });
  });

  it('should open create user modal when add button is clicked', async () => {
    mock.onGet('/users').replyOnce(200);

    const { getByTestId, getByText } = render(<UserList />, { wrapper: providerWrapper() });

    await waitFor(() => getByTestId('data-component'));

    const addUserButton = getByText('add') as HTMLButtonElement;
    const createUserModal = getByTestId('create-user-modal') as HTMLDialogElement;

    expect(addUserButton).toBeInTheDocument();

    expect(createUserModal.open).toBe(false);

    act(() => userEvent.click(addUserButton));

    expect(createUserModal.open).toBe(true);
  });

  describe('Re-render after selecting filter', () => {
    beforeEach(() => {
      mock
        .onGet('/users', { params: userParams })
        .reply(200, MockUserList)
        .onGet('/users', { params: filteredParams })
        .reply(200, [MockUserList[1]]);
    });

    afterEach(() => {
      mock.reset();
    });

    it('should render default user list', async () => {
      const { getByText } = render(<UserList />, { wrapper: providerWrapper() });

      await waitFor(() => getByText(/marvin/i));

      expect(getByText(/marvin/i)).toBeInTheDocument();
      expect(getByText(/kay/i)).toBeInTheDocument();
    });

    it('should render filtered user list when filter is selected', async () => {
      const { getByText, getByLabelText, getByTestId, queryByText } = render(<UserList />, {
        wrapper: providerWrapper(),
      });

      await waitFor(() => getByTestId(/data/i));

      expect(getByText(/marvin/i)).toBeInTheDocument();
      expect(getByText(/kay/i)).toBeInTheDocument();

      expect(getByLabelText('active')).toBeInTheDocument();
      expect(getByLabelText('staff')).toBeInTheDocument();

      userEvent.selectOptions(getByLabelText('active'), 'false');
      userEvent.selectOptions(getByLabelText('staff'), 'false');

      await waitFor(() => getByText(/kay/i));

      expect(getByText(/kay/i)).toBeInTheDocument();
      expect(queryByText(/marniv/i)).not.toBeInTheDocument();
    });
  });

  describe('Re-render after deleting user', () => {
    beforeAll(() => {
      mock
        .onGet('/users')
        .replyOnce(200, MockUserList)
        .onDelete('/users/1')
        .replyOnce(200)
        .onGet('/users')
        .replyOnce(200, [MockUserList[1]]);
    });

    afterAll(() => {
      mock.reset();
    });

    it('should delete user data when delete button is clicked', async () => {
      const { getByText, getByTestId, queryByText, queryAllByText } = render(<UserList />, {
        wrapper: providerWrapper(),
      });

      await waitFor(() => getByTestId(/data/i));

      expect(getByText(/marvin/i)).toBeInTheDocument();
      expect(getByText(/kay/i)).toBeInTheDocument();

      userEvent.click(queryAllByText('active')[0]);

      await waitFor(() => getByText(/kay/i));

      expect(getByText(/kay/i)).toBeInTheDocument();
      expect(queryByText(/marniv/i)).not.toBeInTheDocument();
    });
  });
});

export default {};
