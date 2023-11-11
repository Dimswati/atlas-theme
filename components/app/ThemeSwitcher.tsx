"use client"

import { useTheme } from "next-themes"
import { Button } from "../ui/button"
import { BsFillSunFill, BsMoonFill } from "react-icons/bs"

type Props = {}

const ThemeSwitcher = (props: Props) => {

    const { theme, setTheme } = useTheme()

    return (
        <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === 'dark' ? <BsMoonFill /> : <BsFillSunFill />}
        </Button>
    )
}

export default ThemeSwitcher