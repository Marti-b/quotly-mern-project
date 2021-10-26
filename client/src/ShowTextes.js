 function ShowTextes(props){
   let quotes = props.quotes 
    console.log("See what we get for ShowTextes component: ", quotes)
    return(
        <>
         <ol>
        {quotes.map((item) => {
            return(
                <li key={item.id}> {item.text}, {item.source}</li>
            )
       })}
        </ol>
       
        </>
    )
}
export default ShowTextes;