import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    author: String,
    // comment : {}
    // like: 0
});

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;