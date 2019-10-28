import React, { FC, ReactNode } from 'react';
import config from 'src/config';
import HtmlTitle from './HtmlTitle';

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ title = config.pageTitle, children }) => (
  <>
    <HtmlTitle title={title} />
    {children}
  </>
);

export default Layout;
