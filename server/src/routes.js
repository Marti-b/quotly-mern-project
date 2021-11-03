
import express from "express";
import Quote from "./model/quote.js";


function createRouter() {
  const router = express.Router();
  router.use(express.json())
  /* Define all routes */
  router.get("/", async  (req, res) => {
    const quotes = await Quote.find();
    console.log("Qoutes variable: ", quotes)
    res.json( quotes );

   
  });
  // router.put("/quotes", async (req, res) =>{
  //   // const newQuote = new Quote(req.body)
  //   // console.log("Creating post", newQuote)
  //   //  const quotes = await Quote.find();
  //   //  quotes = req.body;
  //   // res.json(quotes)
  // });

  router.post("/", async (req, res) => {
    try{
      console.log(req.body)
      const quote = await Quote.create(req.body);
      res.status(201);
      res.json(quote);
    } catch (error) {
      res.status(500);
      res.json({
        error: "Quote could not be created",
        details: error.toString(),
      });
    }
  });

 //Gets the single quote
  router.get("/hello/:name", async (req, res) => {
    res.json({ msg: `Hello, ${req.params.name}` });
  });
  return router;
}

export default createRouter;
