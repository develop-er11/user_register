const express = require("express");
const notes = require("./data/notes")
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const userRoutes=require('./routes/userRoutes')

const app = express();
dotenv.config();
connectDB();
app.use(express.json()); // to accept json data


app.get('/', (req, res) => {
    res.send("API is running..");
});

app.get('/api/notes', (req, res) => {
    res.json(notes)
});


app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on PORT ${PORT}`)); 





//import path from "path";



// --------------------------deployment------------------------------
/*const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
*/