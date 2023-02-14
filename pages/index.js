import ButtonAppBar from "@/components/AppBar";
import Dashboard from "@/components/Dashboard";
import { useEffect } from "react";
import { actions } from "src/reduxStore";
import { useSelector } from "react-redux";

export default function Home() {
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      actions.setUserData(JSON.parse(userData));
    }
  }, []);

  return (
    <div>
      <ButtonAppBar />
      <Dashboard />
    </div>
  );
}
