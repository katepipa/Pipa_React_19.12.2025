import React from "react";

export default function CartSummary({ itemsCount, totalPrice }) {
  return (
    <>
      <h1>Number of items in the cart: {itemsCount}</h1>
      <h2>Total price: {totalPrice}</h2>
    </>
  );
}
