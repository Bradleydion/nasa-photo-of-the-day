import React, {useState, useEffect} from "react";



const Card = (props) => {
return (
    <div>
        <button >Get Pic Of The Day</button>
    <div className= 'imageContainer'>
    <h1>{props.dummyData.title}</h1>
    <img src ={props.dummyData.hdurl}/>
    <p>{props.dummyData.explanation}</p>
    <p>{props.dummyData.date}</p>
    <p>{props.dummyData.copyright}</p>
    </div>
    </div>

)
}
export default Card