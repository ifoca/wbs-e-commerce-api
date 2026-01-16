import { Schema, model } from 'mongoose';

const categoriesSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Categories', categoriesSchema);
