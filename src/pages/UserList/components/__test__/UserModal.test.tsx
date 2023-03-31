import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mock, providerWrapper } from '../../../../service/__mock__';
import UserModal from '../UserModal';

const handleShowModal = jest.fn();

const setUp = () => {
  const { getByRole, queryByRole, getByLabelText, getByText } = render(
    <UserModal handleShowModal={handleShowModal} />,
    {
      wrapper: providerWrapper(),
    }
  );

  const createButton = getByText('create') as HTMLButtonElement;
  const userNameInput = getByLabelText(/name/i) as HTMLInputElement;
  const userEmailInput = getByLabelText(/email/i) as HTMLInputElement;
  const userBirthInput = getByLabelText(/birth/i) as HTMLInputElement;
  const userPhoneInput = getByLabelText(/contact/i) as HTMLInputElement;
  const userAddressInput = getByLabelText(/^address/i) as HTMLInputElement;
  const addressDetailInput = getByLabelText(/^detail/i) as HTMLInputElement;
  const userGenderInput = getByLabelText(/gender/i) as HTMLSelectElement;
  const isActiveCheck = getByLabelText(/active/i) as HTMLInputElement;

  return {
    getByRole,
    queryByRole,
    createButton,
    userNameInput,
    userEmailInput,
    userBirthInput,
    userPhoneInput,
    userAddressInput,
    addressDetailInput,
    userGenderInput,
    isActiveCheck,
  };
};

describe('UserModal component', () => {
  it('should update input value when input is typed', () => {
    const { userNameInput, isActiveCheck } = setUp();

    expect(userNameInput.value).toBe('');
    expect(isActiveCheck.checked).toBe(false);

    userEvent.type(userNameInput, 'choo');
    userEvent.click(isActiveCheck);

    expect(userNameInput.value).toBe('choo');
    expect(isActiveCheck.checked).toBe(true);
  });

  it('should create new user when create button is clicked', async () => {
    mock.onPost('/users').reply(200);

    const {
      userNameInput,
      userPhoneInput,
      userAddressInput,
      userBirthInput,
      userEmailInput,
      userGenderInput,
      addressDetailInput,
      createButton,
    } = setUp();

    expect(userNameInput).toBeInTheDocument();
    expect(userEmailInput).toBeInTheDocument();
    expect(userBirthInput).toBeInTheDocument();
    expect(userPhoneInput).toBeInTheDocument();
    expect(userAddressInput).toBeInTheDocument();
    expect(addressDetailInput).toBeInTheDocument();
    expect(userGenderInput).toBeInTheDocument();
    expect(createButton.disabled).toBe(true);

    userEvent.type(userNameInput, 'choo');
    userEvent.type(userEmailInput, 'choo@gmail.com');
    userEvent.type(userBirthInput, '1992-08-27');
    userEvent.type(userPhoneInput, '010-1234-1234');
    userEvent.type(userAddressInput, 'London');
    userEvent.type(addressDetailInput, 'Golders Green');
    userEvent.selectOptions(userGenderInput, ['1']);

    expect(userNameInput.value).toBe('choo');
    expect(userEmailInput.value).toBe('choo@gmail.com');
    expect(userBirthInput.value).toBe('1992-08-27');
    expect(userPhoneInput.value).toBe('010-1234-1234');
    expect(userAddressInput.value).toBe('London');
    expect(addressDetailInput.value).toBe('Golders Green');
    expect(userGenderInput.value).toBe('1');
    expect(createButton.disabled).toBe(false);
    expect(mock.history.post.length).toBe(0);

    userEvent.click(createButton);

    await waitFor(() => {
      expect(mock.history.post.length).toBe(1);
      expect(handleShowModal).toHaveBeenCalled();
    });

    expect(mock.history.post.length).toBe(1);
    expect(userNameInput.value).toBe('');
    expect(handleShowModal).toHaveBeenCalledTimes(1);
  });
});

export default {};

// name && email && birth_date && phone_number && address && detail_address
