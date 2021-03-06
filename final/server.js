import express from 'express'
import cors from 'cors'
import Router from './backend/Routers/index.js'
import './backend/mongo.js'
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import wakeUpDyno from "./backend/Routers/wakeUpDyno.js"
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const app = express()
  // init middleware
  app.use(cors())
  //read from client
  app.use(express.json())
  // define routes
  app.use('/api',Router)
  // define server
  app.use(express.static(path.join(__dirname, "build")));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
  const port = process.env.PORT || 5000
  app.listen(port, () => {
    const DYNO_URL = "https://moosetherecord4.herokuapp.com/"
    wakeUpDyno(DYNO_URL);
    console.log(`Server is up on port ${port}`)
})
