import  { useContext } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
// import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { Themecontext } from "../../Context/Theme";
const Header = () => {
    const{darkMode, setDarkMode}=useContext(Themecontext)

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
 
  return (
    <>
      <div
        className={darkMode ? `${styles.header__darkmode}` : `${styles.header}`}
      >
        <h2
          className={
            darkMode
              ? `${styles.header_text__darkmode}`
              : `${styles.header_text}`
          }
        >
          Where in the world?
        </h2>
        <p
          className={
            darkMode
              ? `${styles.header_button__darkmode}`
              : `${styles.header_button}`
          }
          onClick={handleDarkMode}
        >
          {!darkMode?<><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={styles.moonicon}><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
           dark mode</>:<> <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" className={styles.sunicon}><path d="M494.2 221.9l-59.8-40.5 13.7-71c2.6-13.2-1.6-26.8-11.1-36.4-9.6-9.5-23.2-13.7-36.2-11.1l-70.9 13.7-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9-70.8-13.7C98 60.4 84.5 64.5 75 74.1c-9.5 9.6-13.7 23.1-11.1 36.3l13.7 71-59.8 40.5C6.6 229.5 0 242 0 255.5s6.7 26 17.8 33.5l59.8 40.5-13.7 71c-2.6 13.2 1.6 26.8 11.1 36.3 9.5 9.5 22.9 13.7 36.3 11.1l70.8-13.7 40.4 59.9C230 505.3 242.6 512 256 512s26-6.7 33.5-17.8l40.4-59.9 70.9 13.7c13.4 2.7 26.8-1.6 36.3-11.1 9.5-9.5 13.6-23.1 11.1-36.3l-13.7-71 59.8-40.5c11.1-7.5 17.8-20.1 17.8-33.5-.1-13.6-6.7-26.1-17.9-33.7zm-112.9 85.6l17.6 91.2-91-17.6L256 458l-51.9-77-90.9 17.6 17.6-91.2-76.8-52 76.8-52-17.6-91.2 91 17.6L256 53l51.9 76.9 91-17.6-17.6 91.1 76.8 52-76.8 52.1zM256 152c-57.3 0-104 46.7-104 104s46.7 104 104 104 104-46.7 104-104-46.7-104-104-104zm0 160c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"/></svg>light mode</>}
        
        </p>
      </div>
    </>
  );
};
export default Header;
