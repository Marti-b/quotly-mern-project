import express from "express";
import Quote from "./model/quote.js";


function createRouter() {
  const router = express.Router();
  router.use(express.json())

  /* Define all routes */
  router.get("/", async  (req, res) => {
    const quotes = await Quote.find();
    res.json( quotes );

   
  });

  router.post("/", async (req, res) => {
    try{
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

 //Post comment
  router.put("/quote/:id", async (req, res) => {
    try {
      const quote = await Quote.findOneAndUpdate( {_id: req.params.id},
        {
        $push: {
          comment: req.body
        }
      },{
        returnDocument: 'after'
      });

        res.status(201);
        res.json(quote);
      } catch (error) { 
        res.status(500);  
        res.json({
          error: "Comment could not be created",
          details: error.toString(),
        });
      }
  });
  router.put("/quote/:id", async (req, res) =>{
    try {
      const quote = await Quote.findOneAndUpdate( {_id: req.params.id});
        quote.like++
        quote.save();
        res.status(201);
        res.json(quote);
      } catch (error) { 
        res.status(500);  
        res.json({
          error: "Quote could not be liked",
          details: error.toString(),
        });
      }
  })
  return router;
}

export default createRouter;
