import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockUserList from '../../../../fixture/MockUserList';
import { mock, mockNav, providerWrapper } from '../../../../service/__mock__';

import UserTable from '../UserTable';

const setUp = () => {
  const { getByText, queryAllByTestId } = render(<UserTable page={1} users={MockUserList} />, {
    wrapper: providerWrapper(),
  });

  const firstUserName = getByText(/marvin/i);
  const secondUserName = getByText(/kay/i);
  const firstUserDelete = queryAllByTestId('delete-icon')[0];
  const secondUserDelete = queryAllByTestId('delete-icon')[1];

  return { firstUserName, secondUserName, firstUserDelete, secondUserDelete };
};

describe('UserTable component', () => {
  it('should render user list which is passed as prop', () => {
    const { firstUserName, secondUserName } = setUp();

    expect(firstUserName).toBeInTheDocument();
    expect(secondUserName).toBeInTheDocument();
  });

  describe('Navigate to user detail page', () => {
    it('should navigate to detail page of first user when firstUserName is clicked', () => {
      const { firstUserName } = setUp();

      expect(firstUserName).toBeInTheDocument();

      userEvent.click(firstUserName);

      expect(mockNav).toHaveBeenCalledWith('/users/1');
    });

    it('should navigate to detail page of second user when secondUserName is clicked', () => {
      const { secondUserName } = setUp();

      expect(secondUserName).toBeInTheDocument();

      userEvent.click(secondUserName);

      expect(mockNav).toHaveBeenCalledWith('/users/2');
    });
  });

  describe('Delete User', () => {
    it('should have delete button', () => {
      const { firstUserDelete, secondUserDelete } = setUp();

      expect(firstUserDelete).toBeInTheDocument();
      expect(secondUserDelete).toBeInTheDocument();
    });

    it('should delete user when deleteButton is clicked', async () => {
      mock.onDelete('/users/1').replyOnce(200).onDelete('/users/2').replyOnce(200);

      const { firstUserDelete, secondUserDelete } = setUp();

      userEvent.click(firstUserDelete);

      await waitFor(() => expect(mock.history.delete.length).toBe(1));

      expect(mock.history.delete.length).toBe(1);

      userEvent.click(secondUserDelete);

      await waitFor(() => expect(mock.history.delete.length).toBe(2));

      expect(mock.history.delete.length).toBe(2);
    });
  });
});

export default {};
