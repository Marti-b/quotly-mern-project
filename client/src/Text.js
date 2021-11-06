import AddLike from "./AddLike";


function Text(props){
    // console.log("Props of what Text component gets: ", props)
    var { data, addLike } = props;
 

    const singleQuote = props.getQuote(props.id)
    const comment = singleQuote.comment;
    // const like = singleQuote.like
//  console.log("See if it finds the quote:", singleQuote)
console.log("See if it finds the comment:", comment)
    return(
        <div className="singleQuote">
         
         <p>{singleQuote.text}</p>
         <p>{singleQuote.author}</p>
        <hr/>
       
         {/* <p>Number of like: {like}</p>
        <button
            type="button"
            onClick={()=> {
                props.addLike(like + 1)
            }}>
                Like
            </button> */}
        <AddLike addLike={addLike} path="/"/>
         {props.children}

         {comment.map((item) => {
             return(
             <div className="comment">
                 <p>{item.username}</p>
                 <p>{item.content}</p>
             </div>)
             
         })}
        </div>
        
    )
}
export default Text;