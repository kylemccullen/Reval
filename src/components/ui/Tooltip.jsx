import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import PropTypes from "prop-types";

const Tooltip = ({ children, title, icon, iconClass = "" }) => {
  const popover = (
    <Popover>
      <Popover.Title>{title}</Popover.Title>
      <Popover.Content>{children}</Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger={["hover", "focus"]}
      placement="right"
      overlay={popover}
    >
      <span className={`p-1 ${iconClass}`}>{icon}</span>
    </OverlayTrigger>
  );
};

Tooltip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  iconClass: PropTypes.string,
};

export default Tooltip;
