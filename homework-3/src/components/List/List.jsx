import React, { useState, useEffect } from "react";

const API = `https://jsonplaceholder.typicode.com/users`;

export default function List({ removeComponent }) {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const request = await fetch(API),
        response = await request.json();

      setList(response);
    } catch (err) {
      console.log(err);
    }
  };

  const changeName = async (item) => {
    const name = prompt(`Enter new name`, `Eugenia Polyakova`);

    try {
      const request = await fetch(`${API}/${item.id}`, {
          method: `PATCH`,
          body: JSON.stringify({ name }),
          headers: {
            "Content-type": "application/json",
          },
        }),
        response = await request.json();

      setList((prevState) =>
        prevState.map((el) => {
          if (el.id === response.id) el = response;
          return el;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = async (item) => {
    try {
      await fetch(`${API}/${item.id}`, {
        method: `DELETE`,
      });

      setList((prevState) => prevState.filter((el) => el.id !== item.id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <button onClick={removeComponent}>X</button>
      {list.length ? (
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              {item.name}{" "}
              <button onClick={() => changeName(item)}>Change name</button>
              <button onClick={() => deleteItem(item)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
