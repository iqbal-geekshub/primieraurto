import React, { useState } from 'react'
import './Style.css'

const Navpop = (props) => {
    let { setShowClose } = props;
    return (
        <div className="Nav_Pop_Main "  >
            <div className="Nav_li_p " >


                <ul className="Nav_Pop" >
                    <li className="Nav_li">
                        <i class="fa fa-times float-left" onClick={() => {
                            setShowClose(false)
                        }}

                        ></i>
                    </li>
                    <li className="Nav_li">

                        <input type="text" id="fname" name="fname"
                        />
                    </li>
                    <li className="Nav_li">
                        <a href="">
                            PHYSICIANS
                                </a>
                    </li>
                    <li className="Nav_li">
                        <a href="">
                            LOCATIONS
                                </a>
                    </li>
                    <li className="Nav_li">
                        <a href="">
                            SPECIALTIES
                                </a>
                    </li>
                    <li className="Nav_li">
                        <a href="">
                            PHYSICAL THERAPY
                                </a>
                    </li>
                    <li className="Nav_li">
                        <a href="">
                            PATIENT RESOURCES
                                    </a>
                    </li>
                    <li className="Nav_li">
                        <a href="">
                            CAREERS
                                </a>
                    </li>




                </ul>
            </div>
        </div>
    )
}
export default Navpop;