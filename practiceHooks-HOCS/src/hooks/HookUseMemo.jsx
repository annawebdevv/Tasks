import { useState, useMemo } from "react";

function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

export const HookUseMemo = () => {
  const [count, setCount] = useState(50);
  const [color, setColor] = useState(false);
  // const [content, setContent] = useState()

  const computed = useMemo(() => {
   return complexCompute(count);
  }, [count]);

  const styles =  useMemo(() =>{
    return {color: color ? "green" : "grey"}
  }, [color]);

  return (
    <div>
      <h2>Memo</h2>
      <p style={styles}> computed number {computed}</p>
      <button onClick={() => setCount((prev) => prev + 2)}> +2 </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 2);
        }}>
        {" "}
        -2{" "}
      </button>
      <button
        onClick={() => {
          setColor(!color);
        }}>
        {" "}
        Change color{" "}
      </button>
    </div>
  );
}; 
