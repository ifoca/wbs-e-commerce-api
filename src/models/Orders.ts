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
        },
      },
    ],
    total: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Orders', ordersSchema);
