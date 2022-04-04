import { useState, useEffect } from "react";
import cn from "classnames";
import moment from 'moment';
import style from "./Day.module.css";
import day from "moment";

export const Day = ({ day }) => {
const dayOfWeek = timeConverter(day.dt).split(", ")[0];
const isWeekend = dayOfWeek === "Sunday" || dayOfWeek === "Saturday";

    function timeConverter(UNIX_timestamp) {
        const moment = require('moment');
        let time = moment(UNIX_timestamp * 1000).format('LLLL');
        return time;
   }
    // const day = new Date(UNIX_timestamp * 1000);

    const moment = require('moment');


   return (
    <div className={style.day}>
        {/*<div className={cn(style.day__time, {[style.day__time_weekend]: isWeekend})}>*/}
        {/*    <Moment unix format="D MMM YYYY">{day.dt}</Moment></div>*/}
        {/*<div>*/}

            <div className={cn(style.day__time, {[style.day__time_weekend]: isWeekend})}>
        {moment.unix(day.dt).format('D MMM dddd')}</div>
            <div>

                {/*{timeConverter(day.dt)}</div>*/}

            <img className={style.day__icon} src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} />
        </div>

        <div className={style.day__description}>{Math.round(day.temp.day)} &deg;</div>
        <div className={style.day__description}>{Math.round(day.temp.night)} &deg;</div>

        <div className={style.text}>Max. wind speed</div>
        <div className={style.day__description}>{Math.round(day.wind_speed)}m/s</div>
        <div className={style.text}>Precipitation, mm</div>
        <div className={style.day__description}>{day.weather[0].description}</div>
    </div>
  );
};

