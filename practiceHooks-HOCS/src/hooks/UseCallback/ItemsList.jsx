import { useState, useEffect, Fragment } from "react";

export const ItemsList = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
      console.log('rer')
    const newItem = getItems();
    setItems(newItem);
  }, [getItems]);

  return (
    <Fragment>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </Fragment>
  );
};
