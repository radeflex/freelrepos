import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  editWorkStatus,
  fetchWorksCreate,
} from "../../redux/slices/worksSlice";
import { Navigate } from "react-router-dom";

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });
  const id = JSON.parse(window.localStorage.getItem("user"))._id;
  const success = useSelector(editWorkStatus);
  const editErr = useSelector((state) => state.works.eStatus === "error")
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    values.userId = id;
    dispatch(fetchWorksCreate(values)).then((res) => console.log(res));
  };
  return !success ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "7%",
      }}
    >
      <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "300px" }}>
        <h2>Создать новую запись</h2>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Аватар (необязательно, проверьте правильность ссылки)"
            {...register("picture")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Заголовок (не менее 10 символов)"
            {...register("title", {
              required: "Заголовок не может быть короче 10 символов",
            })}
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
            {errors.title?.message}
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Описание (не менее 20 символов)"
            {...register("text", {
              required: "Текст не может быть короче 20 символов",
            })}
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
            {errors.text?.message}
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Цена (число)"
            {...register("price", { required: "Цена должна быть числом" })}
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
            {errors.price?.message}
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Контакты (ссылка или эл.почта, обязательно)"
            {...register("contlink")}
          /><Form.Label
          style={{
            height: "3px",
            fontSize: "12px",
            display: "flex",
            color: "red",
            justifyContent: "flex-start",
          }}
        >
          {editErr && "Проверьте правильность заполнения формы"}
          </Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit">
          Создать запись
        </Button>
      </Form>
    </div>
  ) : (
    <Navigate to="/works" />
  );
};

export default CreatePost;
