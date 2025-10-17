import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./index.css";

export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
