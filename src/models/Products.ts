import { Schema, model } from 'mongoose';

const productsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      trim: true,
      min: 0,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'Categories',
      required: [true, 'Category ID is required'],
    },
  },
  {
    timestamps: true,
  }
);

export default model('Products', productsSchema);
