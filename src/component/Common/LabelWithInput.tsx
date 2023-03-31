import { ReactNode } from 'react';

const LabelWithInput = ({ children, labelTitle }: { children: ReactNode; labelTitle: string }) => {
  return (
    <label className="flex flex-col">
      <span>{labelTitle}</span>
      {children}
    </label>
  );
};

export default LabelWithInput;
