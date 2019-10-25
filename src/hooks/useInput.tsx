import React, { useState, useCallback } from 'react';

const useInput = (defaultVaue: string = '') => {
  const [value, setValue] = useState(defaultVaue);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [value],
  );

  const reset = useCallback(() => {
    setValue(defaultVaue);
  }, []);

  return { reset, value, onChange };
};

export type InputProps = Omit<ReturnType<typeof useInput>, 'reset'>;

export default useInput;
