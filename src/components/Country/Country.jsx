import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    
    const {name, flags, area, capital, population, maps, cca3
 
    } = country;

    const [visited, setvisited] = useState(false)
    const handleVisited = () =>{
        setvisited(!visited);
    }
    
    
    

    return (
        <div className= {`country ${visited ? 'visited' : 'non visited'}`}>
            <h3 style={{color: visited ? 'red': 'white'}}>{name.common}</h3>
            <img src={flags.png}/>
            <p>Area: {area}</p>
            <p>Capitai: {capital}</p>
            <p>Population: {population}</p>
            <p>Map: {maps.googleMaps}</p>
            <p>Code: {cca3}</p>
            <button onClick={() =>handleVisitedCountry(country)}>Mark Visited</button>
            <br/>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br/>
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}
            <hr/>
            <CountryDetail
            country = 'country'
            handleVisitedCountry = 'handleVisitedCountry'
            handleVisitedFlags = 'handleVisitedFlags'


            
            ></CountryDetail>

            
        </div>
    );
};

export default Country;