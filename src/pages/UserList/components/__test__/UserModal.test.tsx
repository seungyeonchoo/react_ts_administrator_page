import { render } from '@testing-library/react';
import { providerWrapper } from '../../../../service/__mock__';
import UserModal from '../UserModal';

const handleShowModal = jest.fn();

const setUp = () => {
  const { getByRole } = render(<UserModal showModal={true} handleShowModal={handleShowModal} />, {
    wrapper: providerWrapper(),
  });

  return { getByRole };
};

describe('UserModal component', () => {
  it('should render input for create new user', () => {
    const { getByRole } = setUp();

    expect(getByRole('textbox', { name: 'name' })).toBeInTheDocument();
  });
});

export default {};
