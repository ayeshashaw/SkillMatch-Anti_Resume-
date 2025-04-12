import { createContext, useState } from "react";

// Create context
export const EmployerContext = createContext();

const EmployerContextProvider = (props) => {
  const [eToken, setEtoken] = useState(localStorage.getItem("eToken") || "");
  const backendUrl = "https://skillmatch-3dxf.onrender.com";

  const value = {
    eToken,
    setEtoken,
    backendUrl,
  };

  return (
    <EmployerContext.Provider value={value}>
      {props.children}
    </EmployerContext.Provider>
  );
};

export default EmployerContextProvider;
