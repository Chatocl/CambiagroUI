import React, { useState } from 'react';
import styles from './ContentSwitcher.module.css';

const ContentSwitcher = ({ type, onClick, isSelected, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    onClick(type);
  };

  let containerClass;
  let textClass;

  switch (type) {
    case 'left':
      containerClass = isSelected
        ? styles.containerSelectedLeft
        : isHovered
        ? styles.containerHoverLeft
        : styles.containerDefaultLeft;
      textClass = isSelected || isHovered ? styles.textWhite : styles.textBlack;
      break;
    case 'middle':
      containerClass = isSelected
        ? styles.containerSelectedMiddle
        : isHovered
        ? styles.containerHoverMiddle
        : styles.containerDefaultMiddle;
      textClass = isSelected || isHovered ? styles.textWhite : styles.textBlack;
      break;
    case 'middleDisabled':
      containerClass = styles.containerDisabledMiddle;
      textClass = styles.textDisabled;
      break;
    case 'right':
      containerClass = isSelected
        ? styles.containerSelectedRight
        : isHovered
        ? styles.containerHoverRight
        : styles.containerDefaultRight;
      textClass = isSelected || isHovered ? styles.textWhite : styles.textBlack;
      break;
    default:
      containerClass = '';
      textClass = '';
  }

  return (
    <div
      className={containerClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={textClass}>{text}</div>
    </div>
  );
};

const Prototype = () => {
  const [selectedSwitcher, setSelectedSwitcher] = useState('');

  const handleSwitcherClick = (type) => {
    setSelectedSwitcher(type === selectedSwitcher ? '' : type);
  };

  return (
    <div style={{ display: 'flex' }}>
      <ContentSwitcher
        type="left"
        onClick={handleSwitcherClick}
        isSelected={selectedSwitcher === 'left'}
        text="ContentSwitcher 1"
      />
      <ContentSwitcher
        type="middle"
        onClick={handleSwitcherClick}
        isSelected={selectedSwitcher === 'middle'}
        text="ContentSwitcher 2"
      />
      <ContentSwitcher
        type="middleDisabled"
        onClick={handleSwitcherClick}
        text="ContentSwitcher 3"
      />
      <ContentSwitcher
        type="right"
        onClick={handleSwitcherClick}
        isSelected={selectedSwitcher === 'right'}
        text="ContentSwitcher 4"
      />
    </div>
  );
};

export default Prototype;