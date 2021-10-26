function Text(props){
    console.log("Single quote Text component: ", props)

    const singleQuote = props.getQuote(props.id)
    console.log("See if it finds the quote:", singleQuote)
    return(
        <>
         <p>{singleQuote.id}</p>
         <p>{singleQuote.text}</p>
         <p>{singleQuote.source}</p>
        </>
    )
}
export default Text;