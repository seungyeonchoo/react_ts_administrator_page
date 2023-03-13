import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { providerWrapper } from '../../../../service/__mock__';
import UserFilter from '../UserFilter';

// const mockStore = confi;

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
    });
  });

  describe('SearchInput', () => {
    it('should update input value when keyword is typed in search input', () => {
      const { searchInput } = setUp();

      expect(searchInput.name).toBe('q');

      expect(searchInput.value).toBe('');

      userEvent.type(searchInput, 'marvin');

      expect(searchInput.value).toBe('marvin');
    });
    // it('should update userParams in 500ms after keyword is typed in search input', () => {});
  });
});

export default {};
