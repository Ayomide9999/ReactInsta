import express, { json } from "express";

const app = express();
app.use(json({ limit: "25mb" })); // parses request to client side in json body front format
app.use(express.urlencoded({ extended: true }));
// security purpose
app.disabled("x-powered-by");

export default app