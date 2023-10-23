import { useSelector } from "react-redux";

const Main = () => {
  const userInfo = useSelector((state) => state.auth.data);
  return (
    <div>
      <h1>Здравствуй, {userInfo.name}</h1>
    </div>
  );
};

export default Main;
