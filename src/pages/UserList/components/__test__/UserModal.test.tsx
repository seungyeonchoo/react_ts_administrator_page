import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mock, providerWrapper } from '../../../../service/__mock__';
import UserModal from '../UserModal';

const handleShowModal = jest.fn();

const setUp = () => {
  const { getByRole, queryByRole } = render(
    <UserModal showModal={true} handleShowModal={handleShowModal} />,
    {
      wrapper: providerWrapper(),
    }
  );

  return { getByRole, queryByRole };
};

describe('UserModal component', () => {
  it('should render input for create new user', () => {
    const { getByRole, queryByRole } = setUp();

    const createButton = queryByRole('button', { name: 'create' }) as HTMLButtonElement;

    expect(getByRole('textbox', { name: 'name' })).toBeInTheDocument();
    expect(createButton.disabled).toBe(true);
  });

  it('should update input value when input is typed', () => {
    const { getByRole } = setUp();

    const userNameInput = getByRole('textbox', { name: 'name' }) as HTMLInputElement;
    const isActiveCheck = getByRole('checkbox', { name: 'is active' }) as HTMLInputElement;

    expect(userNameInput.value).toBe('');
    expect(isActiveCheck.checked).toBe(false);

    userEvent.type(userNameInput, 'choo');
    userEvent.click(isActiveCheck);

    expect(userNameInput.value).toBe('choo');
    expect(isActiveCheck.checked).toBe(true);
  });

  it('should create new user when create button is clicked', async () => {
    mock.onPost('/users').reply(200);

    const { queryByRole } = setUp();

    const userNameInput = queryByRole('textbox', { name: 'name' }) as HTMLInputElement;
    const userEmailInput = queryByRole('textbox', { name: 'email' }) as HTMLInputElement;
    const userBirthInput = queryByRole('textbox', { name: 'birth day' }) as HTMLInputElement;
    const userPhoneInput = queryByRole('textbox', { name: 'phone number' }) as HTMLInputElement;
    const userAddressInput = queryByRole('textbox', { name: 'address' }) as HTMLInputElement;
    const addressDetailInput = queryByRole('textbox', {
      name: 'detail address',
    }) as HTMLInputElement;
    const userGenderInput = queryByRole('combobox', { name: 'gender' }) as HTMLSelectElement;
    const createButton = queryByRole('button', { name: 'create' }) as HTMLButtonElement;

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
