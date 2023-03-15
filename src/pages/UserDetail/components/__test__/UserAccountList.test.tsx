import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockUserList from '../../../../fixture/MockUserList';
import { mockNav, providerWrapper } from '../../../../service/__mock__';
import UserAccountList from '../UserAccountList';

const setUp = () => {
  const { getByText } = render(<UserAccountList data={MockUserList[0]} />, {
    wrapper: providerWrapper(),
  });

  const firstAccountNumber = getByText(/375178506564/);
  const secondAccountNumber = getByText(/340468195793/);

  return { firstAccountNumber, secondAccountNumber };
};

describe('UserAccountList component', () => {
  it('should render user account list passed as props', () => {
    const { firstAccountNumber, secondAccountNumber } = setUp();

    expect(firstAccountNumber).toBeInTheDocument();
    expect(secondAccountNumber).toBeInTheDocument();
  });

  it('should navigate to account detail page when account number is clicked', () => {
    const { firstAccountNumber, secondAccountNumber } = setUp();

    expect(firstAccountNumber).toBeInTheDocument();
    expect(secondAccountNumber).toBeInTheDocument();
    expect(mockNav).not.toHaveBeenCalled();

    userEvent.click(firstAccountNumber);

    expect(mockNav).toHaveBeenCalledWith('/accounts/1');

    userEvent.click(secondAccountNumber);

    expect(mockNav).toHaveBeenCalledWith('/accounts/2');
  });
});

export default {};
