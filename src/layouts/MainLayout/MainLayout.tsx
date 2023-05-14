import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes/Routes";
import "./MainLayout.scss";

export function MainLayout() {
  return (
    <div style={{width: "100%"}}>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}
