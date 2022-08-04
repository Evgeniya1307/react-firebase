import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";


//создание начального состояния
const INITIAL_STATE = {
  darkMode: false, //основная переменная тёмный режим 
};

//создание контекса 
export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  //состояние и отправка 
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
