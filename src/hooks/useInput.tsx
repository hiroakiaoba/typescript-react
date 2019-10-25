import React, { useState, useCallback } from 'react';

const useInput = (defaultVaue: string = '') => {
  const [value, setValue] = useState(defaultVaue);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [value],
  );

  return { value, onChange };
};

export default useInput;
