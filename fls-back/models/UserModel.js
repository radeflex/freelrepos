import mongoose from "mongoose";

const UserModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    passHash: {
      type: String,
      required: true,
    },
    avatar: String,
    biography: String,
    skills: String,
    github: String,
    userEmail: String,
    vk: String,
    isCustomer: {
      type: String,
      default: "off",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserModel);
