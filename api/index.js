const express = require("express");
const app = express();
const activitiesData = require("./data.js");
const db = require("./db/db");
const cors = require("cors");
require("dotenv").config();

app.set("port", process.env.PORT);

app.use(cors());

app.use(express.json());

app.locals.activities = activitiesData;

app.get("/", (req, res) => {
  console.log("Welcome to our kids activities database!");
  res.send("Welcome to our kids activities database!");
});
app.get("/api/v1/activities", async (req, res) => {
  //   const stuff = app.locals.activities;
  //   const something = res.json({ stuff });
  try {
    const data = await db("activities").select();
    res.send(data);
  } catch (err) {
    console.log("Error", err);
    res.status(500).send(err);
  }
});

app.get("/api/v1/activities/:id", (req, res) => {
  const id = Number(req.params.id);
  const activity = app.locals.activities.find((activity) => activity.id === id);
  if (!activity) {
    return res.sendStatus(404);
  }
  res.status(200).json(activity);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
