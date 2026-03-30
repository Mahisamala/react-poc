import { useState } from "react";
import Teammate from "../Teammate";

function ConditionalTeammateDemo() {
  const [teamMember, setTeamMember] = useState();

  return (
    <div>
      <button onClick={() => setTeamMember("Surendra")}>Set Team Member</button>
      {teamMember && <Teammate name={teamMember} />}
    </div>
  );
}

export default ConditionalTeammateDemo;

