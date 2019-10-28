import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   root: {
//     color: theme.status.danger,
//     '&$checked': {
//       color: theme.status.danger,
//     },
//   },
//   checked: {},
// }));

const Sample: React.FC = () => {
  // const classes = useStyles();

  return (
    <>
      <Title>sample page</Title>
      <Section>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Section>
      <Checkbox
        // classes={{
        //   root: classes.root,
        //   checked: classes.checked,
        // }}
      />
    </>
  );
};

const Title = styled.h2`
  margin: 12px 0;
`;
const Section = styled.div`
  padding-bottom: 8px;
`;

export default Sample;
