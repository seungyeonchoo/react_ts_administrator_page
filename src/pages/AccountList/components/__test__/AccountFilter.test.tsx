import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { providerWrapper } from '../../../../service/__mock__';
import store from '../../../../store';
import { initialAccountParams, updateAccountParams } from '../../../../store/slices/paramSlice';
import AccountFilter from '../AccountFilter';

const setUp = () => {
  const { getByLabelText, getByPlaceholderText } = render(<AccountFilter />, {
    wrapper: providerWrapper(),
  });

  const statusFilter = getByLabelText('status') as HTMLSelectElement;
  const activeFilter = getByLabelText('active') as HTMLSelectElement;
  const brokerFilter = getByLabelText('broker') as HTMLSelectElement;
  const searchNumber = getByPlaceholderText(/search account/) as HTMLInputElement;

  return { statusFilter, brokerFilter, activeFilter, searchNumber };
};

describe('AccountFilter component', () => {
  it('should have filter for status, active, broker and search input for account number', () => {
    const { statusFilter, brokerFilter, activeFilter, searchNumber } = setUp();

    expect(searchNumber).toBeInTheDocument();
    expect(statusFilter).toBeInTheDocument();
    expect(brokerFilter).toBeInTheDocument();
    expect(activeFilter).toBeInTheDocument();

    expect(searchNumber.value).toBe('');
    expect(statusFilter.value).toBe('null');
    expect(brokerFilter.value).toBe('null');
    expect(activeFilter.value).toBe('null');
  });

  describe('Update filter param', () => {
    beforeEach(() => {
      store.dispatch(updateAccountParams(initialAccountParams));
    });

    it('should update select.value when filter is selected', () => {
      const { statusFilter, brokerFilter, activeFilter } = setUp();

      expect(statusFilter.value).toBe('null');
      expect(brokerFilter.value).toBe('null');
      expect(activeFilter.value).toBe('null');

      userEvent.selectOptions(statusFilter, '9999');
      userEvent.selectOptions(brokerFilter, '261');
      userEvent.selectOptions(activeFilter, 'false');

      expect(statusFilter.value).toBe('9999');
      expect(brokerFilter.value).toBe('261');
      expect(activeFilter.value).toBe('false');
    });

    it('should update accountParams when filter is selected', () => {
      const { statusFilter, brokerFilter, activeFilter } = setUp();

      expect(store.getState().params.accountParams.status).toBe(null);
      expect(store.getState().params.accountParams.broker_id).toBe(null);
      expect(store.getState().params.accountParams.is_active).toBe(null);

      userEvent.selectOptions(statusFilter, '9999');
      userEvent.selectOptions(brokerFilter, '261');
      userEvent.selectOptions(activeFilter, 'false');

      expect(store.getState().params.accountParams.status).toBe('9999');
      expect(store.getState().params.accountParams.broker_id).toBe('261');
      expect(store.getState().params.accountParams.is_active).toBe('false');
    });
  });

  describe('Update account number param', () => {
    beforeEach(() => {
      store.dispatch(updateAccountParams(initialAccountParams));
    });

    it('should update input.value when search keyword is typed', () => {
      const { searchNumber } = setUp();

      expect(searchNumber.value).toBe('');

      userEvent.type(searchNumber, '371');

      expect(searchNumber.value).toBe('371');
    });

    it('should update accountParams when search keyword is typed', async () => {
      const { searchNumber } = setUp();

      expect(store.getState().params.accountParams.number_like).toBe('');

      userEvent.type(searchNumber, '371');

      await waitFor(() => expect(store.getState().params.accountParams.number_like).toBe('371'));

      expect(store.getState().params.accountParams.number_like).toBe('371');
    });
  });
});
