import React from 'react';
import './TimeDate.css'

const TimeDate = () => {
    function updateClock(){
        var now = new Date();
        var dname = now.getDay(),
               mo = now.getMonth(),
             dnum = now.getDate(),
               yr = now.getFullYear(),
              hou = now.getHours(),
              min = now.getMinutes(),
              sec = now.getSeconds(),
               pe = "AM"; 

               if(hou == 0){
                   hou = 12;
               }
               if(hou > 12){
                   hou = hou - 12;
                   pe = "PM";
               }

               Number.prototype.pad = function(digits){
                   for(var n = this.toString(); n.length < digits; n = 0 + n)
                   return n;
               }

               var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
               var week =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
               var ids = ["dayName", "month", "dayNum", "year", "hour", "minutes", "seconds", "period"];
               var values = [week[dname], months[mo], dnum.pad(2), yr.pad(2), hou.pad(2), min.pad(2), sec.pad(2), pe];
               for(var i = 0 ; i < ids.length; i++)
               document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

    function initClock(){
        updateClock();
        window.setInterval("updateClock()", 1);
    }

    return (
      <div onLoad="initClock()">
        <div className='dateTime'>
            <div className='date'>
                <span id="dayName">Day</span>,
                <span id="month"> Month</span>,
                <span id="dayNum"> 00</span>,
                <span id="year"> Year</span>
            </div>
            <div className='time'>
                <span id='hour'>00</span>:
                <span id='minutes'>00</span>:
                <span id='seconds'>00</span>
                <span id='period'>AM</span>
            </div>
        </div>
      </div>
    );
};

export default TimeDate;