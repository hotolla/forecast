import { useEffect, useState } from "react";
import axios from "axios";
import { Day } from "./Day";
import style from "./Weather.module.css";

export const Weather = () => {
  const [ metcast, setMetcast ] = useState(null);

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/onecall', {
      params: {
        lat: 49.972,
        lon: 19.895,
        units: 'metric',
        lang: 'en',
        exclude: 'minutely,hourly',
        appid: process.env.REACT_APP_OPENWEATHERMAP_API_KEY
      }
    })
      .then(({ data }) => {
        console.log(data);
        setMetcast(data);
      });
  }, []);
  console.log(metcast);
  return (
    <div className={style.weather}>
      {!metcast
        ? "Loading..."
        : metcast.daily.map((day) => <Day key={day.dt} day={day} />)}
    </div>
  );
};
