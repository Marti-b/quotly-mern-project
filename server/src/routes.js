import express from "express";
import quotes from './quotes.json';

function createRouter() {
  const router = express.Router();



  /* Define all routes */
  router.get("/", async (req, res) => {
    res.json({ quotes });
  });

  router.get("/hello/:name", async (req, res) => {
    res.json({ msg: `Hello, ${req.params.name}` });
  });

  return router;
}

export default createRouter;
