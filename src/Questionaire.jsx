import { useState } from "react";
function Questionaire() {
    const [answer, setAnswer] = useState([]);
    const handleChange = (event) => {
        const { value, checked } = event.target;

        setAnswer((prev) => {
            if (checked) {
                // Avoid duplicates if the same checkbox is toggled multiple times.
                return prev.includes(value) ? prev : [...prev, value];
            }

            return prev.filter((item) => item !== value);
        });
    }
    return (
    <div>
        <hr/>
       <h3>Questionaire Component</h3>
       <div>
        <input type="checkbox" onChange={handleChange} id="fav" value="fav" />
        <label htmlFor="fav">1. What is your favorite programming language?</label>
       </div>

       <div>
        <input type="checkbox" onChange={handleChange} id="frame" value="frame" />
        <label htmlFor="frame">2. What is your favorite framework?</label>
       </div>

       <div>
        <input type="checkbox" onChange={handleChange} id="db" value="db" />
        <label htmlFor="db">3. What is your favorite database?</label>
       </div>

       <h3>{answer.toString()}</h3>

       <div className="answer">
        <h4>Answers:</h4>
        <p>1. JavaScript</p>
        <p>2. React</p>
        <p>3. MongoDB</p>
       </div>
       <hr/>
    </div>
)
}
export default Questionaire;