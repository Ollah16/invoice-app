import { useState } from "react"

export const useControl = () => {
    let [isNavToggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!isNavToggle)
    }

    return [isNavToggle, handleToggle]
}