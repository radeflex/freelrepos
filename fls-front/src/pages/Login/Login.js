import { Link, json } from "react-router-dom";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin, logError, logged } from "../../redux/slices/authSlice";

const Login = () => {
  const isError = useSelector(logError);
  const isLogged = useSelector(logged);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values) => {
    dispatch(fetchLogin(values))
      .then((res) => res.payload)
      .then((pl) => {
        try {
          window.localStorage.setItem("token", pl.token);
          window.localStorage.setItem("user", JSON.stringify(pl));
        } catch (err) {
          console.log(err);
        }
      });
  };
  if (isLogged) {
    return <Navigate to="/" />;
  }
  return (
    <div
      style={{
        marginTop: "7%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "300px" }}>
        <h2>Вход</h2>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Электронная почта"
            {...register("email", { required: "Укажите email" })}
          />
          <Form.Label
            style={{
              height: "3px",
              fontSize: "12px",
              display: "flex",
              color: "red",
              justifyContent: "flex-start",
            }}
          >
            {errors.email?.message}
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Пароль"
            {...register("password", { required: "Укажите пароль" })}
          />
          <Form.Label
            style={{
              height: "3px",
              fontSize: "12px",
              display: "flex",
              color: "red",
              justifyContent: "flex-start",
            }}
          >
            {errors.password?.message}
            {errors.password?.message !== "Укажите пароль"
              ? isError && "Неверный логин или пароль"
              : ""}
          </Form.Label>
        </Form.Group>
        <Form.Group
          className="mb-3"
          style={{ display: "flex", justifyContent: "space-around" }}
        ></Form.Group>
        <Button variant="primary" type="submit">
          Войти
        </Button>{" "}
        <span style={{ opacity: 0.5, fontSize: "13px", marginLeft: "10px" }}>
          Нет аккаунта?{" "}
          <Link to="/register" style={{ color: "blue", opacity: 0.9 }}>
            Зарегистрироваться
          </Link>
        </span>
      </Form>
    </div>
  );
};

export default Login;
