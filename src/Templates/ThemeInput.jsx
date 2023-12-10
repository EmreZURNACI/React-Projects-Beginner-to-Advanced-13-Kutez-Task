import React from 'react'
import { useThemeContext } from '../Contexts/ThemeContext'
function Input() {
    const { theme, setTheme } = useThemeContext();
    return (

        <>
            <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onChange={() => {
                    const _theme = theme === "Light" ? "Dark" : "Light"; setTheme(_theme);
                }} />
                <div className="slider round"></div>
            </label>
        </>

    )
}

export default Input