"use client"

import { useTheme } from "next-themes"
import { Button } from "../ui/button"

type Props = {}

const ThemeSwitcher = (props: Props) => {

    const { theme, setTheme } = useTheme()

    return (
        <Button onClick={()=>setTheme(theme === "dark" ? "light" : "dark")} className="fixed bottom-4 right-4">
            switch
        </Button>
    )
}

export default ThemeSwitcher