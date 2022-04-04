/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import styled, { css } from "styled-components";

const months = [
  {
    name: "January",
    days: [
      { date: "2021-12-27" },
      { date: "2021-12-28" },
      { date: "2021-12-29" },
      { date: "2021-12-30" },
      { date: "2021-12-31" },
      { date: "2022-01-01", isCurrentMonth: true },
      { date: "2022-01-02", isCurrentMonth: true },
      { date: "2022-01-03", isCurrentMonth: true },
      { date: "2022-01-04", isCurrentMonth: true },
      { date: "2022-01-05", isCurrentMonth: true },
      { date: "2022-01-06", isCurrentMonth: true },
      { date: "2022-01-07", isCurrentMonth: true },
      { date: "2022-01-08", isCurrentMonth: true },
      { date: "2022-01-09", isCurrentMonth: true },
      { date: "2022-01-10", isCurrentMonth: true },
      { date: "2022-01-11", isCurrentMonth: true },
      { date: "2022-01-12", isCurrentMonth: true, isToday: true },
      { date: "2022-01-13", isCurrentMonth: true },
      { date: "2022-01-14", isCurrentMonth: true },
      { date: "2022-01-15", isCurrentMonth: true },
      { date: "2022-01-16", isCurrentMonth: true },
      { date: "2022-01-17", isCurrentMonth: true },
      { date: "2022-01-18", isCurrentMonth: true },
      { date: "2022-01-19", isCurrentMonth: true },
      { date: "2022-01-20", isCurrentMonth: true },
      { date: "2022-01-21", isCurrentMonth: true },
      { date: "2022-01-22", isCurrentMonth: true },
      { date: "2022-01-23", isCurrentMonth: true },
      { date: "2022-01-24", isCurrentMonth: true },
      { date: "2022-01-25", isCurrentMonth: true },
      { date: "2022-01-26", isCurrentMonth: true },
      { date: "2022-01-27", isCurrentMonth: true },
      { date: "2022-01-28", isCurrentMonth: true },
      { date: "2022-01-29", isCurrentMonth: true },
      { date: "2022-01-30", isCurrentMonth: true },
      { date: "2022-01-31", isCurrentMonth: true },
      { date: "2022-02-01" },
      { date: "2022-02-02" },
      { date: "2022-02-03" },
      { date: "2022-02-04" },
      { date: "2022-02-05" },
      { date: "2022-02-06" },
    ],
  },
  {
    name: "February",
    days: [
      { date: "2022-01-31" },
      { date: "2022-02-01", isCurrentMonth: true },
      { date: "2022-02-02", isCurrentMonth: true },
      { date: "2022-02-03", isCurrentMonth: true },
      { date: "2022-02-04", isCurrentMonth: true },
      { date: "2022-02-05", isCurrentMonth: true },
      { date: "2022-02-06", isCurrentMonth: true },
      { date: "2022-02-07", isCurrentMonth: true },
      { date: "2022-02-08", isCurrentMonth: true },
      { date: "2022-02-09", isCurrentMonth: true },
      { date: "2022-02-10", isCurrentMonth: true },
      { date: "2022-02-11", isCurrentMonth: true },
      { date: "2022-02-12", isCurrentMonth: true },
      { date: "2022-02-13", isCurrentMonth: true },
      { date: "2022-02-14", isCurrentMonth: true },
      { date: "2022-02-15", isCurrentMonth: true },
      { date: "2022-02-16", isCurrentMonth: true },
      { date: "2022-02-17", isCurrentMonth: true },
      { date: "2022-02-18", isCurrentMonth: true },
      { date: "2022-02-19", isCurrentMonth: true },
      { date: "2022-02-20", isCurrentMonth: true },
      { date: "2022-02-21", isCurrentMonth: true },
      { date: "2022-02-22", isCurrentMonth: true },
      { date: "2022-02-23", isCurrentMonth: true },
      { date: "2022-02-24", isCurrentMonth: true },
      { date: "2022-02-25", isCurrentMonth: true },
      { date: "2022-02-26", isCurrentMonth: true },
      { date: "2022-02-27", isCurrentMonth: true },
      { date: "2022-02-28", isCurrentMonth: true },
      { date: "2022-03-01" },
      { date: "2022-03-02" },
      { date: "2022-03-03" },
      { date: "2022-03-04" },
      { date: "2022-03-05" },
      { date: "2022-03-06" },
      { date: "2022-03-07" },
      { date: "2022-03-08" },
      { date: "2022-03-09" },
      { date: "2022-03-10" },
      { date: "2022-03-11" },
      { date: "2022-03-12" },
      { date: "2022-03-13" },
    ],
  },
];

