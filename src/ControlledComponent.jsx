import { useState } from "react";
function ControlledComponent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h2>Controlled Component Example</h2>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter Name" />
                <br/><br/>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter Email" />
                <br/><br/>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter Password" />
                <br/><br/>
                <button type="submit">Submit</button>
                <button type="button" onClick={() => { setName(''); setEmail(''); setPassword(''); }}>Clear</button>
            </form>

            <h3>Your Input:</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </div>
    )
}
export default ControlledComponent;