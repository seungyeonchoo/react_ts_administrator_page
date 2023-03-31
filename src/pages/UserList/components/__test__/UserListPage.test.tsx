import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { providerWrapper } from '../../../../service/__mock__';
import store from '../../../../store';
import { initialUserParams, updateUserParams } from '../../../../store/slices/paramSlice';
import UserListPage from '../UserTable/UseListPage';

const setUp = () => {
  const { getByText } = render(
    <UserListPage page={store.getState().params.userParams._page} length={20} />,
    {
      wrapper: providerWrapper(),
    }
  );

  const prevButton = getByText(/prev/i) as HTMLButtonElement;
  const nextButton = getByText(/next/i) as HTMLButtonElement;

  return { prevButton, nextButton };
};

describe('UserListPage component', () => {
  beforeEach(() => {
    store.dispatch(updateUserParams({ ...initialUserParams, _page: 2 }));
  });

  it('should have update page buttons and curr page', () => {
    const { nextButton, prevButton } = setUp();

    expect(nextButton).toBeInTheDocument();

    expect(prevButton).toBeInTheDocument();

    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('should increase page when next button is clicked', () => {
    const { nextButton } = setUp();

    expect(store.getState().params.userParams._page).toBe(2);

    userEvent.click(nextButton);

    expect(store.getState().params.userParams._page).toBe(3);
  });

  it('should decrese page when prev button is clicked', () => {
    const { prevButton } = setUp();

    expect(store.getState().params.userParams._page).toBe(2);

    userEvent.click(prevButton);

    expect(store.getState().params.userParams._page).toBe(1);
  });
});
