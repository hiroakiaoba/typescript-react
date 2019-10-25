import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Sample: React.FC = () => (
  <>
    <Title>sample page</Title>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </>
);

const Title = styled.h2`
  margin: 10px 0;
`;

export default Sample;
