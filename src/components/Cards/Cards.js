import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cards.module.css";
import { Themecontext } from "../../Context/Theme";
const Cards = ({ data, searchdata}) => {
  const {darkMode}=useContext(Themecontext)
  const navigate = useNavigate();
  const handleClick = (value) => {
    navigate("/country-details", { state: value });
  };
  return (
    <>
      {data && data.length !== 0 ? (
        data.map((list, index) => (
          <div className={darkMode?`${styles.countrycard__darkmode}`:`${styles.countrycard}`} onClick={() => handleClick(list)}>
            <div className={styles.country_flag}>
              <img src={list.flags.svg} />
            </div>
            <div className={darkMode?`${styles.country_info__darkmode}`:`${styles.country_info}`}>
              <h4>{list.name.common}</h4>
             <p><b>Population</b>: {list.population.toLocaleString()}</p>
             <p><b>Region</b>:{list.region}</p>
             <p><b>Capital</b>: {list.capital}</p>
            </div>
          </div>
        ))
      ) : (
        <div>No data</div>
      )}
    </>
  );
};
export default Cards;
