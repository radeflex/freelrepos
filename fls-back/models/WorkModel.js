import mongoose from "mongoose";

const WorkModel = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    contlink: String,
    picture: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Work", WorkModel);
