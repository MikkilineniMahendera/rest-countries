import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Containers/Dashboard/Dashboard";
import CardDetails from "./Containers/CardDetails/CardDetails";
import { BrowserRouter } from "react-router-dom";
import { Themecontext } from "./Context/Theme";



function App() {
  const[darkMode,setDarkMode]=useState(false)
  useEffect(()=>{
    if(darkMode){
      document.body.style.backgroundColor="hsl(207, 26%, 17%)"
    }
    else{
      document.body.style.backgroundColor="hsl(0, 0%, 98%)"
    }
  },[darkMode])
  return (
    <>
   
      <Themecontext.Provider value={{darkMode, setDarkMode}}>
        <div className={darkMode?`${styles.home__darkmode}`:`${styles.home}`}>
        <header>
          <Header />
        </header>
        <section className={styles.container}>
            <BrowserRouter>
              <Routes>
                <Route path="/" Component={Dashboard}/>
                <Route path="/country-details" Component={CardDetails}/>
              </Routes>
            </BrowserRouter>
        </section>
        </div>
      </Themecontext.Provider>
      
    </>
  );
}

export default App;
