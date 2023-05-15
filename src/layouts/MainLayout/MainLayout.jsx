import { Outlet } from "react-router-dom";

import "./MainLayout.scss";

export function MainLayout() {
  return (
    <div style={{ width: "100%" }}>
      <Outlet />
    </div>
  );
}
