import React, { useState } from 'react'
import './Style.css'

import SerPop from '../../Atom/NavPop/PopTowN/SerchBtn'

// import { useState } from 'react'

export default function Nav(props) {

  
    // let { setShowClose } = props;
    const [showCloseSerch, setshowCloseSerch] = useState(false)

    return (


        <div className="container-fluid p-0" >
            <div className="Nav_1_Adj d-none d-xl-flex header-nav-1  justify-content-end align-items-center">
                {/* <div className="Nav_1_L">

                </div> */}
                <div className="Nav_1_R">
                    <p>
                        APPOINTMENTS WITHIN 24 HOURS
                    </p>
                    <p>
                    1.855.ORTHO24
                    </p>
                    <p>
                        PATIENT LOGIN
                    </p>
                </div>

            </div>

            <nav className="navbar navbar-expand-md justify-content-between navbar-light  d-none d-xl-flex  pt-1 pb-1 pt-2">
                <a href="#" className="navbar-brand pl-4 ">
                    {/* <img  height="28" alt="CoolBrand"> */}
                    <img className="Logo" src={require('../../../Assets/Images/logo.jpg')} />
                </a>




                <div className="  d-flex justify-content-end" >


                    <div className="navbar-nav d-none   d-lg-block d-xl-block d-md-block">
                        {/* <div className="Nav_main"> */}
                        <ul className="Nav_ul" >

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

                            <li className="Nav_li_1">

                                <div className="Nav_2_img">
                                    <div className="Nav_2_img_adj">


                                        <div>
                                            {showCloseSerch ? <SerPop setshowCloseSerch={setshowCloseSerch} /> : ""}
                                        </div>
                                        <div className="Nav_Img-S">
                                            <img src={require('../../../Assets/Images/shape-copy.svg' )} alt="Shape"
                                                onClick={() => {
                                                    setshowCloseSerch(true)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            



        </div>
    )
}
