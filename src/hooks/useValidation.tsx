import React, { useState, useCallback } from 'react';

function useValidation<T>(callbackValidation: (value: T) => string) {
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (value: any) => {
    setErrorMessage(callbackValidation(value));
  };

  const resetError = useCallback(() => {
    setErrorMessage('');
  }, [errorMessage]);

  return { errorMessage, validate, resetError };
}

export default useValidation;
