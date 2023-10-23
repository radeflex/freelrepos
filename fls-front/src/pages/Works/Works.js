import "./Works.css";
import Orders from "../../components/Order/Order";
const Works = () => {
  return (
    <div className="works-page">
      <h1 style={{marginBottom: "20px"}}>Все заказы</h1>
      <Orders />
    </div>
  );
};

export default Works;
