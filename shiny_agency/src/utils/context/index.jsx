import { useState } from "react";
import { ThemeContext, SurveyContext } from "./contexts";

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const SurveyProvider = ({children}) => {
    const [answers, setAnswers] = useState({});
    const saveAnswers = (newAnswers) => {
        setAnswers({ ...answers, ...newAnswers })
    } 

    return (
        <SurveyContext.Provider value={{ answers, saveAnswers }}>
            {children}
        </SurveyContext.Provider>
    )
}