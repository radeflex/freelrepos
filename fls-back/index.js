import express from "express";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import UserModel from "./models/UserModel.js";
import multer from "multer";
import {
  loginValidate,
  profileValidate,
  registerValidate,
  workValidate,
} from "./validations.js";
import validationResult from "./validationResult.js";
import cors from "cors";
import checkAuth from "./utils/checkAuth.js";
import WorkModel from "./models/WorkModel.js";

const app = express();
const port = 4444;

app.use("/images", express.static("images"));
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://radeflex:kkkwwwW@cluster0.5iafcvu.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB err: " + err));

app.get("/freelancers", async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});

app.post("/register", registerValidate, validationResult, async (req, res) => {
  try {
    const passwd = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(passwd, salt);

    const doc = new UserModel({
      name: req.body.name,
      email: req.body.email,
      avatar: "",
      biography: "",
      skills: "",
      github: "",
      userEmail: "",
      vk: "",
      passHash: hash,
    });

    const user = await doc.save();
    const { passHash, ...UserData } = user._doc;
    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret1234"
    );
    res.json({
      ...UserData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось зарегистрироваться",
    });
  }
});

app.post(
  "/new-work",
  checkAuth,
  workValidate,
  validationResult,
  async (req, res) => {
    try {
      const doc = new WorkModel({
        userId: req.body.userId,
        title: req.body.title,
        text: req.body.text,
        price: req.body.price,
        picture: req.body.picture,
        contlink: req.body.contlink,
      });
      const work = await doc.save();
      res.json(work._doc);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Не удалось создать вакансию",
      });
    }
  }
);

app.get("/works", async (req, res) => {
  const works = await WorkModel.find();
  res.json(works);
});

app.patch(
  "/edit/:id",
  checkAuth,
  profileValidate,
  validationResult,
  async (req, res) => {
    try {
      const userId = req.params.id;
      await UserModel.updateOne(
        {
          _id: userId,
        },
        {
          name: req.body.name,
          avatar: req.body.avatar,
          biography: req.body.biography,
          skills: req.body.skills,
          github: req.body.github,
          userEmail: req.body.userEmail,
          vk: req.body.vk,
        }
      );
      const user = await UserModel.findOne({ _id: userId });
      const { passHash, ...userData } = user._doc;
      res.json({
        ...userData,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Не удалось обновить данные",
      });
    }
  }
);

app.delete("/works/:id", checkAuth, async (req, res) => {
  await WorkModel.findOneAndDelete({
    _id: req.params.id,
  });
  res.json({
    message: "success",
  });
});

app.post("/login", loginValidate, validationResult, async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({
      message: "Неверный логин или пароль",
    });
  }
  const isValid = await bcrypt.compare(req.body.password, user._doc.passHash);
  if (!isValid) {
    return res.status(400).json({
      message: "Неверный логин или пароль",
    });
  }

  const token = jwt.sign(
    {
      _id: user._doc._id,
    },
    "secret1234"
  );
  const { passHash, ...userData } = user._doc;
  res.json({
    ...userData,
    token,
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server OK");
  }
});
