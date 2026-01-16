import { Schema, model } from 'mongoose';

const ordersSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
      required: [true, 'User ID is required'],
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Products',
          required: [true, 'Product ID is required'],
        },
        quantity: {
          type: Number,
          required: [true, 'Quantity is required'],
          min: [1, 'Quantity must be at least 1'],
        },
      },
    ],
    total: {
      type: Number,
      required: [true, 'Total is required'],
      min: [0, 'Total cannot be negative'],
    },
  },
  {
    timestamps: true,
  }
);

export default model('Orders', ordersSchema);
