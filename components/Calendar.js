// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
// import styled, { css } from "styled-components";
// import { useState, useEffect } from "react";

// function getMonthsToRender(startDate, endDate) {
//   // Returns a list of the months to render, e.g. [
//   //   { year: 2022, month: 1 },
//   //   { year: 2022, month: 2 },
//   //   { year: 2022, month: 3 },
//   //   { year: 2022, month: 4 },
//   // ];

//   const monthsToRender = [];
//   for (
//     let i = new Date(startDate);
//     i <= endDate;
//     i.setMonth(i.getMonth() + 1)
//   ) {
//     monthsToRender.push({ year: i.getFullYear(), month: i.getMonth() + 1 });
//   }
//   return monthsToRender;
// }

// const monthsToRender = getMonthsToRender(
//   new Date("January 1, 2022"),
//   new Date("April 1, 2022")
// );

// function getDatesToRender(startDate, endDate, holidays) {
//   let monthsToRender = getMonthsToRender(startDate, endDate);
//   return monthsToRender.map((m) => {
//     // For each month to render
//     // Begin with the first of the month
//     let date = new Date(`${m.month} 1, ${m.year}`);

//     // Search backwards to find the first Monday so we can render the whole month in a week-by-week layout
//     let firstMonday = new Date(date);
//     if (firstMonday.getDay() !== 1) {
//       firstMonday.setDate(date.getDate() - date.getDay() + 1);
//     }

//     // Search forwards to find the last Sunday
//     let lastSunday = new Date(date);
//     while (lastSunday.getMonth() == m.month - 1) {
//       // First get to the last day of the month
//       lastSunday.setDate(lastSunday.getDate() + 1);
//     }
//     while (lastSunday.getDay() !== 0) {
//       // Then, if it isn't a Sunday, search forward to the next Sunday
//       lastSunday.setDate(lastSunday.getDate() + 1);
//     }

//     // Now that we have a star and end Date, generate a list of all the days to render, a dictionary of months with `days` keys holding an array of day dictionaries including the date, whether it's a weekday in the given month, and whether it is a holiday
//     let data = {
//       name: date.toLocaleString("default", {
//         month: "long",
//       }),
//       days: [],
//     };

//     // Start our date on the first Monday
//     date = new Date(firstMonday);
//     while (firstMonday <= date && date <= lastSunday) {
//       // Iterate over the entire range
//       let withinDateRange = startDate <= date && date <= endDate;
//       let isWeekday = date.getDay() >= 1 && date.getDay() <= 5;
//       let isCurrentMonth = date.getMonth() == m.month - 1;
//       data.days.push({
//         date: new Date(date),
//         isCurrentWeekday: withinDateRange && isWeekday && isCurrentMonth,
//         holiday:
//           holidays.filter(
//             // Since == doesn't work with dates
//             ({ date: d }) =>
//               d.getDate() == date.getDate() &&
//               d.getMonth() == date.getMonth() &&
//               d.getFullYear() == date.getFullYear()
//           ).length == 1,
//       });
//       // Increment the date by one day each time through the loop
//       date.setDate(date.getDate() + 1);
//     }

//     return data;
//   });
// }

// const chevronStyling = css`
//   width: 1.25rem;
//   height: 1.25rem;
// `;

// const chevronProps = {
//   "aria-hidden": true,
// };

// const [PreviousMonthChevron, NextMonthChevron] = [
//   ChevronLeftIcon,
//   ChevronRightIcon,
// ].map(
//   (c) => styled(c).attrs(() => chevronProps)`
//     ${chevronStyling}
//   `
// );

// function MonthNavChevron({ type }) {
//   return {
//     previous: <PreviousMonthChevron />,
//     next: <NextMonthChevron />,
//   }[type];
// }

// const MonthNavLabel = styled.span`
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   margin: -1px;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   whitespace: nowrap;
//   border-width: 0;
// `;

// const MonthNavButton = styled.button.attrs(() => {
//   type: "button";
// })`
//   -webkit-appearance: button; /* 1 */
//   background-color: transparent; /* 2 */
//   background-image: none; /* 2 */
//   display: flex;
//   position: absolute;
//   top: -0.25rem;
//   ${(props) => (props.type == "previous" ? "left" : "right")}: -0.375rem;
//   padding: 0.375rem;
//   color: #9ca3af;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   &:hover {
//     color: #6b7280;
//   }
// `;

