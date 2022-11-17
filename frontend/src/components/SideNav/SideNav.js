import React, { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SideNavData } from './SideNavData';
import SubNav from './SubNav';
import { IconContext } from 'react-icons/lib';


const Nav = styled.div`
  background: orange;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: orange;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;


const SideNav = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);


  return (
  <>
  <IconContext.Provider value={{ color: '#fff' }}>
  <Nav>
    <NavIcon to='#'>
      <FaIcons.FaBars onClick={showSidebar} />
    </NavIcon>
  </Nav>
  <SidebarNav sidebar={sidebar}>
    <SidebarWrap>
    <NavIcon to='#'>
      <AiIcons.AiOutlineClose onClick={showSidebar}/>
    </NavIcon>
      {SideNavData.map((item, index) => {
              return <SubNav item={item} key={index} />;
            })}
    </SidebarWrap>
  </SidebarNav>
  
  </IconContext.Provider>
  </>
  )
  
}


export default SideNav