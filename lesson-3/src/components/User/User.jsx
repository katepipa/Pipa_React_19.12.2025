import React, { useState, useEffect } from "react";

export default function User({ removeComponent }) {
  const [user, setUser] = useState({
    name: `Kateryna`,
    email: `katekate57@gmail.com`,
  });

  useEffect(() => {
    console.log(`🟢 Establish connection with ${user.email}`);

    return () => {
      console.log(`🔴 Terminate connection with ${user.email}`);
    };
  }, [user]);

  const changeEmail = () => {
    const email = prompt(`Enter new email`, `igor15@gmail.com`);
    setUser((prevState) => ({ ...prevState, email }));
  };

  return (
    <>
      <button onClick={removeComponent}>X</button>
      <ul>
        <li>Name: {user.name}</li>
        <li>
          Email: {user.email}{" "}
          <button onClick={changeEmail}>Change Email</button>
        </li>
      </ul>
    </>
  );
}
