import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MockUserList from '../../fixture/MockUserList';
import { mock, providerWrapper } from '../../service/__mock__';
import UserDetail from './UserDetail';

const setUp = () => {
  const { getByText, queryByText, getByRole } = render(
    <MemoryRouter initialEntries={['/users/1']}>
      <Routes>
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </MemoryRouter>,
    {
      wrapper: providerWrapper(),
    }
  );

  return { getByText, queryByText, getByRole };
};

describe('UserDetail component', () => {
  describe('Render User detail data as default', () => {
    it('with rendering success', async () => {
      mock.onGet('/users/1').replyOnce(200, MockUserList[0]);

      const { getByText, queryByText } = setUp();

      await waitFor(() => getByText(/marvin/i));

      expect(getByText(/marvin/i)).toBeInTheDocument();

      expect(queryByText(/joey/i)).not.toBeInTheDocument();
    });
  });

  describe('Re-render when user name is changed', () => {
    it('should re-render user data when user name is changed', async () => {
      mock
        .onGet('/users/1')
        .replyOnce(200, MockUserList[0])
        .onPatch('/users/1')
        .reply(200)
        .onGet('/users/1')
        .reply(200, { ...MockUserList[0], name: 'Kevin' });

      const { getByText, getByRole } = setUp();

      await waitFor(() => expect(getByText(/marvin/i)).toBeInTheDocument());

      expect(getByText('pencil-solid.svg')).toBeInTheDocument();

      userEvent.click(getByText('pencil-solid.svg'));

      const nameInput = getByRole('textbox') as HTMLInputElement;
      const saveButton = getByText('circle-check-regular.svg');

      expect(nameInput).toBeInTheDocument();
      expect(saveButton).toBeInTheDocument();

      userEvent.clear(nameInput);

      userEvent.type(nameInput, 'Kevin');

      userEvent.click(saveButton);

      await waitFor(() => getByText('Kevin'));

      expect(getByText('Kevin')).toBeInTheDocument();
    });
  });
});

export default {};
