const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/Cart");
const ProductRoute = require("./routes/product");
// const OrderRoute = require("./routes/order");
const cors = require("cors");

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

dotenv.config();

mongoose
  .connect(process.env.mongo_URl)
  .then(() => console.log("DB connection successfully"))
  .catch((err) => console.log(err));


app.use(cors());
app.use(express.json());
app.use('/api/users' , userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', ProductRoute);
app.use('/api/carts', cartRoute);
// app.use('/api/orders',OrderRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("backend server running!");
});
