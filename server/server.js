const express = require("express");
const app = express();
var cors = require("cors");
require('dotenv').config()
const port = 5001;

const dbConnection = require("./db");

app.use(express.json());

app.use(cors());
app.use("/api/cars/", require("./routes/carsRoute"));
app.use("/api/users/", require("./routes/usersRoute"));
app.use("/api/bookings/", require("./routes/bookingsRoute"));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(process.env.PORT || port, () => console.log(`Node server started on${port}!`));
