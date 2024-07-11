import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.scss';

export const Button = ({
  text,
  hoverText,
  activeText,
  icon,
  onClick,
  type,
  className
}) => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseDown = () => {
    setActive(true);
  };

  const handleMouseUp = () => {
    setActive(false);
  };

  const buttonText = active ? activeText : hovered ? hoverText : text;

  const buttonClass = `${s.button} ${s[type]} ${className}`;

  return (
    <button
      className={buttonClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
    >
      <span className={s.text}>{buttonText}</span>
      <span className={s.icon}>{icon}</span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  hoverText: PropTypes.string.isRequired,
  activeText: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['join', 'share', 'toMain']).isRequired,
  className: PropTypes.string
};

Button.defaultProps = {
  className: ''
};

export default Button;