const chevronStyling = css`
  width: 1.25rem;
  height: 1.25rem;
`;

const chevronProps = {
  "aria-hidden": true,
};

const [PreviousMonthChevron, NextMonthChevron] = [
  ChevronLeftIcon,
  ChevronRightIcon,
].map(
  (c) => styled(c).attrs(() => chevronProps)`
    ${chevronStyling}
  `
);

function MonthNavChevron({ type }) {
  return {
    previous: <PreviousMonthChevron />,
    next: <NextMonthChevron />,
  }[type];
}

const MonthNavLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  whitespace: nowrap;
  borderwidth: 0;
`;

const MonthNavButton = styled.button.attrs(() => {
  type: "button";
})`
  display: flex;
  position: absolute;
  top: -0.25rem;
  ${(props) => (props.type == "previous" ? "left" : "right")}: -0.375rem;
  padding: 0.375rem;
  color: #9ca3af;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #6b7280;
  }
`;

function MonthNav({ type }) {
  return (
    <MonthNavButton type={type}>
      <MonthNavLabel>
        `${type == "previous" ? "Previous" : "Next"} month`
      </MonthNavLabel>
      <MonthNavChevron type={type} />
    </MonthNavButton>
  );
}

const CalendarContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  column-gap: 3.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MonthTitle = styled.h2`
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
  color: #111827;
  font-weight: 600;
`;

const DayHeadingRow = styled.div`
  display: grid;
  margin-top: 1.5rem;
  color: #6b7280;
  font-size: 0.75rem;
  line-height: 1rem;
  line-height: 1.5rem;
  grid-template-columns: repeat(7, minmax(0, 1fr));
`;

const Calendar = styled.section.attrs((props) => {
  key: props.monthIdx;
})`
  ${(props) =>
    props.monthIdx == props.months.length - 1
      ? css`
          display: none;

          @media (min-width: 768px) {
            display: block;
          }
        `
      : ""}
  text-align: center;
