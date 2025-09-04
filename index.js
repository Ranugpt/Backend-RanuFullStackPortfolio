// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // ✅ MongoDB Atlas connection
// // mongoose.connect(
// //   "mongodb+srv://guptaranu719_db_user:LTqAi83uTD2Wz12B@cluster0.dqkvg1w.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0"
// // )
// // .then(() => {
// //   console.log("✅ MongoDB connected");
// // })
// // .catch((error) => {
// //   console.error("❌ MongoDB connection error:", error);
// // });

// // // Schema
// // const MessageSchema = new mongoose.Schema({
// //   name: String,
// //   email: String,
// //   message: String,
// // });

// // const Message = mongoose.model("Message", MessageSchema);

// // // Routes
// // app.post("/api/contact", async (req, res) => {
// //   try {
// //     const { name, email, message } = req.body;
// //     const newMessage = new Message({ name, email, message });
// //     await newMessage.save();
// //     res.json({ success: true, message: "Message saved!" });
// //   } catch (error) {
// //     res.status(500).json({ success: false, error: "Failed to save message" });
// //   }
// // });

// // app.listen(5000, () => console.log("🚀 Backend running at http://localhost:5000"));



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path"); // ✅ add this

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ✅ MongoDB Atlas connection
// mongoose.connect(
//   "mongodb+srv://guptaranu719_db_user:LTqAi83uTD2Wz12B@cluster0.dqkvg1w.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0"
// )
// .then(() => {
//   console.log("✅ MongoDB connected");
// })
// .catch((error) => {
//   console.error("❌ MongoDB connection error:", error);
// });

// // Schema
// const MessageSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
// });

// const Message = mongoose.model("Message", MessageSchema);

// // Routes
// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;
//     const newMessage = new Message({ name, email, message });
//     await newMessage.save();
//     res.json({ success: true, message: "Message saved!" });
//   } catch (error) {
//     res.status(500).json({ success: false, error: "Failed to save message" });
//   }
// });

// // ✅ Serve frontend build (React Vite dist folder)
// app.use(express.static(path.join(__dirname, "dist")));

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

// // ✅ Use Render's dynamic port
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Atlas connection
mongoose
  .connect(
    "mongodb+srv://guptaranu719_db_user:LTqAi83uTD2Wz12B@cluster0.dqkvg1w.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });

// Schema
const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Message = mongoose.model("Message", MessageSchema);

// ✅ API Route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.json({ success: true, message: "Message saved!" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to save message" });
  }
});

// ✅ Serve React frontend (dist folder)
const frontendPath = path.join(__dirname, "../Frontend/dist");
app.use(express.static(frontendPath));

// ✅ Catch-all route for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ✅ Render/Heroku port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
