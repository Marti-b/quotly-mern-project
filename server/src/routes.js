import express from "express";
import quotes from "./quotes.js";

function createRouter() {
  const router = express.Router();

  /* Define all routes */
  router.get("/",  (req, res) => {
    res.json({ quotes });
    console.log("Need to see what is this: ",res.json({ quotes }))
  });

  router.get("/hello/:name", async (req, res) => {
    res.json({ msg: `Hello, ${req.params.name}` });
  });

  return router;
}

export default createRouter;
