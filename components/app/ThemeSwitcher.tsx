"use client"

import { useTheme } from "next-themes"
import { Button } from "../ui/button"
import { BsFillSunFill, BsMoonFill } from "react-icons/bs"

type Props = {}

const ThemeSwitcher = (props: Props) => {

    const { theme, setTheme } = useTheme()

    return (
        <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="bg-blue-700 text-white hover:bg-blue-700 hover:text-white h-11 rounded-xl">
            {theme === 'dark' ? <BsMoonFill /> : <BsFillSunFill />}
        </Button>
    )
}

export default ThemeSwitcher