import React, { useEffect, useState } from "react";
import { useDarkMode } from "../../contexts/DarkMode/DarkMode";

export function Clock() {
  const [time, setTime] = useState(new Date());
  const { textThemeColor } = useDarkMode();
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      console.log("update time", now);
      setTime(now);
    }, 1000);
  }, []);

  return <div style={{ color: textThemeColor }}>{time.toLocaleTimeString()}</div>;
}
