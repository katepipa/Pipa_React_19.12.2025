import React, { useState } from "react";
import List from "./components/List/List";

export default function App() {
  const [showList, setShowList] = useState(true);
  const removeList = () => setShowList(false);

  return <>{showList && <List removeComponent={removeList} />}</>;
}
