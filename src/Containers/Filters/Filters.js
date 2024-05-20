import  { useContext, useState,useRef} from "react";
import styles from "./Filters.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp,faX} from "@fortawesome/free-solid-svg-icons";
import { Themecontext } from "../../Context/Theme";

const Filters = ({setSearchValue,searchResultHandler}) => {
  const { darkMode } = useContext(Themecontext);
  const [open, setOpen] = useState(false)
  const[cross,setCross]=useState(true)
   const currentValue=useRef()

  const handleDropdown = () => {
    setOpen(!open);
  };
 const inputChangeHandler=(e)=>{
 setSearchValue(currentValue.current.value);
 setCross(false)
 }




 return (
    <>
      <div className={styles.filters}>
        {/* Search Filter */}
        <div
          className={
            darkMode
              ? `${styles.filters_searchbox__darkmode}`
              : `${styles.filters_searchbox}`
          }
        >
          <input type="search" ref={currentValue}  placeholder="Search for a country..." onChange={inputChangeHandler} onKeyDown={searchResultHandler} />
         { !cross?<FontAwesomeIcon icon={faX} className={styles.icon}/>:<></>}
        </div>
        {/* Search Filter */}

        {/* Selection Filter */}
        <div
          className={
            darkMode
              ? `${styles.filters_dropdwon__darkmode}`
              : `${styles.filters_dropdwon}`
          }
          onClick={handleDropdown}
        >
          <span>Filter by Region</span>
          {open ? (
            <FontAwesomeIcon icon={faCaretUp} className={styles.icon} />
          ) : (
            <FontAwesomeIcon icon={faCaretDown} className={styles.icon} />
          )}
          <div
            className={
              open
                ?darkMode? `${styles.DropDown_Options__Show__darkmode}`:`${styles.DropDown_Options__Show}`
                : `${styles.DropDown_Options}`
            }
         
          >
            <div>Africa</div>
            <div>America</div>
            <div>Asia</div>
            <div>Europe</div>
            <div>Oceania</div>
          </div>
        </div>

      </div>

    </>
  );
};
export default Filters;
