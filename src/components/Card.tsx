import { FC } from "react";
import { Country } from "../types/Country";
import "./css/Card.css";

const Card:FC<Country> = props => {
  return (
    <div className="country-card">
      <div className="img-wrapper">
        <img src={props.flags.png} alt={props.name.common} />        
      </div>
      <div className="country-info">
        <h3>{props.name.common}</h3>
        <ul>
          <li><span>Population</span>: {props.population.toLocaleString()}</li>
          <li><span>Region</span>: {props.region}</li>
          <li><span>Capital</span>: {props.capital}</li>
        </ul>
      </div>
    </div>
  )
}

export default Card;