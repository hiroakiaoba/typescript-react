import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

const Sample: React.FC = () => {
  return (
    <>
      <Title>sample page</Title>
      <Section>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Section>
      <Checkbox />
      <Text>サンプルテキスト</Text>
    </>
  );
};

const Title = styled.h2`
  margin: 12px 0;
`;
const Section = styled.div`
  padding-bottom: 8px;
`;
const Text = styled.p`
  color: ${({ theme }) => theme.status.danger};
`;

export default Sample;
