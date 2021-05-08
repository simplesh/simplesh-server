import mongoose, { model, Schema } from "mongoose";

const link = new Schema({
  tag: String,
  link: String,
});

export default model("Link", link);
