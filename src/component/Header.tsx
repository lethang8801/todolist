import React from 'react'

const Header = ({checkOn , checkOff}:any) => {
 const date = new Date();
 let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
 return (
  <div>
    <div className="grid-row">
       <div className="info">
        <h2 className="date-time">{monthNames[date.getMonth() + 1]} {date.getDay()} {date.getFullYear()}</h2>
        <div className="status">{checkOn.length} incomplete , {checkOff.length} completed</div>
       </div>
      </div>
  </div>
 )
}

export default Header
