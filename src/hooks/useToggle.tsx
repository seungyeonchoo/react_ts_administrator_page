import { useState } from 'react';

const useToggle = (initialToggle = false) => {
  const [toggle, setToggle] = useState(initialToggle);

  const handleToggle: () => void = () => {
    setToggle(!toggle);
  };

  return { toggle, handleToggle };
};

export default useToggle;
