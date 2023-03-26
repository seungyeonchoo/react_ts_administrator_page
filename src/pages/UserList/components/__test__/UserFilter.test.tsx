import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { providerWrapper } from '../../../../service/__mock__';

import store from '../../../../store';
import { initialUserParams, updateUserParams } from '../../../../store/slices/paramSlice';

import UserToolBar from '../UserToolBar';

const handleModalToggle = jest.fn();

const setUp = () => {
  const { getByPlaceholderText, getByLabelText, getByText } = render(
    <UserToolBar handleModalToggle={handleModalToggle} />,
    {
      wrapper: providerWrapper(),
    }
  );

  userEvent.click(getByText(/filter/));
  userEvent.click(getByText(/glass/));

  const isActiveFilter = getByLabelText('Active') as HTMLSelectElement;
  const isStaffFilter = getByLabelText('Staff') as HTMLSelectElement;
  const searchInput = getByPlaceholderText(/search/) as HTMLInputElement;

  return { isActiveFilter, isStaffFilter, searchInput };
};

describe('UserFilter component', () => {
  it('should have active, staff filter and search input', () => {
    const { isActiveFilter, isStaffFilter, searchInput } = setUp();

    expect(isActiveFilter).toBeInTheDocument();
    expect(isStaffFilter).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

  describe('UserFilter', () => {
    beforeEach(() => {
      store.dispatch(updateUserParams(initialUserParams));
    });

    it('should update select.value when options are selected', () => {
      const { isActiveFilter, isStaffFilter } = setUp();

      userEvent.selectOptions(isActiveFilter, 'true');
      userEvent.selectOptions(isStaffFilter, 'false');

      expect(isActiveFilter.value).toBe('true');
      expect(isStaffFilter.value).toBe('false');
    });

    it('should update userParams when options are selected', () => {
      const { isActiveFilter, isStaffFilter } = setUp();

      expect(store.getState().params.userParams.is_active).toBe(null);
      expect(store.getState().params.userParams.is_staff).toBe(null);

      userEvent.selectOptions(isActiveFilter, 'true');
      userEvent.selectOptions(isStaffFilter, 'false');

      expect(store.getState().params.userParams.is_active).toBe('true');
      expect(store.getState().params.userParams.is_staff).toBe('false');
    });
  });

  describe('SearchInput', () => {
    beforeEach(() => {
      store.dispatch(updateUserParams(initialUserParams));
    });

    it('should update input.value when keyword is typed in search input', () => {
      const { searchInput } = setUp();

      expect(searchInput.value).toBe('');

      userEvent.type(searchInput, 'marvin');

      expect(searchInput.value).toBe('marvin');
    });

    it('should update userParams when keyword is typed in search input', async () => {
      const { searchInput } = setUp();

      expect(store.getState().params.userParams.q).toBe('');

      userEvent.type(searchInput, 'marvin');

      await waitFor(() => expect(store.getState().params.userParams.q).toBe('marvin'));

      expect(store.getState().params.userParams.q).toBe('marvin');
    });
  });
});

export default {};
