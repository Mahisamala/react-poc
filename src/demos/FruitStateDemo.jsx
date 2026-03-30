import { useState } from "react";

function FruitStateDemo() {
  const [fruit, setFruit] = useState("banana");

  return (
    <div>
      <div style={{ marginBottom: 8 }}>{fruit}</div>
      <button onClick={() => setFruit("apple")}>Click me</button>
    </div>
  );
}

export default FruitStateDemo;

