import { render, renderHook, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { mock, providerWrapper } from '../../../../service/__mock__';
import UserList from '../../UserList';
import UserModal from '../UserModal';
import useToggle from '../../../../hooks/useToggle';

const setUp = () => {
  let showModal = true;
  const handleShowModal = () => {
    showModal = !showModal;
  };
  const { container, getByText } = render(
    <UserModal showModal={showModal} handleShowModal={handleShowModal} />,
    {
      wrapper: providerWrapper(),
    }
  );

  const nameInput = container.querySelector(`input[name='name']`);
  const emailInput = container.querySelector(`input[name='email']`);
  const genderInput = container.querySelector(`select[name='gender_origin']`);
  const birthdayInput = container.querySelector(`input[name='birth_date']`);
  const phoneNumberInput = container.querySelector(`input[name='phone_number']`);
  const createBtn = getByText('create') as HTMLButtonElement;
  const cancelBtn = getByText(/cancel/i) as HTMLButtonElement;
  const modal = container.querySelector('dialog') as HTMLDialogElement;

  return {
    nameInput,
    emailInput,
    genderInput,
    birthdayInput,
    phoneNumberInput,
    createBtn,
    cancelBtn,
    modal,
  };
};

describe('User Modal Component', () => {
  it('should render create new user form', () => {
    const {
      nameInput,
      emailInput,
      genderInput,
      birthdayInput,
      phoneNumberInput,
      createBtn,
      cancelBtn,
    } = setUp();

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(genderInput).toBeInTheDocument();
    expect(birthdayInput).toBeInTheDocument();
    expect(phoneNumberInput).toBeInTheDocument();
    expect(createBtn).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
  });

  it('should handel show modal toggle', async () => {
    const { cancelBtn, modal } = setUp();

    expect(modal.open).toBe(true);

    act(() => userEvent.click(cancelBtn));

    waitFor(() => expect(modal.open).toBe(false));
  });

  //   describe('should post user input', async () => {
  //     it('should update user input value', () => {
  //       // userEvent.type => inputValue update by using useInput
  //     });
  //     describe('should post user input when create button is clicked', () => {
  //       it('with success', async () => {});
  //       it('with error', async () => {});
  //       it('while loading', async () => {});
  //     });
  //   });
});

export default {};
