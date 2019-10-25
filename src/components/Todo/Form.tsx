import React from 'react';

export interface FormProps {
  inputTitleProps: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  inputBodyProps: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  handleSubmit: (title: string, body: string) => void;
}

const Form: React.FC<FormProps> = ({
  inputTitleProps,
  inputBodyProps,
  handleSubmit,
}) => {
  return (
    <>
      <div>
        <label htmlFor="title">
          title:
          <input id="title" type="text" {...inputTitleProps} />
        </label>
      </div>
      <div>
        <label htmlFor="body">
          body:
          <input id="body" type="text" {...inputBodyProps} />
        </label>
      </div>
      <button
        type="button"
        onClick={() =>
          handleSubmit(inputTitleProps.value, inputBodyProps.value)
        }
      >
        Add
      </button>
    </>
  );
};

export default Form;
