import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { providerWrapper } from '../../../../service/__mock__';
import store from '../../../../store';
import { initialUserParams, updateUserParams } from '../../../../store/slices/paramSlice';
import UserFilter from '../UserFilter';

const setUp = () => {
  const { getByPlaceholderText, getByLabelText } = render(<UserFilter />, {
    wrapper: providerWrapper(),
  });

  const isActiveFilter = getByLabelText('active') as HTMLSelectElement;
  const isStaffFilter = getByLabelText('staff') as HTMLSelectElement;
  const searchInput = getByPlaceholderText(/search/) as HTMLInputElement;

  return { isActiveFilter, isStaffFilter, searchInput };
};

describe('UserFilter component', () => {
  describe('UserFilter', () => {
    it('should update userParams when options are selected', () => {
      const { isActiveFilter, isStaffFilter } = setUp();

      expect(isActiveFilter).toBeInTheDocument();
      expect(isStaffFilter).toBeInTheDocument();

      userEvent.selectOptions(isActiveFilter, 'true');
      userEvent.selectOptions(isStaffFilter, 'false');

      expect(isActiveFilter.value).toBe('true');
      expect(isStaffFilter.value).toBe('false');

      expect(store.getState().params.userParams.is_active).toBe('true');
      expect(store.getState().params.userParams.is_staff).toBe('false');
    });
  });

  describe('SearchInput', () => {
    it('should update input value when keyword is typed in search input', async () => {
      const { searchInput } = setUp();

      expect(searchInput.name).toBe('q');

      expect(searchInput.value).toBe('');

      userEvent.type(searchInput, 'marvin');

      expect(searchInput.value).toBe('marvin');

      await waitFor(() => expect(store.getState().params.userParams.q).toBe('marvin'));

      expect(store.getState().params.userParams.q).toBe('marvin');
    });
  });
});

export default {};