// function MonthNav({ type, onClick }) {
//   return (
//     <MonthNavButton type={type} onClick={onClick}>
//       <MonthNavLabel>
//         `${type == "previous" ? "Previous" : "Next"} month`
//       </MonthNavLabel>
//       <MonthNavChevron type={type} />
//     </MonthNavButton>
//   );
// }

// const CalendarContainer = styled.div`
//   display: grid;
//   position: relative;
//   grid-template-columns: repeat(1, minmax(0, 1fr));
//   column-gap: 3.5rem;

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(2, minmax(0, 1fr));
//   }

//   & button,
//   & [role="button"] {
//     cursor: pointer;
//   }
//   & :disabled {
//     cursor: default;
//   }

//   & *,
//   & ::before,
//   & ::after {
//     border-width: 0;
//     border-style: solid;
//   }
// `;
// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// const MonthTitle = styled.h2`
//   margin: 0;
//   font-size: inherit;
//   font-weight: inherit;
//   color: #111827;
//   font-weight: 600;
// `;

// const DayHeadingRow = styled.div`
//   display: grid;
//   margin-top: 1.5rem;
//   color: #6b7280;
//   font-size: 0.75rem;
//   line-height: 1rem;
//   line-height: 1.5rem;
//   grid-template-columns: repeat(7, minmax(0, 1fr));
// `;

// const Calendar = styled.section.attrs((props) => {
//   key: props.monthIdx;
// })`
//   ${(props) =>
//     props.monthIdx == props.months.length
//       ? css`
//           display: none;

//           @media (min-width: 768px) {
//             display: block;
//           }
//         `
//       : ""}
//   text-align: center;
// `;

// const DayGrid = styled.div`
//   display: grid;
//   isolation: isolate;
//   margin-top: 0.5rem;
//   background-color: #e5e7eb;
//   font-size: 0.875rem;
//   line-height: 1.25rem;
//   border-radius: 0.5rem;
//   // box-shadow: var(--tw-ring-inset) 1px 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
//   box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px,
//     rgb(229, 231, 235) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
//     rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
//   grid-template-columns: repeat(7, minmax(0, 1fr));
//   gap: 1px;
// `;

// const DayButton = styled.button.attrs((props) => ({
//   key: props.day.date,
//   type: "button",
// }))`
//   ${(props) =>
//     props.day.isCurrentWeekday
//       ? css`
//           background-color: #ffffff;
//           color: #111827;
//         `
//       : css`
//           background-color: #f9fafb;
//           color: #9ca3af;
//         `}
//   ${(props) =>
//     props.corner ? css`border-${props.corner}-radius: 0.5rem;` : ``}
//   position: relative; 
//   padding-top: 0.375rem;
//   padding-bottom: 0.375rem;
//   &:hover {
//     background-color: #F3F4F6; 
//   }
//   &:focus {
//     z-index: 10; 
//   }
// }
// `;

// const DayTimeContainer = styled.time.attrs((props) => ({
//   dateTime: props.day.date,
// }))`
//   ${(props) =>
//     props.day.holiday
//       ? css`
//           background-color: #4f46e5;
//           color: #ffffff;
//           font-weight: 600;
//         `
//       : css``}
//   margin-right: auto;
//   margin-left: auto;
//   display: flex;
//   height: 1.75rem;
//   width: 1.75rem;
//   justify-content: center;
//   align-items: center;
//   border-radius: 9999px;
// `;

// function DayTime({ day }) {
//   return <DayTimeContainer day={day}>{day.date.getDate()}</DayTimeContainer>;
// }

// function MonthCalendar({ month, months }) {
//   let monthIdx = months.indexOf(month);
//   return (
//     <Calendar months={months} monthIdx={monthIdx} key={monthIdx}>
//       <MonthTitle>{month.name}</MonthTitle>
//       <DayHeadingRow>
//         {["M", "T", "W", "R", "F", "S", "S"].map((d, i) => (
//           <div key={i}>{d}</div>
//         ))}
//       </DayHeadingRow>
//       <DayGrid>
//         {month.days.map((day, dayIdx) => {
//           // Round the corners of the button if it's a day that will appear in the corner of a month calendar
//           let dayIdxCornerMapping = {
//             0: "top-left",
//             6: "top-right",
//             [month.days.length - 7]: "bottom-left",
//             [month.days.length - 1]: "bottom-right",
//           };

//           return (
//             <DayButton
//               day={day}
//               corner={dayIdxCornerMapping[dayIdx]}
//               key={dayIdx}
//             >
//               <DayTime day={day} />
//             </DayButton>
//           );
//         })}
//       </DayGrid>
//     </Calendar>
//   );
// }

