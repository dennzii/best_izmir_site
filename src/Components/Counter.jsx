import React, { useState, useEffect } from 'react';

const Counter = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (duration / 100);

    const counter = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        clearInterval(counter);
        setCount(targetNumber);
      } else {
        setCount(Math.round(start));
      }
    }, 100);

    return () => clearInterval(counter);
  }, [targetNumber, duration]);

  return (
    <div className="font-montserrat font-bold text-slate-500 text-2xl">
      {count + "+ volunteers"}
    </div>
  );
};

export default Counter;
