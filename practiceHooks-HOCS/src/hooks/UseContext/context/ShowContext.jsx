import { useState, useContext, createContext } from "react";

const ShowContext = createContext();

export const useShow = () => {
  return useContext(ShowContext);
};

export const ShowProvider = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  const toggleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <ShowContext.Provider
      value={{
        visible: isShow,
        toggleShow,
      }}>
      {children}
    </ShowContext.Provider>
  );
};
