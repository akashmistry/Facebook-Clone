const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./config/mongoose");
const app = express();

const PORT = process.env.PORT || 2620;

// CORS DETAILED OPTIONS
// const options = {
//   origin: "http://localhost:3000",
//   useSuccessStatus: 200,
// };

// let allowed = ["http://localhost:3000", "soem other link"];
// function options(req, res) {
//   let tmp;
//   let origin = req.header("Origin");
//   if (allowed.indexOf(origin) > -1) {
//     tmp = {
//       origin: true,
//       optionSuccessStatus: 200,
//     };
//   } else {
//     tmp = {
//       origin: "Stupid",
//     };
//   }
//   res(null, tmp);
// }

app.use(express.json());

// PASS THE OPTIONS IN THE CORS FUNCTION
app.use(cors());

// const userRoutes = require("./routes/user");
// app.use("/", userRoutes);

// ROUTES
readdirSync("./routes").map((route) =>
  app.use("/", require("./routes/" + route))
);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in firing up the server");
  }
  console.log("Fireing up the express server on:", PORT);
});
