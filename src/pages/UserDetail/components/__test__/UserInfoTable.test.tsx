import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockUserList from '../../../../fixture/MockUserList';
import { mock, providerWrapper } from '../../../../service/__mock__';
import UserInfoTable from '../UserInfoTable';

const setUp = () => {
  const { getByText, queryByRole, getByRole } = render(
    <UserInfoTable data={MockUserList[0]} id="1" />,
    {
      wrapper: providerWrapper(),
    }
  );

  const userName = getByText(/marvin/i);
  const userNameUpdateButton = getByText('update');

  return { userName, userNameUpdateButton, queryByRole, getByRole, getByText };
};

describe('UserInfoTable component', () => {
  it('should render user data passed as props', () => {
    const { userName, userNameUpdateButton } = setUp();

    expect(userName).toBeInTheDocument();
    expect(userNameUpdateButton).toBeInTheDocument();
  });

  describe('Update user name', () => {
    it('should render user name input which has value of user name', () => {
      const { userNameUpdateButton, queryByRole, getByRole } = setUp();

      expect(userNameUpdateButton).toBeInTheDocument();
      expect(queryByRole('textbox')).not.toBeInTheDocument();

      userEvent.click(userNameUpdateButton);

      const nameInput = getByRole('textbox') as HTMLInputElement;

      expect(nameInput).toBeInTheDocument();

      expect(nameInput.value).toBe('Marvin 범');
    });

    it(`should update input value when 'Kevin' is typed`, () => {
      const { userNameUpdateButton, getByRole } = setUp();

      expect(userNameUpdateButton).toBeInTheDocument();

      userEvent.click(userNameUpdateButton);

      const nameInput = getByRole('textbox') as HTMLInputElement;

      expect(nameInput.value).toBe('Marvin 범');

      userEvent.clear(nameInput);

      expect(nameInput.value).toBe('');

      userEvent.type(nameInput, 'Kevin');

      expect(nameInput.value).toBe('Kevin');
    });

    it('should change user name when save button is clicked', async () => {
      mock.onPatch('/users/1').reply(200);

      const { userName, userNameUpdateButton, getByRole, getByText } = setUp();

      expect(userName).toHaveTextContent('Marvin 범');

      userEvent.click(userNameUpdateButton);

      const nameInput = getByRole('textbox') as HTMLInputElement;
      const saveButton = getByText('save') as HTMLButtonElement;

      expect(nameInput.value).toBe('Marvin 범');

      userEvent.clear(nameInput);

      userEvent.type(nameInput, 'Kevin');

      userEvent.click(saveButton);

      await waitFor(() => expect(mock.history.patch.length).toBe(1));

      expect(mock.history.patch.length).toBe(1);
    });
  });
});

export default {};
