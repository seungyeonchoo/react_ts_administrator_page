import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { mock, mockNav, providerWrapper } from '../../service/__mock__';
import UserList from './UserList';

const userListData = [
  {
    id: 1,
    uuid: 'c0100979-9b0d-4aff-aeb0-68e11bcc0e92',
    photo:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/475.jpg',
    name: 'Joey 성',
    email: '.28@yahoo.co.kr',
    age: 46,
    gender_origin: 3,
    birth_date: '1967-07-16T09:33:18.562Z',
    phone_number: '010-5924-0873',
    address: 'Tunisia 고창시',
    detail_address: '71971 장유읍 Apt. 997',
    last_login: '2022-07-31T16:12:53.915Z',
    created_at: '2021-03-11T06:47:36.909Z',
    updated_at: '2020-10-05T22:18:37.408Z',
    accounts: [
      { id: 1, name: 1 },
      { id: 2, name: 2 },
      { id: 3, name: 3 },
    ],
  },
];

const userSettingData = [
  {
    id: 1,
    uuid: 'e7b5d524-7d32-40b7-b2b6-a88ae6bff1ac',
    userId: 1,
    allow_marketing_push: false,
    allow_invest_push: false,
    is_active: false,
    is_staff: false,
    created_at: '2019-12-08T01:01:22.486Z',
    updated_at: '2021-07-28T23:57:09.140Z',
  },
];

const createUser = {
  id: 2,
  uuid: 'c9900979-9b0d-4aff-aeb0-68e11bcc0e92',
  photo:
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/475.jpg',
  name: 'Joey 추',
  email: '.38@yahoo.co.kr',
  age: 36,
  gender_origin: 3,
  birth_date: '1967-08-16T09:33:18.562Z',
  phone_number: '010-2224-0873',
  address: 'Tunisia 성남시',
  detail_address: '71971 장유읍 Apt. 997',
  last_login: '2022-07-31T16:12:53.915Z',
  created_at: '2021-03-11T06:47:36.909Z',
  updated_at: '2020-10-05T22:18:37.408Z',
  accounts: [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
  ],
};

describe('user list page', () => {
  describe('should render user list', () => {
    it('with success', async () => {
      const { getByText } = render(<UserList />, { wrapper: providerWrapper() });

      mock.onGet('/users').reply(200, userListData);
      mock.onGet('/usersetting').reply(200, userSettingData);

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

        await waitFor(() => expect(getByText(/create/i) as HTMLButtonElement).toBeInTheDocument());

        act(() => userEvent.click(getByText(/create/i) as HTMLButtonElement));

        expect(getByText(/create new user/i) as HTMLDialogElement).toBeInTheDocument();
      });
    });
    // it('with Delete', () => {});
    // it('with Update', () => {});
  });

  //   describe('should change get parameter when sort or fliter or search is executed', () => {
  //     it('when select sort method ', () => {});
  //     it('when select filter method', () => {});
  //     it('when click page to move', () => {});
  //   });
});

export default {};
