import { useState } from "react";

function AddLike(props){
    
    console.log("Like props: ",props);
    const [likes, addLike] = useState(0);
    return(
      <>
      <p>Number of like: {likes}</p>
        <button
            type="button"
            onClick={()=> {
                addLike(likes + 1)
            }}>
                Like
            </button>
      </>
            

    )
}
export default AddLike;