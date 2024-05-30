import { createContext, useState, useContext } from "react";

const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
    const [preferences, setPreferences] = useState([]);

    const togglePreference = (tag) => {
        // ChatGPT lines 10 - 12
        setPreferences((prev) => ({
            ...prev, 
            [tag]: !prev[tag]
        }));
    };

    return (
        <PreferencesContext.Provider value={{ preferences, togglePreference }}>
            {children}
        </PreferencesContext.Provider>
    );
};

// ChatGPT
export const usePreferences = () => useContext(PreferencesContext);