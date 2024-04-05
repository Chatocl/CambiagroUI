import React, { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const CustomLink = ({ direction = 'left', url, hasIcon = true, children }) => {
  const [linkState, setLinkState] = useState({
    isHovering: false,
    isClicked: false,
  });

  const handleHover = (hovering) => {
    setLinkState({ ...linkState, isHovering: hovering });
  };

  const handleClick = () => {
    setLinkState({ ...linkState, isClicked: true });
  };

  return (
    <div className={`custom-link ${linkState.isHovering ? 'hover' : ''} ${linkState.isClicked ? 'clicked' : ''}`} onMouseOver={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
      {hasIcon && direction === 'left' && (
          <ChevronLeftIcon style={{ color: linkState.isClicked ? '#16A317' : linkState.isHovering ? '#0B520C' : '#1CCC1D' }} />
      )}
      <a
        href={url}
        className="link-text"
        style={{
          textDecoration: direction === 'left' && !hasIcon ? null : 'none',
          color: linkState.isClicked ? '#16A317' : linkState.isHovering ? '#0B520C' : '#1CCC1D',
        }}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        onMouseDown={handleClick}
        onMouseUp={() => setLinkState({ ...linkState, isClicked: false })}
      >
        {children}
      </a>
      {hasIcon && direction === 'right' && (
          <ChevronRightIcon style={{ fontSize: 20, color: linkState.isClicked ? '#16A317' : linkState.isHovering ? '#0B520C' : '#1CCC1D' }} />
      )}
       <style>{`
        .custom-link {
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          color: #1CCC1D;
        }

        .link-text {
          margin: 0 5px;
          color: var(--text-color, #1CCC1D);
        }

        .custom-link.clicked .link-text,
        .custom-link.clicked .icon {
          color: #16A317; /* Color diferente después de hacer clic */
        }

        .icon {
          margin: 0 5px;
        }

        .custom-link:hover .link-text,
        .custom-link:hover .icon {
          color: #0B520C;
        }
      `}</style>
    </div>
  );
};

export default CustomLink;
