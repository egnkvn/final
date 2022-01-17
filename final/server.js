import express from 'express'
import cors from 'cors'
import Router from './backend/Routers/index.js'
import './backend/mongo.js'
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const app = express()
  // init middleware
  app.use(cors())
  //read from client
  app.use(express.json())
  // define routes
  app.use('/api',Router)
  // define server
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
    app.get("/calendar", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
  // app.use(express.static(path.join(__dirname, "build")));
  // app.get("/", function (req, res) {
  //   res.sendFile(path.join(__dirname, "build", "index.html"));
  // });
  // app.get("/calendar", function (req, res) {
  //   res.sendFile(path.join(__dirname, "build", "index.html"));
  // });
  const port = process.env.PORT || 5000
  app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
