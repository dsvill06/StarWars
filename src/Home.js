import React,{useState,useEffect} from 'react'
import "./home.css"
import Card from "./components/Card.js"



function Home() {
    // This would be used to load up an images based on the name passed by the data map holding the cards.
//    const link = "./assets/pxfuel.jpg";
//    const getImage = (type) => {
//      switch(type){
//         case "Luke Skywalker":
//             getImage =

//        }
//   }
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(json => setData(json.results))
      .catch(error => console.error(error));
  }, []);
  return (
    <div className='home d-flex row justify-content-center'>
      <div className=' col-sm-6'>
        {data ? (
        <div className='d-flex row justify-content-around'>
                {data.map(person => (
                <div class="col item pt-4 opacity-75" key={person.name}>
                    <Card name={person.name}/>
                    
                </div>
                ))}
         </div>   
            ) : (
            'Loading...'
            )}
      </div>
    </div>
  )
}

export default Home
