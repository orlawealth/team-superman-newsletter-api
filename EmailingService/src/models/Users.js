import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  isSubscribed: {
    type: Boolean,
    default: false
  }
});

export default model('users', UserSchema);
