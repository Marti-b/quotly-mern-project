import { useState } from "react";

function AddText(props){
    console.log("Add text: ", props);
    const {addText} = props;

    const [text, setQuote] = useState("");
    const [source, setSource] = useState("");

    return(

        <div className="add-text">
            <h2>Post a quote to the wall</h2>
            <div>
            <label htmlFor="text">Quote: </label>
            <input
            name="text"
            id="text"
            onChange={(event => setQuote(event.target.value))}
            type="text"
            />
            </div>
            <div>
            <label htmlFor="source">Source: </label>
            <input
            name="text"
            id="text"
            onChange={(event => setSource(event.target.value))}
            type="text"
            />
            </div>
            <button 
            type="submit"
            onClick= {(event =>{
                addText(text, source)
            })}>
                Post it!
            </button>
        </div>
    );
}
export default AddText;