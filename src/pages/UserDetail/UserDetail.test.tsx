import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { mockUsers } from '../../fixture/mockUserData';
import { mock, mockNav, providerWrapper } from '../../service/__mock__';
import UserDetail from './UserDetail';

const setUp = () => {
  const { getByText, queryByText, container } = render(
    <MemoryRouter initialEntries={['/users/1']}>
      <Routes>
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </MemoryRouter>,
    {
      wrapper: providerWrapper(),
    }
  );

  return { getByText, queryByText, container };
};

describe('user detail page', () => {
  describe('should render user detail data', () => {
    it('with rendering success', async () => {
      mock.onGet('/users/1').replyOnce(200, mockUsers[0]);

      const { getByText, queryByText } = setUp();

      await waitFor(() => expect(getByText(/joey/i)).toBeInTheDocument());

      expect(getByText(/joey/i)).toBeInTheDocument();
      expect(queryByText(/marvin/i)).not.toBeInTheDocument();
    });
  });

  describe('could update user name', () => {
    it('show input element with user name value when update button is clicked', async () => {
      mock.onGet('/users/1').replyOnce(200, mockUsers[0]);

      const { getByText, queryByText, container } = setUp();

      await waitFor(() => expect(getByText(/joey/i)).toBeInTheDocument());

      expect(getByText('update')).toBeInTheDocument();
      expect(container.querySelector(`input[name='name']`)).not.toBeInTheDocument();
      expect(queryByText('save')).not.toBeInTheDocument();
      expect(queryByText('cancel')).not.toBeInTheDocument();

      userEvent.click(getByText('update'));

      expect(container.querySelector(`input[name='name']`)).toBeInTheDocument();
      expect(getByText('save')).toBeInTheDocument();
      expect(getByText('cancel')).toBeInTheDocument();
    });

    it('update user name as input value when save button is clicked', async () => {
      mock
        .onGet('/users/1')
        .replyOnce(200, mockUsers[0])
        .onPatch('/users/1')
        .replyOnce(200)
        .onGet('/users/1')
        .replyOnce(200, { ...mockUsers[0], name: 'Joey 성choo' });

      const { getByText, container } = setUp();

      await waitFor(() => expect(getByText(/joey/i)).toBeInTheDocument());

      expect(getByText('update')).toBeInTheDocument();

      userEvent.click(getByText('update'));

      expect(container.querySelector(`input[name='name']`)).toBeInTheDocument();

      const nameInput = container.querySelector(`input[name='name']`) as HTMLInputElement;

      userEvent.type(nameInput, 'choo');

      expect(nameInput.value).toBe('Joey 성choo');

      userEvent.click(getByText('save'));

      await waitFor(() => expect(getByText('Joey 성choo')).toBeInTheDocument());

      expect(getByText('Joey 성choo')).toBeInTheDocument();
    });
  });

  it('should navigate to account detail page when account number is clicked', async () => {
    mock.onGet('/users/1').replyOnce(200, mockUsers[0]);

    const { getByText } = setUp();

    await waitFor(() => expect(getByText(/joey/i)).toBeInTheDocument());

    expect(getByText('359790892031')).toBeInTheDocument();

    userEvent.click(getByText('359790892031'));

    expect(mockNav).toHaveBeenCalledWith('/accounts/5');
  });
});

export default {};
