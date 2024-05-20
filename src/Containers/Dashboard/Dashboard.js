import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import Filters from "../Filters/Filters"
import styles from "./Dasboard.module.css"
import { fetchCountries,searchCountries } from "../../api/restCountriesService";
const Dashboard=()=>{
    const[countries,setCountries]=useState()
    const[searchValue,setSearchValue]=useState()

    useEffect(()=>{
        (async()=>{
            const country= await fetchCountries()
            setCountries(country)
        })()
    },[])

    const searchResultHandler=(e)=>{
        if(e.key==="Enter"){
          (async()=>{
            const data= await searchCountries(searchValue) 
            setCountries(data)
        })() 
        }
      }
    
    return(
        <>
            <Filters setSearchValue={setSearchValue} searchResultHandler={searchResultHandler}/>
            <div className={styles.card}>
            <Cards
            data={countries}
            />
            </div>
        </>
    )
}
export default Dashboard