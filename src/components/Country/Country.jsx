import './Country.css';

const Country = ({country}) => {
    console.log(country)
    const {name, flags, area, capital, population, maps 
    } = country;

    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <img src={flags.png}/>
            <p>Area: {area}</p>
            <p>Capitai: {capital}</p>
            <p>Population: {population}</p>
            <p>Map: {maps.googleMaps}</p>
            

            
        </div>
    );
};

export default Country;