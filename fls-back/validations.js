import { body } from "express-validator";

export const registerValidate = [
  body("email", "Неверный email").isEmail(),
  body("name", "Имя должно быть не короче 3 символов").isLength({ min: 3 }),
  body("password", "Пароль должен быть не короче 6 символов").isLength({
    min: 6,
  }),
];

export const loginValidate = [
  body("email", "Неверный email").isEmail(),
  body("password", "Пароль должен быть не короче 6 символов").isLength({
    min: 6,
  }),
];

export const workValidate = [
  body("title", "Слишком короткий заголовок (не менее 10 символов)").isLength({
    min: 10,
  }),
  body("text", "Слишком короткое описание (не менее 20 символов)").isLength({
    min: 20,
  }),
  body("price", "Цена должна быть числом").optional().isInt(),
  body("contlink", "Укажите правильный email").isEmail() ||
    body("contlink", "Укажите правильную ссылку").isURL(),
];

export const profileValidate = [
  body("name", "Слишком короткое имя (не менее 3 символов)").isLength({
    min: 3,
  }),
];
