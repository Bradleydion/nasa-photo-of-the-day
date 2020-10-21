import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios"
import Card from "./Card"


function App() {
  const [dummyData, setDummyData] = useState([])
useEffect (()=> {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=3ZRQ3qagax3RW1j0LBYt9RfhemEhzt9uPLNvWScR&date=2012-03-14")
.then((data)=>{
  setDummyData(data.data) 
  console.log(data.data)
})
.catch(err => 
console.log(err)
)
},[])


  return (
    <div className="App">
      <Card dummyData = {dummyData}/>
    </div>
  );
}
/* <header><nav>dateselecionbutton getpicofdaybutton</nav></header>
<body>card</body>
<footer>copyright and date</footer> */

export default App;