`;

export default function Example() {
  return (
    <div>
      <CalendarContainer>
        <MonthNav type="previous" />
        <MonthNav type="next" />
        {months.map((month, monthIdx) => (
          <Calendar months={months} monthIdx={monthIdx} key={monthIdx}>
            <MonthTitle>{month.name}</MonthTitle>
            <DayHeadingRow>
              {["M", "T", "W", "R", "F", "S", "S"].map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </DayHeadingRow>
            <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
              {month.days.map((day, dayIdx) => (
                <button
                  key={day.date}
                  type="button"
                  className={classNames(
                    day.isCurrentMonth
                      ? "bg-white text-gray-900"
                      : "bg-gray-50 text-gray-400",
                    dayIdx === 0 && "rounded-tl-lg",
                    dayIdx === 6 && "rounded-tr-lg",
                    dayIdx === month.days.length - 7 && "rounded-bl-lg",
                    dayIdx === month.days.length - 1 && "rounded-br-lg",
                    "relative py-1.5 hover:bg-gray-100 focus:z-10"
                  )}
                >
                  <time
                    dateTime={day.date}
                    className={classNames(
                      day.isToday && "bg-indigo-600 font-semibold text-white",
                      "mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                    )}
                  >
                    {day.date.split("-").pop().replace(/^0/, "")}
                  </time>
                </button>
              ))}
            </div>
          </Calendar>
        ))}
      </CalendarContainer>
      <section className="mt-12">
        <h2 className="font-semibold text-gray-900">Upcoming events</h2>
        <ol className="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-17" className="w-28 flex-none">
              Wed, Jan 12
            </time>
            <p className="mt-2 flex-auto sm:mt-0">
              Nothing on today’s schedule
            </p>
          </li>
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-19" className="w-28 flex-none">
              Thu, Jan 13
            </time>
            <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">
              View house with real estate agent
            </p>
            <p className="flex-none sm:ml-6">
              <time dateTime="2022-01-13T14:30">2:30 PM</time> -{" "}
              <time dateTime="2022-01-13T16:30">4:30 PM</time>
            </p>
          </li>
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-20" className="w-28 flex-none">
              Fri, Jan 14
            </time>
            <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">
              Meeting with bank manager
            </p>
            <p className="flex-none sm:ml-6">All day</p>
          </li>
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-18" className="w-28 flex-none">
              Mon, Jan 17
            </time>
            <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">
              Sign paperwork at lawyers
            </p>
            <p className="flex-none sm:ml-6">
              <time dateTime="2022-01-17T10:00">10:00 AM</time> -{" "}
              <time dateTime="2022-01-17T10:15">10:15 AM</time>
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
}

// /* This example requires Tailwind CSS v2.0+ */
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
// import styled, { css } from "styled-components";

// const months = [
//   {
//     name: "January",
//     days: [
//       { date: "2021-12-27" },
//       { date: "2021-12-28" },
//       { date: "2021-12-29" },
//       { date: "2021-12-30" },
//       { date: "2021-12-31" },
//       { date: "2022-01-01", isCurrentMonth: true },
//       { date: "2022-01-02", isCurrentMonth: true },
//       { date: "2022-01-03", isCurrentMonth: true },
//       { date: "2022-01-04", isCurrentMonth: true },
//       { date: "2022-01-05", isCurrentMonth: true },
//       { date: "2022-01-06", isCurrentMonth: true },
//       { date: "2022-01-07", isCurrentMonth: true },
//       { date: "2022-01-08", isCurrentMonth: true },
//       { date: "2022-01-09", isCurrentMonth: true },
//       { date: "2022-01-10", isCurrentMonth: true },
//       { date: "2022-01-11", isCurrentMonth: true },
//       { date: "2022-01-12", isCurrentMonth: true, isToday: true },
//       { date: "2022-01-13", isCurrentMonth: true },
//       { date: "2022-01-14", isCurrentMonth: true },
//       { date: "2022-01-15", isCurrentMonth: true },
//       { date: "2022-01-16", isCurrentMonth: true },
//       { date: "2022-01-17", isCurrentMonth: true },
//       { date: "2022-01-18", isCurrentMonth: true },
//       { date: "2022-01-19", isCurrentMonth: true },
//       { date: "2022-01-20", isCurrentMonth: true },
//       { date: "2022-01-21", isCurrentMonth: true },
//       { date: "2022-01-22", isCurrentMonth: true },
//       { date: "2022-01-23", isCurrentMonth: true },
//       { date: "2022-01-24", isCurrentMonth: true },
//       { date: "2022-01-25", isCurrentMonth: true },
//       { date: "2022-01-26", isCurrentMonth: true },
//       { date: "2022-01-27", isCurrentMonth: true },
//       { date: "2022-01-28", isCurrentMonth: true },
//       { date: "2022-01-29", isCurrentMonth: true },
//       { date: "2022-01-30", isCurrentMonth: true },
//       { date: "2022-01-31", isCurrentMonth: true },
//       { date: "2022-02-01" },
//       { date: "2022-02-02" },
//       { date: "2022-02-03" },
//       { date: "2022-02-04" },
//       { date: "2022-02-05" },
//       { date: "2022-02-06" },
//     ],
//   },
//   {
//     name: "February",
//     days: [
//       { date: "2022-01-31" },
//       { date: "2022-02-01", isCurrentMonth: true },
//       { date: "2022-02-02", isCurrentMonth: true },
//       { date: "2022-02-03", isCurrentMonth: true },
//       { date: "2022-02-04", isCurrentMonth: true },
//       { date: "2022-02-05", isCurrentMonth: true },
//       { date: "2022-02-06", isCurrentMonth: true },
//       { date: "2022-02-07", isCurrentMonth: true },
//       { date: "2022-02-08", isCurrentMonth: true },
//       { date: "2022-02-09", isCurrentMonth: true },
//       { date: "2022-02-10", isCurrentMonth: true },
//       { date: "2022-02-11", isCurrentMonth: true },
//       { date: "2022-02-12", isCurrentMonth: true },
//       { date: "2022-02-13", isCurrentMonth: true },
//       { date: "2022-02-14", isCurrentMonth: true },
//       { date: "2022-02-15", isCurrentMonth: true },
//       { date: "2022-02-16", isCurrentMonth: true },
//       { date: "2022-02-17", isCurrentMonth: true },
//       { date: "2022-02-18", isCurrentMonth: true },
//       { date: "2022-02-19", isCurrentMonth: true },
//       { date: "2022-02-20", isCurrentMonth: true },
//       { date: "2022-02-21", isCurrentMonth: true },
//       { date: "2022-02-22", isCurrentMonth: true },
//       { date: "2022-02-23", isCurrentMonth: true },
//       { date: "2022-02-24", isCurrentMonth: true },
//       { date: "2022-02-25", isCurrentMonth: true },
//       { date: "2022-02-26", isCurrentMonth: true },
//       { date: "2022-02-27", isCurrentMonth: true },
//       { date: "2022-02-28", isCurrentMonth: true },
//       { date: "2022-03-01" },
//       { date: "2022-03-02" },
//       { date: "2022-03-03" },
//       { date: "2022-03-04" },
//       { date: "2022-03-05" },
//       { date: "2022-03-06" },
//       { date: "2022-03-07" },
//       { date: "2022-03-08" },
//       { date: "2022-03-09" },
//       { date: "2022-03-10" },
//       { date: "2022-03-11" },
//       { date: "2022-03-12" },
//       { date: "2022-03-13" },
//     ],
//   },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// const chevronProps = {
//   ariaHidden: true,
// };

// const chevronStyle = css`
//   width: 1.25rem;
//   height: 1.25rem;
// `;
// const MonthNavLeftChevron = (type) => styled(ChevronLeftIcon).attrs(
//   (props) => chevronProps
// )`
//   ${chevronStyle}
// `;
// const MonthNavRightChevron = (type) => styled(ChevronRightIcon).attrs(
//   (props) => chevronProps
// )`
//   ${chevronStyle}
// `;
// function MonthNavChevron({ type }) {
//   return { previous: MonthNavLeftChevron, next: MonthNavRightChevron }[type];
// }

