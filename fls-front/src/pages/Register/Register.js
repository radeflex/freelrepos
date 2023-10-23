import "./Register.css";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  duplicateError,
  fetchRegister,
  logged,
} from "../../redux/slices/authSlice";
import { Navigate } from "react-router-dom";

const Register = () => {
  const isLogged = useSelector(logged);
  const isError = useSelector(duplicateError);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      password: "",
      email: "",
    },
  });
  const onSubmit = async (values) => {
    dispatch(fetchRegister(values));
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
      <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "200px" }}>
        <h2>Регистрация</h2>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control
            type="email"
            placeholder="Электронная почта"
            {...register("email", { required: "Введите email" })}
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
            placeholder="Имя пользователя"
            {...register("name", { required: "Введите имя" })}
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
            {errors.name?.message}
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Пароль"
            {...register("password", { required: "Введите пароль" })}
          />
          <Form.Label
            style={{
              height: "40px",
              fontSize: "12px",
              display: "flex",
              color: "red",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "200px",
            }}
          >
            {errors.password?.message && !isError}
            {isError &&
              "Пользователь с таким email уже существует / Слишком короткий пароль(не менее 6 символов)"}
          </Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit">
          Зарегистрироваться
        </Button>
      </Form>
    </div>
  );
};

export default Register;
