import React from "react";
import { Clock } from "digital-clock-react";

function DigClock() {
  return (
    <div className="app-container">
      <Clock
        isMode24H
        size="small"
        useInterval={false}
      />
    </div>
  );
}

export  {DigClock};