import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxLength: 500
    },
    author: String,
     comment : [{
         username: {type: String, required: true},
         content: {type: String, required: true}
     }],
     //like: 0
});

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;