import React, { useState } from 'react'
import './Style.css'
import PopNav from '../../Atom/NavPop/SSSS/Navpop'
import SerPop from '../../Atom/NavPop/PopTowN/SerchBtn'
import Lable from '../../Atom/Lable/Lable'
// import { useState } from 'react'

export default function Nav(props) {

    const [showClose, setShowClose] = useState(false)
    // let { setShowClose } = props;
    const [showCloseSerch, setshowCloseSerch] = useState(false)
   
    return (


        <div className="container-fluid p-0" >
            <div className="Nav_1_Adj d-none d-xl-flex">
                <div className="Nav_1_L">

                </div>
                <div className="Nav_1_R">
                    <p>
                        APPOINTMENTS WITHIN 24 HOURS
                    </p>
                    <p>
                        APPOINTMENTS WITHIN 24 HOURS
                    </p>
                    <p>
                        PATIENT LOGIN
                    </p>
                    {/* <Lable name="APPOINTMENTS WITHIN 24 HOURS" />
                    <Lable name="CALL 1.855.ORTHO24 " />
                    <Lable name="PATIENT LOGIN " /> */}
                    {/* <p> PATIENT LOGIN</p> */}
                    {/* <a href="#" />PATIENT LOGIN */}
                </div>

            </div>

            <nav className="navbar navbar-expand-md justify-content-between navbar-light  d-none d-xl-flex ">
                <a href="#" class="navbar-brand">
                    {/* <img  height="28" alt="CoolBrand"> */}
                    <img className="Logo" src={require('../../../Assets/Images/logo.jpg')} />
                </a>




                <div class="  d-flex justify-content-end" >


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

                            <li className="Nav_li">

                                <div className="Nav_2_img">
                                   <div className="Nav_2_img_adj">

                                   
                                    <div>
                                    {showCloseSerch ? <SerPop setshowCloseSerch={setshowCloseSerch} /> : ""}
                                    </div>
                                    <div className="Nav_Img-S">
                                    <img src={require('../../../Assets/Images/shape-copy.svg')}  
                                    onClick={()=>{
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
            <div className="mobile-nav" >
                <div className="res-nav-logo">
                    <img src={require('../../../Assets/Images/premier-logo-resp.png')} alt="res-nav-logo" />
                </div>
                <div className="toggler">
                    <img src={require('../../../Assets/Images/group-2.png')} alt="res-nav-toggler" onClick={()=>{
                setShowClose(true)
            }} />
                </div>
            </div>
            {showClose ? <PopNav setShowClose={setShowClose} /> : ""}



        </div>
    )
}
