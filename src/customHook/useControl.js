// import { useEffect, useReducer, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import myReducer, { initialState } from "../useReducer/reducer"

// export const useControl = () => {
//     let [innerWid, setWidth] = useState(window.innerWidth)


//     useEffect(() => {
//         if (innerWid > 768) {
//             const custom_input_col = document.querySelectorAll('.smadjust')
//             custom_input_col.forEach((norm, index) => {
//                 norm.classList.remove('smEffect')
//             })
//         } else {
//             const custom_input_col = document.querySelectorAll('.smadjust')
//             custom_input_col.forEach((norm, index) => {
//                 norm.classList.add('smEffect')
//             })
//         }
//     }, [innerWid])

//     useEffect(() => {

//         const handleResize = () => {
//             setWidth(window.innerWidth)
//         }

//         window.addEventListener('resize', () => {
//             handleResize()
//         })

//         return () => {
//             window.removeEventListener('resize', () => {
//                 handleResize()

//             })
//         }
//     }, [])

//     console.log(innerWid)
// }
