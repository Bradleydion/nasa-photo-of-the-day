import React, {useState, useEffect} from "react";



const Card = (props) => {
    const [buttonClick, setButtonClick]= useState(true)

return (
    <div>
        <button>Get Pic Of The Day</button>
    <div className= 'imageContainer'>
    <h1>{props.title}</h1>
    <img src ={props.hdurl}/>
    <p>{props.explanation}</p>
    <p>{props.date}</p>
    <p>{props.copyright}</p>
    </div>
    </div>

)
}
export default Card