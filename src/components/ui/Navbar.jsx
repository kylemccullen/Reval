import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BiBuildingHouse } from 'react-icons/bi';
import { FiMoon, FiSun } from 'react-icons/fi';

import Input from './Input';
import TutorialModal from './TutorialModal';
import Toggle from './Toggle';
import { ThemeContext } from '../../context/ThemeContext';
import { DataContext } from '../../context/DataContext';

const CustomNavbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const { data } = useContext(DataContext);

  return (
    <Navbar expand="lg" variant={isDarkMode ? 'dark' : 'light'}>
      <Navbar.Brand className="d-flex">
        <BiBuildingHouse size={30} color={isDarkMode ? 'white' : 'black'} />
        <Input name={'name'} label="" value={data.name} valueType="text" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav className="align-content-center">
          <TutorialModal />
          <NavDropdown
            title="Settings"
            alignRight
            className={isDarkMode ? 'dark' : ''}
          >
            <div className="d-flex align-items-center justify-content-between px-2">
              <span className="pr-2">Theme</span>
              <Toggle
                value={isDarkMode}
                toggle={toggleDarkMode}
                leftIcon={<FiSun />}
                rightIcon={<FiMoon />}
                size={32}
              />
            </div>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
