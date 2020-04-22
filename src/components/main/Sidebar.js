import React from "react";

const days = [
  { day1: "Понеділок" },
  { day2: "Вівторок" },
  { day3: "Середа" },
  { day4: "Четвер" },
  { day5: 'П"ятниця' },
  { day6: "Субота" },
  { day7: "Неділя" },
];

export const Sidebar = () => {
  console.log("days", days);

  return (
    <h2>IT should work</h2>
    //   {
    // days.map((day) => <li>{day.name}</li>);
    //   }
  );
};

