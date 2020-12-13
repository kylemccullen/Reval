import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BiBuildingHouse } from "react-icons/bi";
import { FiMoon, FiSun } from "react-icons/fi";

import Input from "./Input";
import TutorialModal from "./TutorialModal";
import Toggle from "./Toggle";
import { ThemeContext } from "../../context/ThemeContext";
import { DataContext } from "../../context/DataContext";

const CustomNavbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const { data } = useContext(DataContext);

  return (
    <Navbar expand="lg">
      <Navbar.Brand>
        <BiBuildingHouse size={30} color={isDarkMode ? "white" : "black"} />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Input name={"name"} label="" value={data.name} valueType="text" />
      </Nav>
      <Nav className="align-content-center">
        <TutorialModal />
        <Toggle
          value={isDarkMode}
          toggle={toggleDarkMode}
          leftIcon={<FiSun />}
          rightIcon={<FiMoon />}
          size={40}
        />
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
