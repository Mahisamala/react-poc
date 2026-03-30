import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    const [rCount, setRCount] = useState(10);
    return (
        <div>
            <div>Counter Component</div>
            <p>{count}</p>
            <p>{rCount}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setRCount(rCount - 1)}>Decrement</button>
        </div>
        
    )
}

export default Counter;