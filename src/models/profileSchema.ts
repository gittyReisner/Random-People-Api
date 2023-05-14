import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: {
    title: String,
    first: String,
    last: String
  },
  email: String,
  phone: String,
  picture: String
});

const ProfileModel = mongoose.model('Profile', profileSchema);

export default ProfileModel;

