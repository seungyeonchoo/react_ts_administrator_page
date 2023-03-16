import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockAccountList from '../../../../fixture/MockAccountList';
import { mockNav } from '../../../../service/__mock__';
import AccountListTable from '../AccountListTable';

const setUp = () => {
  const { getByText, getAllByText } = render(<AccountListTable accounts={MockAccountList} />);

  const userName = getAllByText(/marvin/i);
  const firstAccountNumber = getByText('375178506564');
  const secondAccountNumber = getByText('340468195793');

  return { userName, firstAccountNumber, secondAccountNumber };
};

describe('AccountTable component', () => {
  it('should render account list passed as props', () => {
    const { userName, firstAccountNumber, secondAccountNumber } = setUp();

    expect(userName.length).toBe(3);
    expect(firstAccountNumber).toBeInTheDocument();
    expect(secondAccountNumber).toBeInTheDocument();
  });

  describe('Navigate to detail page', () => {
    it('should navigate to user detail page when user name is clicked', () => {
      const { userName } = setUp();

      const firstUserName = userName[0];

      expect(mockNav).toHaveBeenCalledTimes(0);

      userEvent.click(firstUserName);

      expect(mockNav).toHaveBeenCalledWith('/users/1');
    });

    it('should navigate to account detail page when account number is clicked', () => {
      const { firstAccountNumber, secondAccountNumber } = setUp();

      expect(mockNav).toHaveBeenCalledTimes(0);

      userEvent.click(firstAccountNumber);

      expect(mockNav).toHaveBeenCalledWith('/accounts/1');

      userEvent.click(secondAccountNumber);

      expect(mockNav).toHaveBeenCalledWith('/accounts/2');
    });
  });
});

export default {};
