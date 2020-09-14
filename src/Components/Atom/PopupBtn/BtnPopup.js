import React, { useState } from 'react'
import './Style.css'

export default function BtnPopup(props) {
    const [drop, setdrop] = useState(true)

    const dropHandler = () => {
        setdrop(!drop)
        console.log(drop)
    }
    let { setBtnShowClose } = props;
    return (

        <div className="Btn_Pop_Main "  >
            <div className="Btn_Pop_Img">
                <p>
                FIND A SPECIALIST
            </p>

            </div>
            <div className="Btn_li_p " >


                <div className="Btn_Pop" >
                    <div className="coss">
                        <i class="fa fa-times float-left" onClick={() => {
                            setBtnShowClose(false)
                        }}> <label>
                       Close
                       </label> </i>
                       
                    </div>

                    <div >
                        {drop ?
                            <div className="drop-down-Adj">
                                <div className="kkk ">


                                    <select className="drop-down" >
                                        <option value="">Select Specialty</option>
                                        <option value="Arthroscopy">Arthroscopy</option>
                                        <option value="Foot And Ankle">Foot &amp; Ankle</option>
                                        <option value="Hand And Wrist">Hand &amp; Wrist</option>
                                        <option value="Hip">Hip</option>
                                        <option value="Interventional Pain Management">Interventional Pain Management</option>
                                        <option value="Knee">Knee</option>
                                        <option value="Physical Medicine And Rehabilitation">Physical Medicine &amp; Rehabilitation</option>
                                        <option value="Regenerative Medicine">Regenerative Medicine</option>
                                        <option value="Rheumatology">Rheumatology</option>
                                        <option value="Shoulder And Elbow">Shoulder &amp; Elbow</option>
                                        <option value="Spine">Spine</option>
                                        <option value="Sports Medicine">Sports Medicine</option>
                                        <option value="Trauma And Fracture Care">Trauma &amp; Fracture Care</option>
                                    </select>
                                </div>
                                <div className="kkk ">
                                    <div className="drop-down">
                                        <label>
                                            Zip
                            </label>
                                    </div>
                                </div>







                                <div className="kkk ">
                                    <select className="drop-down" >
                                        <option value="">DISTANCE</option>
                                        <option value="5">0-5 Miles</option>
                                        <option value="10">5-10 miles</option>
                                        <option value="15">10-15 miles</option>
                                        <option value="20">15-20 miles</option>
                                        <option value="25">20-25 miles</option>
                                        <option value="90">25+ miles</option>
                                    </select>
                                </div>
                            </div>

                            :
                            <div className="ppp ">
                                <label>
                                Please Enter Your Search
                                </label>


                                <select className="drop-down" >
                                    <option value="">Select Specialty</option>
                                    <option value="Arthroscopy">Arthroscopy</option>
                                    <option value="Foot And Ankle">Foot &amp; Ankle</option>
                                    <option value="Hand And Wrist">Hand &amp; Wrist</option>
                                    <option value="Hip">Hip</option>
                                    <option value="Interventional Pain Management">Interventional Pain Management</option>
                                    <option value="Knee">Knee</option>
                                    <option value="Physical Medicine And Rehabilitation">Physical Medicine &amp; Rehabilitation</option>
                                    <option value="Regenerative Medicine">Regenerative Medicine</option>
                                    <option value="Rheumatology">Rheumatology</option>
                                    <option value="Shoulder And Elbow">Shoulder &amp; Elbow</option>
                                    <option value="Spine">Spine</option>
                                    <option value="Sports Medicine">Sports Medicine</option>
                                    <option value="Trauma And Fracture Care">Trauma &amp; Fracture Care</option>
                                </select>
                            </div>
                        }
                        {/* ________________________________________________________________________ */}



                        <div className="kkk ">
                            <div className="">
                                <button className="pop-btn-1">
                                    Search
                              </button>
                            </div>
                        </div>

                        <div className="kkk ">
                            <label>
                                serch by name
                            </label>
                            <div className="Togel-btn">
                                <label class="switch" >
                                    <input type="checkbox" onClick={dropHandler} />
                                    <span class="slider round"></span>
                                </label>
                                {drop ?
                                    <label>
                                        OFF
                                </label>
                                    :
                                    <label>
                                        On
                                </label>
                                }
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}
