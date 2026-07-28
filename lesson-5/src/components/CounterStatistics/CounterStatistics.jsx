import React, { useContext } from "react";

import CounterContext from "../../contexts/CounterContext";

export default function CounterStatistics() {
  const { stateCounter } = useContext(CounterContext);

  return (
    <div style={{ color: stateCounter.color }}>
      CounterStatistics: {stateCounter.counter}
    </div>
  );
}
