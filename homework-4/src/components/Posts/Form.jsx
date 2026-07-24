import React, { useState, useRef, memo } from "react";

export default memo(function Form({ addItem, color }) {
  const titleRef = useRef();
  const completedRef = useRef();

  const [data, setData] = useState({
    title: `Kateryna`,
    completed: true,
  });

  const handleTitle = (e) => {
    setData((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const handleCompleted = (e) => {
    setData((prevState) => ({ ...prevState, completed: e.target.checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    addItem(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Title:{" "}
        <input
          type="text"
          ref={titleRef}
          defaultValue={data.title}
          onChange={handleTitle}
        />
      </label>
      <label>
        <input
          type="checkbox"
          ref={completedRef}
          defaultChecked={data.completed}
          onChange={handleCompleted}
        />
      </label>
      <button style={{ backgroundColor: color }}>Submit</button>
    </form>
  );
});