// function MonthNavigation({ type }) {
//   const NavSpan = styled.span`
//     position: absolute;
//     width: 1px;
//     height: 1px;
//     padding: 0;
//     margin: -1px;
//     overflow: hidden;
//     clip: rect(0, 0, 0, 0);
//     whitespace: nowrap;
//     borderwidth: 0;
//   `;
//   return (
//     <>
//       <NavSpan>
//         `${{ previous: "Previous", next: "Next" }[type]} month}`
//       </NavSpan>
//       {MonthNavChevron(type)}
//     </>
//   );
// }

// const MonthButton = styled.button`
//   display: flex;
//   position: absolute;
//   top: -0.25rem;
//   ${{ previous: "left", next: "right" }[(props) => props.type]}: -0.375rem;
//   padding: 0.375rem;
//   color: #9ca3af;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   &:hover {
//     color: #6b7280;
//   }
// `;

// function MonthHeader({ type }) {
//   return (
//     <>
//       <MonthButton type="button" />
//       <MonthNavigation type={type} />
//     </>
//   );
// }

// const Container = styled.div`
//   overflow: hidden;
//   font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
//     "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
//     "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   padding-left: 1rem;
//   padding-right: 1rem;
//   padding-top: 4rem;
//   padding-bottom: 4rem;
//   background-color: #f9fafb;
//   max-width: 32rem;

//   @media (min-width: 768px) {
//     max-width: 48rem;
//   }
// `;

// const CalendarContainer = styled.div`
//   display: grid;
//   position: relative;
//   grid-template-columns: repeat(1, minmax(0, 1fr));
//   column-gap: 3.5rem;

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(2, minmax(0, 1fr));
//   }
// `;

// const MonthContainer = styled.section`
//   text-align: center;
// `;

// const MonthTitle = styled.h2`
//   color: #111827;
//   font-weight: 600;
//   font-size: 16px;
// `;

// const MonthGrid = styled.div`
//   display: grid;
//   margin-top: 1.5rem;
//   color: #6b7280;
//   font-size: 0.75rem;
//   line-height: 1rem;
//   line-height: 1.5rem;
//   grid-template-columns: repeat(7, minmax(0, 1fr));
// `;

// const DayGrid = styled.div`
//   display: grid;
//   isolation: isolate;
//   margin-top: 0.5rem;
//   background-color: #e5e7eb;
//   font-size: 0.875rem;
//   line-height: 1.25rem;
//   border-radius: 0.5rem;
//   box-shadow: 1px 0 0 0 calc(1px + 1px) #e5e7eb;
//   grid-template-columns: repeat(7, minmax(0, 1fr));
//   gap: 1px;
//   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
// `;

// const currentMonthDayCSS = css`
//   background-color: #ffffff;
//   color: #111827;
// `;
// const nonCurrentMonthDayCSS = css`
//   background-color: #f9fafb;
//   color: #9ca3af;
// `;

