import { getByRole, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockAccounts } from '../../fixture/mockAccountData';
import { mock, mockNav, providerWrapper } from '../../service/__mock__';
import AccountList from './AccountList';

describe('Account List Page', () => {
  afterEach(() => {
    mock.reset();
  });
  describe('should render account list data', () => {
    it('with rendering success', async () => {
      mock.onGet('/accounts').replyOnce(200, mockAccounts);

      const { getByText, getByRole } = render(<AccountList />, { wrapper: providerWrapper() });

      await waitFor(() => expect(getByRole('cell', { name: '교보증권' })).toBeInTheDocument());

      expect(getByRole('cell', { name: '교보증권' })).toBeInTheDocument();
      expect(getByRole('cell', { name: '운용중' })).toBeInTheDocument();
      expect(getByText('375178506564')).toBeInTheDocument();
    });

    it('with rendering error', async () => {
      mock.onGet('/accounts').replyOnce(400);

      const { getByText } = render(<AccountList />, { wrapper: providerWrapper() });

      await waitFor(() => expect(getByText(/error/i)).toBeInTheDocument());

      expect(getByText(/error/i)).toBeInTheDocument();
    });

    it('while loading response', async () => {
      mock.onGet('/accounts').replyOnce(400);

      const { getByText } = render(<AccountList />, { wrapper: providerWrapper() });

      await waitFor(() => expect(getByText(/loading/i)).toBeInTheDocument());

      expect(getByText(/loading/i)).toBeInTheDocument();
    });
  });

  describe('should navigate to detail page', () => {
    it('account detail page when account number is clicked', async () => {
      mock.onGet('/accounts').replyOnce(200, mockAccounts);

      const { getByText, getByRole } = render(<AccountList />, { wrapper: providerWrapper() });

      await waitFor(() => expect(getByRole('cell', { name: '교보증권' })).toBeInTheDocument());

      expect(getByRole('cell', { name: '교보증권' })).toBeInTheDocument();
      expect(getByRole('cell', { name: '운용중' })).toBeInTheDocument();
      expect(getByText('375178506564')).toBeInTheDocument();

      userEvent.click(getByText('375178506564'));

      expect(mockNav).toHaveBeenCalledWith('/accounts/1');
    });

    it('user detail page when user name is clicked', async () => {
      mock.onGet('/accounts').replyOnce(200, mockAccounts);

      const { getByText, getByRole } = render(<AccountList />, { wrapper: providerWrapper() });

      await waitFor(() => expect(getByRole('cell', { name: '교보증권' })).toBeInTheDocument());

      expect(getByRole('cell', { name: '교보증권' })).toBeInTheDocument();
      expect(getByRole('cell', { name: '운용중' })).toBeInTheDocument();
      expect(getByText('375178506564')).toBeInTheDocument();

      userEvent.click(getByText(/joey/i));

      expect(mockNav).toHaveBeenCalledWith('/users/1');
    });

    describe('could filter', () => {
      beforeEach(() => {
        mock.onGet('/accounts').reply((config: any) => {
          if (config.params.is_active === 'true') return [200, []];
          if (config.params.broker_id === '262') return [200, []];
          if (config.params.status === '9999') return [200, []];
          else return [200, mockAccounts];
        });
      });
      it('by is_active', async () => {
        const { getByText, getByLabelText, queryByText, queryByRole } = render(<AccountList />, {
          wrapper: providerWrapper(),
        });

        await waitFor(() => expect(getByText('375178506564')).toBeInTheDocument());

        const activeFilter = getByLabelText('is active');

        expect(activeFilter).toBeInTheDocument();
        expect(getByText('375178506564')).toBeInTheDocument();

        userEvent.selectOptions(activeFilter, ['active']);

        await waitFor(() => expect(queryByText('375178506564')).not.toBeInTheDocument());

        const activeOpt = queryByRole('option', { name: 'active' }) as HTMLOptionElement;

        expect(activeOpt.selected).toBe(true);
        expect(queryByText('375178506564')).not.toBeInTheDocument();
      });
      //   it('by broker_id', () => {});
      it('by status', async () => {
        const { getByText, getByLabelText, queryByText, queryByRole } = render(<AccountList />, {
          wrapper: providerWrapper(),
        });

        await waitFor(() => expect(getByText('375178506564')).toBeInTheDocument());

        const statusFilter = getByLabelText('account status');

        expect(statusFilter).toBeInTheDocument();
        expect(getByText('375178506564')).toBeInTheDocument();

        userEvent.selectOptions(statusFilter, ['관리자확인필요']);

        await waitFor(() => expect(queryByText('375178506564')).not.toBeInTheDocument());

        const statusOpt = queryByRole('option', { name: '관리자확인필요' }) as HTMLOptionElement;

        expect(statusOpt.selected).toBe(true);
        expect(queryByText('375178506564')).not.toBeInTheDocument();
      });
    });
  });
  // should render account list data => success & loadling & error
  // should navigate
  // - to account detail page when account number is clicked
  // - to user detail page when user name is clicked
  // should filter is_active && broker_id && status
  // could search
  // should paginated
});

export default {};

// {
//     id: 1,
//     userId: 1,
//     uuid: '8910b399-935d-4200-898b-bb3da7c3bfc7',
//     broker_id: '261',
//     status: 2,
//     number: '375178506564',
//     name: 'Money Market Account',
//     assets: '702487457.42',
//     payments: '675311926.92',
//     is_active: false,
//     created_at: '2020-04-25T13:37:13.564Z',
//     updated_at: '2020-11-21T06:11:57.543Z',
//   },
