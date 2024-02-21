import React from "react";
import { RxCross2 } from "react-icons/rx";
import { MdFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";

const ModalPage = ({
    isDownload,
    handleDownload,
    handleScaling,
    handleNavigation
}) => {
    return (
        <div className={`modal_section ${isDownload ? 'download' : ''}`} onClick={() => handleScaling()}>
            <div className="modal_wrapper">
                <div>
                    <p><span>Download Invoice</span><button onClick={() => handleDownload(!isDownload)}><RxCross2 /></button></p>
                </div>
                <hr></hr>
                <div>
                    <p>What file format do you want?</p>
                </div>
                <div>
                    <a onClick={() => handleNavigation('/download')}>
                        <span><MdFileDownload /></span>
                        <span>PDF (Recommended)</span>
                    </a>
                    <a>
                        <span><MdFileDownload /></span>
                        <span>E-invoice</span>
                    </a>
                </div>

            </div>
        </div >
    )
}
export default ModalPage