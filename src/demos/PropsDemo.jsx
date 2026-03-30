import College from "../College";
import User from "../User";

function PropsDemo() {
  const userObject = {
    name: "Mahesh",
    age: 24,
    email: "mahesh@example.com",
  };

  const colllegeNames = ["Harvard", "MIT", "Stanford"];

  return (
    <div>
      <College names={colllegeNames} />
      <hr />
      <User user={userObject} />
    </div>
  );
}

export default PropsDemo;

