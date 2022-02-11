import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Country } from "../types/Country";
import Card from "./Card";
import "./css/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Home: FC = () => {
  const [originalList, setOriginalList] = useState<Array<Country>>([]);
  const [countries, setCountries] = useState<Array<Country>>([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const fetchCountries = async() => {
      try {
        const url = "https://restcountries.com/v3.1/all";
        const res = await axios.get<Country[]>(url);
        setOriginalList(res.data);
        setCountries(res.data);
      }
      catch (error) {
        setOriginalList([]);
        setCountries([]);
      }
    }
    fetchCountries();
  }, []);

  useEffect(() => {
    let countriesResult = originalList;
    if (search) {
      countriesResult = countriesResult.filter(country => 
        country.name.common.toLowerCase()
        .includes(search.toLowerCase()));
    }
    if (region) {
      countriesResult = countriesResult.filter(country => 
        country.region === region);
    }
    setCountries(countriesResult)
  }, [originalList, search, region]);

  const searchByCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const filterByRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value)
  }

  return ( 
    <div className="container">
      <div className="filter-container">
        <div className="search-input">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Search for a country" value={search} onChange={searchByCountry} />
        </div>
        <select value={region} onChange={filterByRegion}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="country-list">
        { countries && countries.map((country: Country, index: number) => 
          <div className="item-wrapper" key={index}>
            <Card {...country} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Home;