import React, { useState } from 'react';
import './DoubleSlider1.css';

const DoubleSlider1 = ({active}) => {
  const [minValue, setMinValue] = useState(720);
  const [maxValue, setMaxValue] = useState(1080);
  const [minGap, setMinGap] = useState(0);

  const convertToTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const minutesLeft = minutes % 60;
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutesLeft < 10 ? `0${minutesLeft}` : `${minutesLeft}`;
    return `${formattedHours}:${formattedMinutes}`;
  };


  const handleMinChange = (event) => {
    if (active) {
      setMinValue(parseInt(event.target.value));
      if (maxValue - parseInt(event.target.value) <= minGap) {
        setMaxValue(parseInt(event.target.value) + minGap);
      }
    }
  };

  const handleMaxChange = (event) => {
    if(active){
      setMaxValue(parseInt(event.target.value));
      if (parseInt(event.target.value) - minValue <= minGap) {
        setMinValue(parseInt(event.target.value) - minGap);
      }
    }
  };

  const minPosition = (value) => {
    if (value === 0) {
      return '8px';
    } else if (value === 1440) {
      return '280px';
    } else {
      return `${(value * (272 / 1440)) + 8}px`;
    }
  };

  const maxPosition = (value) => {
    if (value === 0) {
      return '280px';
    } else if (value === 1440) {
      return '8px';
    } else {
      return `${280 - (value * (272 / 1440))}px`;
    }
  };

  return (
    <div className={`double-slider1-container ${active ? '' : 'disabled'}`}>
      <div className='slider1-range-slider'>
        <span
          className='slider1-track'
          style={{
            left: (minValue / 1440) * 100 + '%',
            right: 100 - (maxValue / 1440) * 100 + '%'
          }}
        ></span>
        <input
          type='range'
          name='slider1-min-val'
          className='slider1-min-val'
          min='0'
          max='1440'
          step={'1'}
          value={minValue}
          onChange={handleMinChange}
          disabled={!active}
        />
        <input
          type='range'
          name='slider1-max-val'
          className='slider1-max-val'
          min='0'
          max='1440'
          step={'1'}
          value={maxValue}
          onChange={handleMaxChange}
          disabled={!active}
        />
      </div>
      <div className='slider1-show-values'>
        <div
          className='tooltip min-tooltip'
          style={{ left: minPosition(minValue) }}
        >
          {convertToTime(minValue)}
        </div>
        <div
          className='tooltip max-tooltip'
          style={{ right: maxPosition(maxValue) }}
        >
          {convertToTime(maxValue)}
        </div>
      </div>
    </div>
  );
};

export default DoubleSlider1;
