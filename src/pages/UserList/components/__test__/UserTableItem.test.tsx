import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { userListData, userSettingData } from '../../../../fixture/mockUserData';
import { providerWrapper } from '../../../../service/__mock__';
import UserTableItem from '../UserTableItem';

describe('User Table Item', () => {
  it('should render passed user data', () => {
    const { getByText } = render(
      <UserTableItem user={userListData[0]} setting={userSettingData[0]} />,
      { wrapper: providerWrapper() }
    );

    act(() => {
      expect(getByText('Joey 성')).toBeInTheDocument();
      expect(getByText('3')).toBeInTheDocument();
      expect(getByText('.28@yahoo.co.kr')).toBeInTheDocument();
      expect(getByText('male')).toBeInTheDocument();
      expect(getByText('1967-07-16')).toBeInTheDocument();
      expect(getByText('010-****-0873')).toBeInTheDocument();
      expect(getByText('2022-07-31')).toBeInTheDocument();
      expect(getByText('2021-03-11')).toBeInTheDocument();
      expect(getByText('not allow')).toBeInTheDocument();
      expect(getByText('inactive')).toBeInTheDocument();
    });
  });
});
