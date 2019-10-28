import React from 'react';
import styled from 'styled-components';
import {
  Input,
  FormControl,
  InputLabel,
  FormHelperText,
  Button,
} from '@material-ui/core';
import { InputProps } from 'src/hooks/useInput';

export interface FormProps {
  inputTitleProps: { attrs: InputProps; errorMessage: string };
  inputBodyProps: { attrs: InputProps; errorMessage: string };
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({
  inputTitleProps,
  inputBodyProps,
  handleSubmit,
}) => {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <StyledFormControl error={inputTitleProps.errorMessage !== ''}>
        <InputLabel htmlFor="component-error">Title</InputLabel>
        <Input
          id="component-error"
          {...inputTitleProps.attrs}
          aria-describedby="component-error-text"
        />
        <FormHelperText id="component-error-text">
          {inputTitleProps.errorMessage}
        </FormHelperText>
      </StyledFormControl>
      <StyledFormControl error={inputBodyProps.errorMessage !== ''}>
        <InputLabel htmlFor="component-error">Body</InputLabel>
        <Input
          id="component-error"
          {...inputBodyProps.attrs}
          aria-describedby="component-error-text"
        />
        <FormHelperText id="component-error-text">
          {inputBodyProps.errorMessage}
        </FormHelperText>
      </StyledFormControl>
      <StyledButton type="submit">Add Todo</StyledButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;
const StyledFormControl = styled(FormControl)`
  margin-bottom: 10px !important;
`;
const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 30px;
  width: 120px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

export default Form;
