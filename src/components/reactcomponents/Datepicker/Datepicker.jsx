import React, { useState, useEffect, useRef } from "react";
import "./Datepicker.css";

const getDaysInMonth = (month, year) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }
  return days;
};

const getLastDaysOfPreviousMonth = (month, year, count) => {
  const days = [];
  const date = new Date(year, month, 0);
  for (let i = 0; i < count; i++) {
    days.unshift(date.getDate());
    date.setDate(date.getDate() - 1);
  }
  return days;
};

const calendarSvg = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 3.02249H16.5V1.52249H15V3.02249H9V1.52249H7.5V3.02249H4.5C3.67157 3.02249 3 3.69406 3 4.52249V19.5225C3 20.3509 3.67157 21.0225 4.5 21.0225H19.5C20.3284 21.0225 21 20.3509 21 19.5225V4.52249C21 3.69406 20.3284 3.02249 19.5 3.02249ZM19.5 19.5225H4.5V9.02249H19.5V19.5225ZM19.5 7.52249H4.5V4.52249H7.5V6.02249H9V4.52249H15V6.02249H16.5V4.52249H19.5V7.52249Z" fill="#16A317"/>
</svg>
`;

const warningSvg = `
<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 12.5C1.5 6.70101 6.20101 2 12 2C14.7848 2 17.4555 3.10625 19.4246 5.07538C21.3938 7.04451 22.5 9.71523 22.5 12.5C22.5 18.299 17.799 23 12 23C6.20101 23 1.5 18.299 1.5 12.5ZM3 12.5C3 17.4706 7.02944 21.5 12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5C7.02944 3.5 3 7.52944 3 12.5ZM12.75 6.5V14.75H11.25V6.5H12.75ZM10.875 18.125C10.875 17.5037 11.3787 17 12 17C12.6213 17 13.125 17.5037 13.125 18.125C13.125 18.7463 12.6213 19.25 12 19.25C11.3787 19.25 10.875 18.7463 10.875 18.125Z" fill="#DB2929"/>
</svg>
`;

const DatePicker = ({ onRangeSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [range, setRange] = useState({ start: null, end: null });
  const daysOfWeek = ["D", "L", "M", "X", "J", "V", "S"];
  const daysOfMonth = getDaysInMonth(currentMonth, currentYear);
  const handleDayClick = (day) => {
    const newRange = { ...range };

    if (!newRange.start || newRange.end) {
      newRange.start = day;
      newRange.end = null;
    } else {
      newRange.end = day;
    }

    setRange(newRange);
    onRangeSelect(newRange);
  };
  const handleChangeYear = (event) => {
    const selectedYear = event.target.value;
    setCurrentYear(selectedYear);
  };
  const changeMonth = (delta) => {
    setCurrentMonth((prevMonth) => {
      let newMonth = prevMonth + delta;
      if (newMonth < 0) {
        setCurrentYear((prevYear) => prevYear - 1);
        newMonth = 11;
      } else if (newMonth > 11) {
        setCurrentYear((prevYear) => prevYear + 1);
        newMonth = 0;
      }
      return newMonth;
    });
  };

  const checkInRange = (day) => {
    const start = range.start ?? Number.MAX_VALUE;
    const end = range.end ?? Number.MAX_VALUE;
    return day >= start && day <= end;
  };

  const formatMonth = (month, year) => {
    const date = new Date(year, month);
    const monthName = date.toLocaleString("es", { month: "long" });
  
    // Genera un array de años (puedes ajustar el rango a tus necesidades)
    const years = Array.from({ length: 15 }, (_, i) => 2024 - i);
  


    return (
      <div className="month-year">
        <span className="month">{monthName}</span>{" "}
        <select className="year" onChange={handleChangeYear}>
          {years.map((yearOption) => (
            <option key={yearOption} value={yearOption} selected={yearOption === year}>
              {yearOption}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const paddingDays = getLastDaysOfPreviousMonth(
    currentMonth,
    currentYear,
    firstDayIndex
  );

  return (
    <div className="calendar">
      <div className="calendar-navigation">
        <button onClick={() => changeMonth(-1)}>&lt;</button>
        {formatMonth(currentMonth, currentYear)}
        <button onClick={() => changeMonth(1)}>&gt;</button>
      </div>
      <div className="calendar-header">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-of-week">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-grid">
        {paddingDays.map((day, index) => (
          <div
            key={`padding-day-${index}`}
            className="calendar-day not-current-month"
          >
            {day}
          </div>
        ))}
        {daysOfMonth.map((day) => (
          <button
            key={day}
            className={`calendar-day ${
              range.start && range.end
                ? day >= range.start && day <= range.end
                  ? "in-range"
                  : ""
                : ""
            } ${day === range.start ? "range-start" : ""} ${
              day === range.end ? "range-end" : ""
            }`}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

const DateInput = ({ label, error, size, icon }) => {
  const sizeClass = (size) => {
    switch (size) {
      case "small":
        return "input-small";
      case "medium":
        return "input-medium";
      case "large":
        return "input-large";
      default:
        return "";
    }
  };
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [range, setRange] = useState({ start: null, end: null });
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const wrapperRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setDatePickerVisibility(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const formatDate = (day) =>
    day
      ? new Date(currentYear, currentMonth, day).toLocaleDateString("es")
      : "";

  const formatRange = ({ start, end }) => {
    if (!start) return "";
    const startFormatted = formatDate(start);
    const endFormatted = end ? formatDate(end) : "";
    return end ? `${startFormatted} - ${endFormatted}` : startFormatted;
  };

  return (
    <div className="date-input-container" ref={wrapperRef}>
      {label && !error && <label className="input-label">{label}</label>}
      <div
        className={`input-container ${error ? "input-error" : ""} ${sizeClass(
          size
        )}`}
      >
        <input
          className="date-input"
          type="text"
          onFocus={() => setDatePickerVisibility(true)}
          value={formatRange(range)}
          readOnly
          placeholder="dd/mm/yyyy"
        />

        {icon === 'calendar' && (
          <span id="icon" dangerouslySetInnerHTML={{ __html: calendarSvg }} />
        )}
        {icon === 'warning' && (
          <span id="icon" dangerouslySetInnerHTML={{ __html: warningSvg }} />
        )}
        {error && (
          <span
            className="error-icon"
            dangerouslySetInnerHTML={{ __html: error }}
          />
        )}
      </div>
      {error && <span className="error-message">{error}</span>}
      {isDatePickerVisible && (
        <div className="calendar-container">
          <DatePicker onRangeSelect={setRange} />
        </div>
      )}
    </div>
  );
};

export { DatePicker, DateInput };
