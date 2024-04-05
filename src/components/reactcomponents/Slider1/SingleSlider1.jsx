import React, { useState } from 'react';
import './SingleSlider1.css';

const SingleSlider1 = ({ active }) => {
    const [inputValue, setInputValue] = useState('50');
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (event) => {
        if (active) {
            setInputValue(event.target.value);
        }
    };

    const handleInputFocus = () => {
        setIsFocused(true);
    }

    const handleInputBlur = () => {
        setIsFocused(false);
    }


    const currentValuePosition = () => {
        const value = parseInt(inputValue);
        if (value === 0) {
            return '8px';
        } else if (value === 100) {
            return '280px';
        } else {
            return `${(value * 2.72) + 8}px`;
        }
    };

    return (
        <div className={`slider1-container ${active ? '' : 'disabled'}`} >
            {active && (
                <div className='show-value'>
                <span className='current-value' style={{ left: currentValuePosition() }}>
                    {inputValue}{active ? '' : '%'}
                </span>
            </div>
            )}
            <div className='single-slider'>
                <input
                    type='range'
                    className='custom-slider'
                    min={'0'}
                    max={'100'}
                    step='1'
                    value={inputValue}
                    onChange={handleInputChange}
                    onMouseDown={handleInputFocus}
                    onMouseUp={handleInputBlur}
                />
                <div className='progress-bar' style={{ width: currentValuePosition() }}></div>
            </div>
            <div className='range'>
                <div className='range-value'>{'0'} </div>
                <div className='range-value'>{'100'}</div>
            </div>
            {!active && (
                <div className='show-value'
                     style={{position: "absolute"}}>
                <span className='current-value' style={{ left: currentValuePosition(), top: "14px" }}>
                    {inputValue}{active ? '' : '%'}
                </span>
            </div>
            )}
        </div>
    );
};

export default SingleSlider1;
