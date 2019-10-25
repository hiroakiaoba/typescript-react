import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Todo from 'containers/TodoContainer';
import Profile from 'components/Profile';

const Home: React.FC = () => {
  return (
    <Layout>
      <Header>ここにヘッダー</Header>
      <Main>
        <LinkList>
          <NavLink to="/todo">todo page</NavLink>
          <NavLink to="/profile">profile page</NavLink>
        </LinkList>
        <Switch>
          <Route path="/todo" component={Todo} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Main>
    </Layout>
  );
};

const Header = styled.header`
  padding: 20px 34px;
`;
const LinkList = styled.nav`
  padding: 16px 0;

  > a {
    margin-right: 10px;
  }

  > a.active {
    text-decoration: underline;
    color: red;
  }
`;
const Main = styled.div`
  padding: 20px 34px;
`;

export default Home;
