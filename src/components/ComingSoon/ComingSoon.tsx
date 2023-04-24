import React, { useEffect, useState } from "react";

import "./ComingSoon.scss";

export function ComingSoon(props) {
  const { day, month } = props;
  const [year] = useState(new Date().getFullYear());

  const calculateTimeLeft = () => {
    const difference = +new Date(`${year}-${month}-${day}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents: any[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div className="container-coming-soon">
      <h2>Coming Soon</h2>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}
