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
      }
        );
        console.log("This is the quote for the comment: ", quote);

        // if (quote) {
        //   res.json(quote);
        // } else {
        //   res.status(404);
        //   res.json({ error: "Quote for comment not found" });
        // }
        
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
  
  return router;
}

// quoteRoutes.post("/:id/comments", async (req, res) => {
//   try {
//     const quote = await Quote.findOneAndUpdate({_id: req.params.id},
//       {
//       $push: {
//         comments: req.body
//       }
//     },{
//       returnDocument: 'after'
//     }
//       );
//       console.log("This is the quote for the comment: ", quote);
//     if (quote) {
//       res.json(quote);
//     } else {
//       res.status(404);
//       res.json({ error: "Quote for comment not found" });
//     }
    
//     res.status(201);
//     res.json(quote);
//   } catch (error) { 
//     res.status(500);
//     res.json({
//       error: "Comment could not be created",
//       details: error.toString(),
//     });
//   }
// });


export default createRouter;
