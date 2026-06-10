import React, { useState, useEffect } from "react";

export default function CartControls({
  addItem,
  removeItem,
  clearCart,
  addCustomPriceItem,
  liftingActionCount,
}) {
  const [actionsCount, setActionsCount] = useState(0);

  const handleAddItem = () => {
    addItem();
    setActionsCount((prevState) => prevState + 1);
  };

  const handleRemoveItem = () => {
    removeItem();
    setActionsCount((prevState) => prevState + 1);
  };

  const handleClearCart = () => {
    clearCart();
    setActionsCount((prevState) => prevState + 1);
  };

  const handleInputPrice = (e) => {
    const value = Number(e.target.value);
    if (value > 0) {
      addCustomPriceItem(value);
      setActionsCount((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    console.log(`🟡 in componentDidUpdate for actionsCount`, actionsCount);
    liftingActionCount(actionsCount);
  }, [actionsCount]);

  return (
    <div className="cartControls">
      <button onClick={handleAddItem}>Add item "+100₴"</button>
      <button onClick={handleRemoveItem}>Remove item "-100₴"</button>
      <button onClick={handleClearCart}>Clear cart</button>
      <input type="number" onBlur={handleInputPrice} />
    </div>
  );
}
