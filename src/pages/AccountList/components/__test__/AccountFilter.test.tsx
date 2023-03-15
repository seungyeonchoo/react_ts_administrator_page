import { render } from '@testing-library/react';
import { providerWrapper } from '../../../../service/__mock__';
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
});
