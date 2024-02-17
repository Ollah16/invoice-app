import React from "react";
import { RxCross2 } from "react-icons/rx";

const DeleteRow = ({ state, handleDeleteRow, index }) => {
    return (
        <span className={state.data.length > 1 ? 'display' : ''}>
            {state.data.length > 1 && <button className='py-0 border-0 bg-transparent'
                onClick={() => handleDeleteRow(index)}><span><RxCross2 /></span></button>}</span>
    )
}

export default DeleteRow