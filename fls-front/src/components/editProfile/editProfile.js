import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams, Navigate } from "react-router-dom";
import {
  fetchProfileUpdate,
  editStatus,
} from "../../redux/slices/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const EditProfile = () => {
  const editErr = useSelector((state) => state.profile.status === "error");
  const defValues = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();
  const userId = useParams();
  const success = useSelector(editStatus);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: defValues?.name,
      biography: defValues?.biography,
      skills: defValues?.skills,
      vk: defValues?.vk,
      github: defValues?.github,
      userEmail: defValues?.userEmail,
      avatar: defValues?.avatar,
    },
  });
  const onSubmit = async (values) => {
    values.id = userId;
    dispatch(fetchProfileUpdate(values))
      .then((res) => res.payload)
      .then((pl) => {
        try {
          window.localStorage.setItem("user", JSON.stringify(pl));
        } catch (err) {
          console.log(err);
          console.log("Не удалось сохранить данные");
        }
      });
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
        <h2>Редактировать профиль</h2>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Имя (не менее 3 символов)"
            {...register("name", {
              required: "Укажите имя",
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
            {errors.name?.message}
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Ссылка на аватар (необязательно, проверьте правильность ссылки)"
            {...register("avatar")}
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
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Описание(био)"
            {...register("biography")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Навыки"
            {...register("skills")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Ваш контактный email"
            {...register("userEmail")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Ваш github" {...register("github")} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Ваша страница Вконтакте"
            {...register("vk")}
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
            {editErr && "Проверьте правильность заполнения формы"}
          </Form.Label>
        </Form.Group>

        <Button variant="primary" type="submit">
          Принять
        </Button>
      </Form>
    </div>
  ) : (
    <Navigate to={`/${userId.id}`} />
  );
};

export default EditProfile;
