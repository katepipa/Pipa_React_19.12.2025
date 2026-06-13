import React, { useState, useEffect, useRef } from "react";
import "./style.css";

const LIST = [`cat`, `dog`, `lion`, `tiger`, `parrot`].map((item) => ({
  id: crypto.randomUUID(),
  value: item,
}));

export default function List({ removeComponent }) {
  const [list, setList] = useState(LIST);
  const [color, setColor] = useState(null);

  const intervalId = useRef();

  useEffect(() => {
    console.log(`🟢 in componentDidMount`);
    intervalId.current = setInterval(() => {
      console.log(`in interval`);
      setList((prevState) => prevState.slice(0, -1));
    }, 1000);

    return () => {
      console.log(`🔴 in componentWillUnmount`);
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    if (!list.length) {
      clearInterval(intervalId.current);
    }
  }, [list]);

  useEffect(() => {
    if (list.length <= 3) {
      setColor(`hotpink`);
    }
  }, [list]);

  return list.length ? (
    <div className="list">
      <button onClick={removeComponent}>Close List Component</button>
      <ul style={{ color }}>
        {list.map(({ id, value }) => (
          <li key={id}>{value}</li>
        ))}
      </ul>
    </div>
  ) : null;
}
