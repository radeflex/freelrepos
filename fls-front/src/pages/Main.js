import MainGuest from "./MainPages/IfGuest/Main";
import MainLogged from "./MainPages/IfLogged/Main";
import { logged } from "../redux/slices/authSlice";
import { useSelector } from "react-redux";

const Main = () => {
  const isLogged = useSelector(logged);
  return (
    <div>
      {!isLogged && <MainGuest />}
      {isLogged && <MainLogged />}
    </div>
  );
};

export default Main;
