import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { mockUsers } from '../../fixture/mockUserData';
import { mock, providerWrapper } from '../../service/__mock__';
import UserDetail from './UserDetail';

describe('user detail page', () => {
  describe('should render user detail data', () => {
    it('with rendering success', async () => {
      mock.onGet('/users/1').replyOnce(200, mockUsers[0]);

      const { getByText, queryByText } = render(
        <MemoryRouter initialEntries={['/users/1']}>
          <Routes>
            <Route path="/users/:id" element={<UserDetail />} />
          </Routes>
        </MemoryRouter>,
        {
          wrapper: providerWrapper(),
        }
      );

      await waitFor(() => expect(getByText(/joey/i)).toBeInTheDocument());

      expect(getByText(/joey/i)).toBeInTheDocument();
      expect(queryByText(/marvin/i)).not.toBeInTheDocument();
    });
  });

  describe('could update user name', () => {
    it('show input element with user name value when update button is clicked', async () => {
      mock.onGet('/users/1').replyOnce(200, mockUsers[0]);

      const { getByText, queryByText, queryByRole, getByRole, container } = render(
        <MemoryRouter initialEntries={['/users/1']}>
          <Routes>
            <Route path="/users/:id" element={<UserDetail />} />
          </Routes>
        </MemoryRouter>,
        {
          wrapper: providerWrapper(),
        }
      );

      await waitFor(() => expect(getByText(/joey/i)).toBeInTheDocument());

      expect(getByText(/변경/)).toBeInTheDocument();
      expect(container.querySelector(`input[name='name']`)).not.toBeInTheDocument();
      expect(queryByText('저장')).not.toBeInTheDocument();
      expect(queryByText('취소')).not.toBeInTheDocument();

      userEvent.click(getByText(/변경/));

      expect(container.querySelector(`input[name='name']`)).toBeInTheDocument();
      expect(getByText('저장')).toBeInTheDocument();
      expect(getByText('취소')).toBeInTheDocument();
    });
  });
});

export default {};
