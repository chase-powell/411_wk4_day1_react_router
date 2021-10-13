import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    const id= props.match.params.id
    const specificCar= cars.find(car => car.id = id) 
    return (
        <div className='paper'>
        <h1>{specificCar.Name}</h1>
        <ul>
            <li>{specificCar.id}</li>
            <li>{specificCar.Miles_per_Gallon}</li>
            <li>{specificCar.Cylinders}</li>
            <li>{specificCar.Displacement}</li>
            <li>{specificCar.Horsepower}</li>
            <li>{specificCar.Weight_in_lbs}</li>
            <li>{specificCar.Acceleration}</li>
            <li>{specificCar.Year}</li>
            <li>{specificCar.Origin}</li>
        </ul>
        </div>
    )
}

export default Car