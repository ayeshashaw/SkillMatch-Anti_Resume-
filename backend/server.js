const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 8080;


// ✅ Middleware
app.use(cors({
  origin: "https://skill-match-anti-resume.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

connectDB();






// ✅ API Routes

const userRouter = require("./routes/userRoutes");
const employerRouter = require("./routes/employerRoutes");



app.use("/api/user", userRouter);
app.use("/api/employer", employerRouter);



// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
