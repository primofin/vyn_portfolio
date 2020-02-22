import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
import UserHeader from '../UserHeader/UserHeader';
import MobileNav from '../MobileNav/MobileNav';

import {StyledContent} from './styles';

const Layout = ({user, children}) => {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <StyledContent>
        <UserHeader user={user} />
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  user: PropTypes.object,
  children: PropTypes.array,
};
