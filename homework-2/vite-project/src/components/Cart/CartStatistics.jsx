import React from "react";

export default function CartStatistics({
  itemsCount,
  totalPrice,
  actionsCount,
}) {
  return (
    <>
      <hr></hr>
      <h2>Cart Statistics:</h2>
      <h4>Items count: {itemsCount}</h4>
      <h4>Total price: {totalPrice}</h4>
      <h4>Actions count: {actionsCount}</h4>
    </>
  );
}
