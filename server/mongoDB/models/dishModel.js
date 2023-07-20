import { Schema, model } from 'mongoose';

const chickenDishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  portions: [
    {
      size: {
        type: String,
        required: true,
      },
      measurement: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: false,
      },
      weight: {
        type: Number,
        required: true,
      },
    },
  ],
});

const ChickenDish = model('ChickenDish', chickenDishSchema);

export default ChickenDish;
