// import { useParams } from 'react-router-dom';

function Text(props){
    console.log("Props of what Text component gets: ", props)

    // let { id } = useParams();

    const singleQuote = props.getQuote(props.id)
    console.log("See if it finds the quote:", singleQuote)
    return(
        <div className="singleQuote">
         <p>{singleQuote._id}</p>
         <p>{singleQuote.text}</p>
         <p>{singleQuote.source}</p>
        </div>
    )
}
export default Text;