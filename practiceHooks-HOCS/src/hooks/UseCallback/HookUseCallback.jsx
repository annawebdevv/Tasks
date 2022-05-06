import { useState, useCallback } from "react";
import { ItemsList } from "./ItemsList";

export const HookUseCallback = () => {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState(false);

  const generateItems = useCallback(() => {
    return new Array(count).fill("").map((_, i) => `Elem ${i + 1}`);
  }, [count]);

  const styles = {
    color: color ? "green" : "grey",
  };

  return (
    <div>
      <h2 style={styles}>Callback</h2>
      <button onClick={() => setCount((prev) => prev + 1)}> +1 Elem </button>

      <button
        onClick={() => {
          setColor(!color);
        }}>
        Change color
      </button>
      <ItemsList getItems={generateItems} />
    </div>
  );
};
