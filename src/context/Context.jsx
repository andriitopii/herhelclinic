import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ContextApp = createContext({
});

const ContextGlobal = ({ children }) => {
  const htmlElLang = document.querySelector('html');
  const [lang, setLang] = useState('pl')
    useEffect(()=>{
     const langLocal = localStorage.getItem('lang');
     if(langLocal){
      htmlElLang.setAttribute('lang', langLocal);
      setLang(langLocal)
     } 
    },[])
  
  function changeLang () {
      switch(lang){
        case "pl":
          htmlElLang.setAttribute('lang', 'en')
          localStorage.setItem('lang','en')
          setLang("en");
          break;
          case "en":
          htmlElLang.setAttribute('lang', 'pl');
          localStorage.setItem('lang','pl')
          setLang("pl");
          break;
      }
  }
  return <ContextApp.Provider value={{lang, changeLang}}>{children}</ContextApp.Provider>;
};

const MyUseContext = () => {
  const context = useContext(ContextApp);
  if (!context) {
    throw Error("Немає контексту");
  } else {
    return context;
  }
};

export { ContextGlobal, MyUseContext };
