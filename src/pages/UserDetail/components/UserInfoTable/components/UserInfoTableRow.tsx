import { ReactNode } from 'react';

const UserInfoTableRow = ({ children }: { children: ReactNode }) => {
  return <tr>{children}</tr>;
};

export default UserInfoTableRow;
