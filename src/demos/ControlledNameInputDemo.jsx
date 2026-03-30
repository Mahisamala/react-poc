import { useState } from "react";

function ControlledNameInputDemo() {
  const [inputVal, setInputVal] = useState("Mahesh Samalla");

  return (
    <div>
      <h5 style={{ marginTop: 0 }}>Get Input Field Value</h5>
      <input
        type="text"
        value={inputVal}
        onChange={(event) => setInputVal(event.target.value)}
        placeholder="Enter your Name"
      />
      <h3>{inputVal}</h3>
      <button onClick={() => setInputVal("")}>Clear Value</button>
    </div>
  );
}

export default ControlledNameInputDemo;

