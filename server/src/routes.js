import express from "express";
import Quote from "./model/quote.js";
import quotes from "./quotes.js";

function createRouter() {
  const router = express.Router();

  /* Define all routes */
  router.get("/quotes", async  (req, res) => {
    const quotes = await Quote.find();
    res.json({ quotes });
   
  });

  router.get("/hello/:name", async (req, res) => {
    res.json({ msg: `Hello, ${req.params.name}` });
  });

  return router;
}

export default createRouter;
