import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Container,
  Nav,
  Navbar,

} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logged, logout } from "../../redux/slices/authSlice";

export const Header = () => {
  const isMobile = window.innerWidth <= 500;
  const data = useSelector((state) => state.auth.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector(logged);
  const logOut = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      dispatch(logout());
      navigate("/");
    }
  };
  return (
    <div>
      {isMobile ? (
        <Navbar
          expand="lg"
          bg="dark"
          data-bs-theme="primary"
          variant="dark"
          style={{ marginBottom: "30px" }}
        >
          <Container>
            <Navbar.Brand href="/">SBF</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/works">Заказы</Nav.Link>
                <Nav.Link href="/freelancers">Фрилансеры</Nav.Link>
                <Nav.Link href="/courses">Курсы</Nav.Link>
                <Nav.Link href="/about">О нас</Nav.Link>
                {!isLogged ? (
                  <Nav>
                    <Nav.Link href="/login">Вход</Nav.Link>
                    <Nav.Link href="/register">Регистрация</Nav.Link>
                  </Nav>
                ) : (
                  <Nav>
                    <Nav.Link href={`/${data._id}`}>Профиль</Nav.Link>
                    <Nav.Link href="/" onClick={logOut}>Выйти</Nav.Link>
                  </Nav>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar
          data-bs-theme="primary"
          style={{ marginBottom: "30px", backgroundColor: "#FFFFFF" }}
        >
          <Container>
            <Navbar.Brand>
              <Link to="/">Blacc Freelance</Link>
            </Navbar.Brand>
            <Nav className="navbar-nav">
              <Nav.Link>
                <Link to="/works">Заказы</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/freelancers">Фрилансеры</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/courses">Курсы</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">О нас</Link>
              </Nav.Link>
            </Nav>

            {!isLogged ? (
              <ButtonGroup>
                <Button
                  variant="outline-primary"
                  onClick={() => navigate("/login")}
                >
                  Войти
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={() => navigate("/register")}
                >
                  Регистрация
                </Button>
              </ButtonGroup>
            ) : (
              <ButtonGroup>
                <Button
                  onClick={() => navigate(`/${data._id}`)}
                  variant="outline-secondary"
                >
                  Профиль
                </Button>
                <Button variant="outline-danger" onClick={logOut}>
                  Выйти
                </Button>
              </ButtonGroup>
            )}
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default Header;
