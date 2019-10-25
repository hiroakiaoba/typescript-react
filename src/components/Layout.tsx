import React, { FC, ReactNode } from 'react';
import { StylesProvider } from '@material-ui/styles';
import config from 'src/config';
import HtmlTitle from './HtmlTitle';

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ title = config.pageTitle, children }) => (
  <StylesProvider injectFirst>
    <HtmlTitle title={title} />
    {children}
  </StylesProvider>
);

export default Layout;
