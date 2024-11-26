import express from "express";
import router from "./router.js";

const app = express();

app.use(router);

const serverPort = 3310;

app.listen(serverPort, () => {
  console.info(`SERVER STARTED : Listening on port ${serverPort}`);
});
