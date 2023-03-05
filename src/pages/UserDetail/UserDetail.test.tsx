import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { mockUsers } from '../../fixture/mockUserData';
import { mock, providerWrapper } from '../../service/__mock__';
import UserDetail from './UserDetail';

describe('user detail page', () => {
  describe('should render user detail data', () => {
    it('with rendering success', async () => {
      mock.onGet('/users/1').replyOnce(200, mockUsers[0]);

      const { getByText } = render(
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
    });
  });
});

export default {};
