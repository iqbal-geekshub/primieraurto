import React from 'react'
import './Style.css'

export default function Footer() {
    return (
        <div className="Footer ">
            <div className="F_top">
                <div className="about" >
                    <p>
                        ABOUT US
                    </p>
                </div>
                <div className="F_Btm">
                    <div className="p_1">
                        <p className="lbl_2">
                            With over 35 locations in the Greater Philadelphia region,
                            Premier Orthopaedics provides the full spectrum of
                            orthopaedic services – including bone, muscle and joint care;
                            physical therapy, MRI and urgent care. Patients trust our
                            specialists for their experience,
                            expertise and commitment to exceptional care.
                    </p>
                    </div>
                    <div className="p_2">
                        <p>
                            Home
                    </p>
                        <p>

                        </p>
                        <p>
                            About Us
                    </p>
                        <p>
                            Careers
                    </p>
                        <p>
                            Non-discrimination Notice
                    </p>
                    </div>
                    {/* _________ */}
                    <div className="p_2">
                        <p>
                            Events
                    </p>
                        <p>
                            Premier News
                    </p>
                        <p>
                            Blog
                    </p>
                        <p>
                            Patient Testimonials
                    </p>
                    </div>
                    {/* ___________ */}
                    <div className="p_2">
                        <p>
                            Appointments
                    </p>
                        <p>
                            Physicians
                    </p>
                        <p>
                            Locations
                    </p>
                        <p>
                            Locations
                    </p>
                    </div>
                    {/* ____________ */}
                    <div className="p_2">
                        <p>
                            Specialties
                    </p>
                        <p>
                            Services
                    </p>
                        <p>
                            Physical Therapy
                    </p>
                        <p>

                        </p>

                        <div className="icons_lable">

                            <p>
                                APPOINTMENTS IN 24 HOURS
                            </p>
                            <p>
                                <span>

                                    1.855.ORTHO24
                                </span>

                            </p>
                            <div className="">
                                <div className="Icons">
                                    <div className="Icons_Adj">
                                        <div className="Ftr_Icon_1">
                                            <img src={require('../../../Assets/Images/twitter-new.png')} />
                                        </div>
                                    </div>
                                    <div className="Icons_Adj">
                                        <div className="Ftr_Icon_1">

                                            <img src={require('../../../Assets/Images/facebook-new.png')} />
                                        </div>
                                    </div>
                                    <div className="Icons_Adj">
                                        <div className="Ftr_Icon_1">
                                            <img src={require('../../../Assets/Images/linkedin-new.png')} />
                                        </div>
                                    </div>
                                    <div className="Icons_Adj">
                                        <div className="Ftr_Icon_1">
                                            <img src={require('../../../Assets/Images/instagram.png')} />
                                        </div>
                                    </div>
                                    <div className="Icons_Adj">
                                        <div className="Ftr_Icon_1">
                                            <img src={require('../../../Assets/Images/youtube.png')} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <ul  >
                    <li className="ftr_li_p">
                        <a href="#">
                            © 2020 Premier Orthopaedics. All rights reserved
                                </a>
                    </li>
                    <li className="ftr_li_p">
                        <a href="#">
                            Non-discrimination Notice
                                </a>
                    </li>
                    <li className="ftr_li_p">
                        <a href="">
                            Privacy Policy
                                </a>
                    </li>
                    <li className="ftr_li_p">
                        <a href="#">
                            Site map
                                </a>
                    </li>
                    <li className="Nav_li_p">
                        <a href="#">
                            PATIENT RESOURCES
                                    </a>
                    </li>
                    <li className="Nav_li_p">
                        <a href="#">
                            CAREERS
                                </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}
