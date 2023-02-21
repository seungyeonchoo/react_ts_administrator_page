import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { act } from 'react-dom/test-utils';

import { userListData, userSettingData } from '../../fixture/mockUserData';
import useFetch, { FetchData } from '../../hooks/useFetch';

import { mock, mockNav, providerWrapper } from '../../service/__mock__';
import UserList from './UserList';

describe('user list page', () => {
  describe('should render user list', () => {
    it('with success', async () => {
      const { getByText } = render(<UserList />, { wrapper: providerWrapper() });

      mock
        .onGet('/users')
        .reply(200, userListData)
        .onGet('/usersetting')
        .reply(200, userSettingData);

      await waitFor(() => {
        expect(getByText('Joey 성')).toBeInTheDocument();
        expect(getByText('3')).toBeInTheDocument();
        expect(getByText('.28@yahoo.co.kr')).toBeInTheDocument();
        expect(getByText('male')).toBeInTheDocument();
        expect(getByText('1967-07-16')).toBeInTheDocument();
        expect(getByText('010-****-0873')).toBeInTheDocument();
        expect(getByText('2022-07-31')).toBeInTheDocument();
        expect(getByText('2021-03-11')).toBeInTheDocument();
        expect(getByText('not allow')).toBeInTheDocument();
        expect(getByText('inactive')).toBeInTheDocument();
      });
    });

    it('with error', async () => {
      const { getByText } = render(<UserList />, { wrapper: providerWrapper() });

      mock.onGet('/users').reply(500);

      await waitFor(() => {
        expect(getByText(/Error/)).toBeInTheDocument();
      });
    });

    it('while loading', async () => {
      const { getByText } = render(<UserList />, { wrapper: providerWrapper() });

      mock.onGet('/users').reply(200, userListData);

      await waitFor(() => {
        expect(getByText(/Loading/)).toBeInTheDocument();
      });
    });
  });

  it('should navigate to user detail page when click user name', async () => {
    const { getByText } = render(<UserList />, { wrapper: providerWrapper() });

    mock.onGet('/users').reply(200, userListData);

    await waitFor(() => expect(getByText('Joey 성')).toBeInTheDocument());

    act(() => userEvent.click(getByText('Joey 성')));

    expect(mockNav).toHaveBeenCalledWith('/users/1');
  });

  describe('should implement create, delete, update method', () => {
    describe('with Create button', () => {
      it('render create modal when click create button', async () => {
        const { getByText } = render(<UserList />, { wrapper: providerWrapper() });

        mock.onGet('/users').reply(200);

        await waitFor(() => expect(getByText(/add/i) as HTMLButtonElement).toBeInTheDocument());

        act(() => userEvent.click(getByText(/add/i) as HTMLButtonElement));

        expect(getByText(/create new user/i) as HTMLDialogElement).toBeInTheDocument();
      });
    });

    it('with Delete', async () => {
      const { getByText } = render(<UserList />, { wrapper: providerWrapper() });

      mock
        .onGet('/users')
        .reply(200, userListData)
        .onGet('/usersetting')
        .reply(200, userSettingData);

      await waitFor(() => expect(getByText(/Joey/i)).toBeInTheDocument());

      mock.onDelete('/users/1').replyOnce(200);

      act(() => userEvent.click(getByText(/delete/i)));
    });
    // it('with Update', () => {});
  });

  //   describe('should change get parameter when sort or fliter or search is executed', () => {
  //     it('when select sort method ', () => {});
  //     it('when select filter method', () => {});
  //     it('when click page to move', () => {});
  //   });
});
export default {};
