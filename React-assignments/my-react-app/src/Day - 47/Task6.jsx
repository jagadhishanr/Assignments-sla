import { useEffect, useState } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cleanup on unmount
    return () => clearInterval(intervalId);
  }, []); // run once on mount

  return (
    <h2>
      {time.toLocaleTimeString()}
    </h2>
  );
}

export default LiveClock;
