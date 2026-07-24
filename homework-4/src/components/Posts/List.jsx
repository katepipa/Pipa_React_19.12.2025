import React, { useMemo, memo } from "react";

import ListItem from "./ListItem";

export default memo(function List({ posts, changeTitle, deleteItem }) {
  const sortedList = useMemo(
    () => posts.sort((a, b) => b.completed - a.completed),
    [posts]
  );

  const filteredList = useMemo(() => {
    return sortedList.filter(
      (post) => post.title.trim().split(/\s+/).length > 0
    );
  }, [sortedList]);
  return filteredList.length ? (
    <ul>
      {filteredList.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          changeTitle={changeTitle}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  ) : null;
});
