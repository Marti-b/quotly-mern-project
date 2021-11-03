import { Link } from "@reach/router";

 function ShowTexts(props){
   let quotes = props.quotes 
    console.log("See what we get for ShowTexts component: ", quotes)
    return(
        <>
         {props.children}
         {
             quotes.length === 0 ? (<p>Loading...</p>) : 
             (
                <div className="quotes">
                     {quotes.map((item) => {
                    return(
                        <div className="quoteItem" key={item._id}><Link to={`/quote/${item._id}`}> {item.text}, {item.author}</Link></div>
                    )
               })}
                </div>
              
             )
         }
        
        </>
    )
}
export default ShowTexts;