// const HolidaysContainer = styled.section`
//   margin-top: 3rem;
// `;

// const HolidaysListing = styled.ol`
//   padding-left: 0;
//   margin-top: 0.5rem;
//   color: #6b7280;
//   font-size: 0.875rem;
//   line-height: 1.25rem;
//   line-height: 1.5rem;
// `;

// const HolidaysHeader = styled.h2`
//   color: #111827;
//   font-weight: 600;
// `;

// function Holidays({ holidays }) {
//   return (
//     <HolidaysContainer>
//       <HolidaysHeader>Holidays</HolidaysHeader>
//       <HolidaysListing>
//         {holidays.map((h, i) => (
//           <Holiday holiday={h} key={i} />
//         ))}
//       </HolidaysListing>
//     </HolidaysContainer>
//   );
// }

// const HolidayContainer = styled.li`
//   padding-top: 1rem;
//   padding-bottom: 1rem;

//   @media (min-width: 640px) {
//     display: flex;
//   }

//   &:not(:first-of-type) {
//     border-top-width: 1px;
//     border-color: #e5e7eb;
//   }
// `;

// function Holiday({ holiday }) {
//   return (
//     <HolidayContainer>
//       <HolidayDate date={holiday.date}></HolidayDate>
//       <HolidayDescription>{holiday.description}</HolidayDescription>
//     </HolidayContainer>
//   );
// }

// const HolidayDateContainer = styled.time.attrs((props) => {
//   dateTime: props.dateTime;
// })`
//   flex: none;
//   width: 8rem;
// `;

// function HolidayDate({ date }) {
//   return (
//     <HolidayDateContainer>
//       {date.toLocaleDateString("en-US", { dateStyle: "long" })}
//     </HolidayDateContainer>
//   );
// }
// const HolidayDescription = styled.p`
//   margin-top: 0.5rem;
//   flex: 1 1 auto;

//   @media (min-width: 640px) {
//     margin-top: 0;
//   }
// `;

// function formatHolidays(holidays) {
//   // To ensure holidays are in Eastern time, add a time zone
//   let timeZoneString = "GMT-05:00";
//   return holidays.map((h) => {
//     h.date += timeZoneString;
//     h.date = new Date(h.date);
//     return h;
//   });
// }

// function CalendarView({ startDate, endDate, holidays }) {
//   let months = getDatesToRender(startDate, endDate, holidays);
//   // currentMonth holds the month we've selected to display using the arrows
//   const [currentMonth, setCurrentMonth] = useState(0);
//   const [monthsToDisplay, setMonthsToDisplay] = useState(2);

//   // We use windowSize to determine how many months we're displaying
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });

//   // A resize handler to update width and height when the window resizes
//   // TODO: Replace with an Observer?
//   const handleResize = () => {
//     setWindowSize({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//   };
//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     handleResize();

//     if (0 < windowSize.width && windowSize.width < 768) {
//       setMonthsToDisplay(1);
//     } else if (768 < windowSize.width) {
//       setMonthsToDisplay(2);
//     }

//     return () => window.removeEventListener("resize", handleResize);
//   }, [windowSize.width]);

//   return (
//     <div style={{ maxWidth: "960px", minWidth: "428px" }}>
//       <CalendarContainer>
//         {currentMonth > 0 ? (
//           <MonthNav
//             type="previous"
//             onClick={() => setCurrentMonth((currentMonth - 1) % months.length)}
//           />
//         ) : (
//           ""
//         )}
//         {months.length - currentMonth > monthsToDisplay ? (
//           <MonthNav
//             type="next"
//             onClick={() => setCurrentMonth((currentMonth + 1) % months.length)}
//           />
//         ) : (
//           ""
//         )}

//         {months
//           .slice(currentMonth, currentMonth + monthsToDisplay)
//           .map((month, monthIdx) => (
//             <MonthCalendar month={month} months={months} key={monthIdx} />
//           ))}
//       </CalendarContainer>
//       <Holidays holidays={formatHolidays(holidays)} />
//     </div>
//   );
// }

export default function HolidayCalendar() {
  return <div></div>
  // return (
  //   <CalendarView
  //     startDate={new Date("January 1, 2022")}
  //     endDate={new Date("April 1, 2022")}
  //     holidays={[
  //       { date: new Date("January 10, 2022"), description: "Oh you know" },
  //     ]}
  //   />
  // );
}
