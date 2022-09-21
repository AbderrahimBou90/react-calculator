import React, { useState, useContext, useEffect } from "react";
import keys from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState(keys);
  const [alert, setAlert] = useState("");
  const [value, setValue] = useState('');


  const handleClick = (e) => {
    setValue(value + e.target.value);
    if (!value && e.target.value === "=") {
      console.log("empty value ");
      setValue("");
      setAlert("Please Enter Value");
    } else if (e.target.value === "=") {
      try {
        setValue(eval(value));
      } catch (error) {
        console.log(error)
      }
    } else if (e.target.value === "C") {
      setValue("");
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert("");
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [alert]);

  return (
    <AppContext.Provider value={{ data, handleClick, value, alert }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
