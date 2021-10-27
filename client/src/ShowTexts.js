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
                <ol>
                {quotes.map((item) => {
                    return(
                        <li key={item.id}><Link to={`/quote/${item.id}`}> {item.text}, {item.source}</Link></li>
                    )
               })}
                </ol>
              
             )
         }
        
        </>
    )
}
export default ShowTexts;