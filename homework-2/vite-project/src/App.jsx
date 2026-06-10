import React, { useState } from "react";

import CartSummary from "./components/Cart/CartSummary";
import CartControls from "./components/Cart/CartControls";
import CartStatistics from "./components/Cart/CartStatistics";

export default function App() {
  const [itemsCount, setItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [actionsCount, setActionsCount] = useState();

  const addItem = () => {
    setItemsCount(itemsCount + 1);
    setTotalPrice(totalPrice + 100);
  };

  const removeItem = () => {
    if (itemsCount > 0) {
      setItemsCount((prevState) => prevState - 1);
      setTotalPrice((prevState) => Math.max(0, prevState - 100));
    }
    return 0;
  };

  const clearCart = () => {
    setItemsCount(0);
    setTotalPrice(0);
  };

  const addCustomPriceItem = (price) => {
    setItemsCount((prevState) => prevState + 1);
    setTotalPrice((prevState) => prevState + price);
  };

  const liftingActionCount = (value) => {
    setActionsCount(value);
  };

  return (
    <>
      <CartSummary itemsCount={itemsCount} totalPrice={totalPrice} />
      <CartControls
        addItem={addItem}
        removeItem={removeItem}
        clearCart={clearCart}
        addCustomPriceItem={addCustomPriceItem}
        liftingActionCount={liftingActionCount}
      />
      <CartStatistics
        itemsCount={itemsCount}
        totalPrice={totalPrice}
        actionsCount={actionsCount}
      />
    </>
  );
}
