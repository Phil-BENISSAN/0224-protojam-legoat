import { createContext, useContext, useState, useEffect } from "react";

const IntroContext = createContext();

export function IntroProvider({ children }) {
  const [isVisible, setIsVisible] = useState("visibleIntro");
  const [isLogoVisible, setIsLogoVisible] = useState("LogoVisible");
const [isLoaderVisible, setIsLoaderVisible] = useState("LoaderVisible");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible("notVisibleIntro");
    }, 7000);
    setTimeout(() => {
        setIsLogoVisible("notVisibleLogo");
    }, 4000);
    setTimeout(() => {
        setIsLoaderVisible("notVisibleLoader");
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <IntroContext.Provider value={{ isVisible, setIsVisible, isLogoVisible, setIsLogoVisible, isLoaderVisible, setIsLoaderVisible }}>
      {children}
    </IntroContext.Provider>
  );
}

export const useIntro = () => useContext(IntroContext);