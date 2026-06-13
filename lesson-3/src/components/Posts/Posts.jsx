import React, { useState, useEffect } from "react";
import List from "../List/List";

const API = `https://jsonplaceholder.typicode.com/posts`;

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const request = await fetch(API),
        response = await request.json();

      setPosts(response.slice(0, 10));
    } catch (err) {
      console.log(err);
    }
  };

  const changeTitle = async (item) => {
    const title = prompt(`Enter new title`, `Lorem ipsum`);

    try {
      const request = await fetch(`${API}/${item.id}`, {
          method: `PATCH`,
          body: JSON.stringify({ title }),
          headers: {
            "Content-type": "application/json",
          },
        }),
        response = await request.json();

      setPosts((prevState) =>
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
      await fetch(`${API}/${item.id}`, { method: `DELETE` });
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== item.id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return posts.length ? (
    <ul>
      {posts.map((item) => (
        <li key={item.id}>
          {item.title}{" "}
          <button onClick={() => changeTitle(item)}>Change title</button>
          <button onClick={() => deleteItem(item)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
