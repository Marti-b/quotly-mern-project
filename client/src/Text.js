

function Text(props){
    // console.log("Props of what Text component gets: ", props)

    // let { id } = useParams();

    const singleQuote = props.getQuote(props.id)
    const comment = singleQuote.comment;
//  console.log("See if it finds the quote:", singleQuote)
console.log("See if it finds the comment:", comment)
    return(
        <div className="singleQuote">
         <p>{singleQuote._id}</p>
         <p>{singleQuote.text}</p>
         <p>{singleQuote.author}</p>

         {props.children}

         {comment.map((item) => {
             return(
             <div className="comment">
                 <p>{item.username}</p>
                 <p>{item.content}</p>
             </div> 
             )
             
         })}
        </div>
        
    )
}
export default Text;