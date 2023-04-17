import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './information.css';

export default function Information(props) {
  const [data, setData] = useState(null); // state to store API data
  const [films, setFilms] = useState([]); // state to store film data
  const location = useLocation(); // get the current location

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const json = await response.json();
        setData(json.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); 
  }, []); 
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const promises = data.flatMap(person => person.films.map(film => fetch(film)));

        const responses = await Promise.all(promises);

        if (responses.some(response => !response.ok)) {
          throw new Error('Network response was not ok');
        }

        const json = await Promise.all(responses.map(response => response.json()));
        setFilms(json);
      } catch (error) {
        console.error(error);
      }
    };

    if (data) {
      fetchFilms(); // Call the fetch film function if data is available
    }
  }, [location, data]); // Run the effect whenever the location or data changes

  return (
    <div >
      <div className='in'>
        {data ? (
          <div className='d-flex row ustify-content-around' >
            {data.map(person => (
              <div className=' col card bg-dark text-light pt-4 opacity-75' key={person.name} style={{height:"50rem"}}>
                <div className='border card-title border-primary'>{person.name}</div>
                <p>Height: {person.height}</p>
                <p>Gender: {person.gender}</p>
                <div>
                 <div>Films:</div>
                  {person.films.map((film, index) => (
                    <li className='border border-info card-text' key={index}>{films[index]?.title}</li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          'Loading...'
        )}
      </div>
    </div>
  );
        }