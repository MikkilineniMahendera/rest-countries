import React, { useContext } from "react";
import styles from "./CardDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { Themecontext } from "../../Context/Theme";
const CardDetails = () => {
  const navigate=useNavigate();
  const { state } = useLocation();
  const { flags, name,population, region,subregion, languages,capital,currencies,tld,borders} = state;
  const {darkMode}=useContext(Themecontext)
  const backButtonHandler=()=>{
    navigate("/")
  }
  return (
    <>
      <div className={darkMode?`${styles.backbutton__dark}` :`${styles.backbutton}`}>
        <button onClick={backButtonHandler}><FontAwesomeIcon icon={faArrowLeft}  className={styles.icon}/> back</button>
      </div>
      <div className={styles.coutriesdetails}>
        <div className={styles.flag}>
          <img src={flags.svg} alt={flags.alt} />
        </div>
        <div class={darkMode?`${styles.country_info__dark}`: `${styles.country_info}`}>
        <h1 className={styles.details_name}>{name.common}</h1>
          <div className={ darkMode?`${styles.info__dark}`: `${styles.info}`}>
            <div>
            <p><b>Native Name</b> : {Object.values(name.nativeName)[0].common}</p>
            <p><b>Population</b> : {population.toLocaleString()}</p>
            <p><b>Region</b> : {region}</p>
            <p><b>Sub Region</b> : {subregion}</p>
            <p><b>Capital</b> : {capital.join(',')}</p>
            </div>
            <div>
            <p><b>Top Level Domain</b>: {tld}</p>
            <p><b>Currencies</b> : {Object.values(currencies).map((info)=><span>{info.name}</span>)}</p>
            <p><b>Languages</b> : {Object.values(languages).join(',')}</p> 
            </div>
          </div>
          <div className={ darkMode?`${styles.borders__dark}`: `${styles.borders}`}>
          <p><b>Borders</b> : {borders}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardDetails;