// function borderDaysStyling(month, day) {
//   let lastDay = month.days.length - 7;
//   let lastFirstWeekday = month.days.length - 1;
//   let styles = {
//     0: css`
//       border-top-left-radius: 0.5rem;
//     `,
//     6: css`
//       border-top-right-radius: 0.5rem;
//     `,
//   };
//   styles[lastDay] = css`
//     border-bottom-left-radius: 0.5rem;
//   `;
//   styles[lastFirstWeekday] = css`
//     border-bottom-right-radius: 0.5rem;
//   `;
//   return Object.keys(styles).includes(String(day)) ? styles[day] : "";
// }
// const DayTitle = styled.div`
//   font-size: 12px;
//   line-height: 24px;
//   text-align: center;
// `;

// const Day = styled.button`
//   ${(props) =>
//     props.isCurrentMonth ? currentMonthDayCSS : nonCurrentMonthDayCSS}
//   ${(props) => borderDaysStyling(props.month, props.dayIndex)}
//   position: relative;
//   padding-top: 0.375rem;
//   padding-bottom: 0.375rem;
//   width: 100%;
//   cursor: pointer;
//   &:hover {
//     background-color: #f3f4f6;
//   }

//   &:focus {
//     z-index: 10;
//   }
//   border: none;
//   font-size: 14px;
//   height: 1.75rem;
//   width: 1.75rem;
// `;

// let todayStyling = css`
//   background-color: #4f46e5;
//   color: #ffffff;
//   font-weight: 600;
//   border-radius: 9999px;
// `;

// const Time = styled.time`
//   ${(props) => (props.today ? todayStyling : css``)}
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 9999px;
//   margin-left: auto;
//   margin-right: auto;
// `;
// export default function Example() {
//   return (
//     <Container>
//       <CalendarContainer>
//         <MonthHeader type="previous" />
//         <MonthHeader type="next" />
//         {months.map((month, monthIdx) => (
//           <MonthContainer key={monthIdx}>
//             <MonthTitle>{month.name}</MonthTitle>
//             <MonthGrid>
//               {["M", "T", "W", "R", "F", "S", "S"].map((d) => (
//                 <DayTitle>{d}</DayTitle>
//               ))}
//             </MonthGrid>
//             <DayGrid>
//               {month.days.map((day, dayIdx) => (
//                 <Day
//                   key={day.date}
//                   type="button"
//                   isCurrentMonth={day.isCurrentMonth}
//                   month={month}
//                   dayIndex={dayIdx}
//                 >
//                   <Time dateTime={day.date} today={day.isToday}>
//                     {day.date.split("-").pop().replace(/^0/, "")}
//                   </Time>
//                 </Day>
//               ))}
//             </DayGrid>
//           </MonthContainer>
//         ))}
//       </CalendarContainer>
//       {/*<section className="mt-12">
//         <h2 className="font-semibold text-gray-900">Upcoming events</h2>
//         <ol className="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
//           <li className="py-4 sm:flex">
//             <time dateTime="2022-01-17" className="w-28 flex-none">
//               Wed, Jan 12
//             </time>
//             <p className="mt-2 flex-auto sm:mt-0">
//               Nothing on today’s schedule
//             </p>
//           </li>
//           <li className="py-4 sm:flex">
//             <time dateTime="2022-01-19" className="w-28 flex-none">
//               Thu, Jan 13
//             </time>
//             <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">
//               View house with real estate agent
//             </p>
//             <p className="flex-none sm:ml-6">
//               <time dateTime="2022-01-13T14:30">2:30 PM</time> -{" "}
//               <time dateTime="2022-01-13T16:30">4:30 PM</time>
//             </p>
//           </li>
//           <li className="py-4 sm:flex">
//             <time dateTime="2022-01-20" className="w-28 flex-none">
//               Fri, Jan 14
//             </time>
//             <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">
//               Meeting with bank manager
//             </p>
//             <p className="flex-none sm:ml-6">All day</p>
//           </li>
//           <li className="py-4 sm:flex">
//             <time dateTime="2022-01-18" className="w-28 flex-none">
//               Mon, Jan 17
//             </time>
//             <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">
//               Sign paperwork at lawyers
//             </p>
//             <p className="flex-none sm:ml-6">
//               <time dateTime="2022-01-17T10:00">10:00 AM</time> -{" "}
//               <time dateTime="2022-01-17T10:15">10:15 AM</time>
//             </p>
//           </li>
//         </ol>
//       </section>*/}
//     </Container>
//   );
// }
