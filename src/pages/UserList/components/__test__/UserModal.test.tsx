import { render, renderHook, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { mock, providerWrapper } from '../../../../service/__mock__';
import UserList from '../../UserList';
import UserModal from '../UserModal';
import useToggle from '../../../../hooks/useToggle';

const ModalProps = {
  showModal: true,
  handleShowModal: jest.fn(),
};

const setUp = () => {
  const { container, getByText } = render(<UserModal {...ModalProps} />, {
    wrapper: providerWrapper(),
  });

  const nameInput = container.querySelector(`input[name='name']`) as HTMLInputElement;
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

    expect(ModalProps.handleShowModal).toHaveBeenCalled();
  });

  describe('should post user input', () => {
    it('should update user input value', () => {
      const { nameInput } = setUp();

      userEvent.type(nameInput, 'choo');

      expect(nameInput.value).toBe('choo');
    });
    // describe('should post user input when create button is clicked', () => {
    //   it('with success', async () => {});
    //   it('with error', async () => {});
    //   it('while loading', async () => {});
    // });
  });
});

export default {};
