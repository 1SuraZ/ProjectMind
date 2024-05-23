const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const therapyRoutes = require('./routes/therapyRoutes');
const peerSupportRoutes = require('./routes/peerSupportRoutes');
const beMindfulRoutes = require('./routes/beMindfulRoutes');
const blogRoutes = require('./routes/blogRoutes'); 

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/therapy', therapyRoutes);
app.use('/peer-support', peerSupportRoutes);
app.use('/be-mindful', beMindfulRoutes);
app.use('/blog', blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
