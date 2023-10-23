import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div
      style={
        !(window.innerWidth <= 500)
          ? {
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "100px",
              height: "200%",
            }
          : {
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "55px",
              height: "200%",
            }
      }
    >
      <h1>Здравствуй, гость!</h1>
      <h3>Хотите оформить заказ или найти заказчика?</h3>
      <Link to="/login">
        <Button size="lg" type="submit" variant="success">
          Продолжить
        </Button>
      </Link>
    </div>
  );
};

export default Main;
