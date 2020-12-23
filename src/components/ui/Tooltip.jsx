import React, { useContext, useState, useEffect } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../context/ThemeContext';

const Tooltip = ({ children, title, icon, iconClass = '' }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [width, setWidth] = useState(window.innerWidth);
  const isSmallScreen = width < 600;

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  let popoverClass = '';
  popoverClass += isDarkMode ? 'dark' : '';
  popoverClass += isSmallScreen ? ' top' : ' right';

  const popover = (
    <Popover className={popoverClass}>
      <Popover.Title>{title}</Popover.Title>
      <Popover.Content>{children}</Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger={['hover', 'click']}
      placement={isSmallScreen ? 'top' : 'right'}
      overlay={popover}
    >
      <span className={`p-1 ${iconClass}`}>{icon}</span>
    </OverlayTrigger>
  );
};

Tooltip.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  iconClass: PropTypes.string,
};

export default Tooltip;
