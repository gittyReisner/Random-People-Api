const  express =require ('express');
const bodyParser = require('body-parser');
const cors =require ('cors');
const mongoose =require ('mongoose');
import profileRoutes from './routes/profileRoutes';
import ProfileModel from './models/profileSchema';
require('dotenv').config();

const app = express();

const connectDB = async () => {
  try {
    const options: any = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
  }
};

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/profiles', profileRoutes);

app.get('/profiles', async (req, res) => {
  try {
    const profiles = await ProfileModel.find();
    res.json(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});