import React, { useState } from 'react';
import './Accordion.css'

const Accordion = ({ title, children, active }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCategory = () => {
        active ? setIsOpen(!isOpen) : setIsOpen(isOpen)
    };

    return (
        <div>
            <div style={{ width: "100%" }}>
                <div className={active ? `AccordionHeader` : `DisabledAccordionHeader`} onClick={() => toggleCategory()} style={{ display: "flex", alignItems: "center" }}>
                    <h5>{title}</h5>
                    <svg className={active ? `AccordionIcon` : `DisabledAccordionIcon`}
                        style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.5s ease',
                        }}
                        width="16"
                        height="16"
                        viewBox="0 0 320 512"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="currentColor"
                            d="M310.6 246.6l-127.1 128c-9.4 9.4-24.6 9.4-33.9 0l-127.1-128c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0L160 289.9l110.6-110.6c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6C320 222 320 237.2 310.6 246.6z"
                        />
                    </svg>
                </div>
                {isOpen && (
                    <div className='AccordionBody'>
                        <p>{children}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordion;