import React from 'react';
import { InputProps } from 'src/hooks/useInput';

export interface FormProps {
  inputTitleProps: { attrs: InputProps; errorMessage: string };
  inputBodyProps: InputProps;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({
  inputTitleProps,
  inputBodyProps,
  handleSubmit,
}) => {
  console.log('form rendering!!!');

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">
          title:
          <input id="title" type="text" {...inputTitleProps.attrs} />
          {inputTitleProps.errorMessage && (
            <p>{inputTitleProps.errorMessage}</p>
          )}
        </label>
      </div>
      <div>
        <label htmlFor="body">
          body:
          <input id="body" type="text" {...inputBodyProps} />
        </label>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
