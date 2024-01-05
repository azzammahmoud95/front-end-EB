import React, { useEffect, useState } from "react";
import "./DateInput.scss";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import { Calendar } from "@amir04lm26/react-modern-calendar-date-picker";
import calendarImg from "../../Assets/Images/calendar.webp";

function DateInput({
  width,
  setSelectedDate,
  disabled,
  selectedDate,
  minDate,
  maxDate,
}) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState("");

  // Documantation
  // https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/disabled-days

  // to make colored dates use the following prop:
  // customDaysClassName={[
  //   // here we add some CSS classes
  //   { year: 2019, month: 3, day: 4, className: 'purpleDay' },
  //   { year: 2019, month: 3, day: 12, className: 'orangeDay' },
  //   { year: 2019, month: 3, day: 18, className: 'yellowDay' },
  //   { year: 2019, month: 3, day: 26, className: 'navyBlueDay' },
  // ]}

  // to use disabled days add the following array and add the prop
  // const disabledDays = [
  //   {
  //     year: 2019,
  //     month: 3,
  //     day: 20,
  //   },
  //   {
  //     year: 2019,
  //     month: 3,
  //     day: 21,
  //   },
  //   {
  //     year: 2019,
  //     month: 3,
  //     day: 7,
  //   }
  // ];

  // and add this prop:
  // disabledDays={disabledDays} // here we pass them
  //     onDisabledDayError={handleDisabledSelect} // handle error

  useEffect(() => {
    if (selectedDay != null) {
      setSelectedDate(
        selectedDay?.month + "-" + selectedDay?.day + "-" + selectedDay?.year
      );
      setShowDate(false);
    }
  }, [selectedDay]);

  return (
    <div className="Calender_Main">
      <div
        className={
          disabled ? "Calendar_Input Calendar_Input_disabled" : "Calendar_Input"
        }
        onClick={() => {
          if (!disabled) setShowDate(!showDate);
          else setShowDate(false);
        }}
        style={{
          width: width ? `calc(${width} - (2rem + 6px))` : "fit-content",
        }}
      >
        <input
          type="text"
          placeholder="MM-DD-YYYY"
          disabled
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
          }}
          className={
            disabled
              ? "Calendar_Field Calendar_Field_disabled"
              : "Calendar_Field"
          }
        />
        <img src={calendarImg} className="Calendar_img" />
      </div>
      {!showDate ? (
        <span className="Shown_Calendar">
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            colorPrimary="var(--pink)"
            calendarTodayClassName="selected_day"
            minimumDate={
              minDate && {
                year: new Date(minDate).getFullYear(),
                month: new Date(minDate).getMonth() + 1,
                day: new Date(minDate).getDate(),
              }
            }
            maximumDate={
              maxDate &&
              maxDate && {
                year: new Date(maxDate).getFullYear(),
                month: new Date(maxDate).getMonth() + 1,
                day: new Date(maxDate).getDate(),
              }
            }
          />
        </span>
      ) : (
        <span className="Hidden_Calendar">
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            colorPrimary="var(--pink)"
            calendarTodayClassName="selected_day"
            minimumDate={
              minDate && {
                year: new Date(minDate).getFullYear(),
                month: new Date(minDate).getMonth() + 1,
                day: new Date(minDate).getDate(),
              }
            }
            maximumDate={
              maxDate &&
              maxDate && {
                year: new Date(maxDate).getFullYear(),
                month: new Date(maxDate).getMonth() + 1,
                day: new Date(maxDate).getDate(),
              }
            }
          />
        </span>
      )}
    </div>
  );
}

export default DateInput;
