import { NavLink } from "react-router-dom";

function Navigation() {
  const linkStyle = ({ isActive }) => ({
    padding: "8px 12px",
    borderRadius: 8,
    textDecoration: "none",
    background: isActive ? "#007bff" : "#ccc",
    color: isActive ? "#fff" : "#000",
    marginRight: 8,
    display: "inline-block",
  });

  return (
    <nav style={{ margin: "12px 0" }}>
      <NavLink to="/state" style={linkStyle}>
        State
      </NavLink>
      <NavLink to="/controlled-input" style={linkStyle}>
        Controlled Input
      </NavLink>
      <NavLink to="/conditional-rendering" style={linkStyle}>
        Conditional
      </NavLink>
      <NavLink to="/props" style={linkStyle}>
        Props
      </NavLink>
      <NavLink to="/counter" style={linkStyle}>
        Counter
      </NavLink>
      <NavLink to="/controlled-form" style={linkStyle}>
        Controlled Form
      </NavLink>
      <NavLink to="/questionnaire" style={linkStyle}>
        Questionnaire
      </NavLink>
      <NavLink to="/tabs" style={linkStyle}>
        Tabs
      </NavLink>
    </nav>
  );
}

export default Navigation;

