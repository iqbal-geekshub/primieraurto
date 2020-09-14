import React from 'react'
import './Style.css'

export default function PopThree() {
    return (
        <div className="Pop_1">
            <div className="Pop_1_Adj">
                <div className="Pop_1_img">
                    <img src={require('../../../../Assets/Images/group-6.png')} alt="group6">
                    </img>
                </div>
                <div className="Pop_1_label">
                    <div className="Pop_1_label_1">
                        <label>
                            Post by <span>Admin</span>
                        </label>
                    </div>

                    <div className="Pop_1_label_2_1">
                        <label>
                            In the midst of a pandemic, when seeing a doctor in person is your only hope
                 </label>
                    </div>
                    <div className="Pop_1_label_3_1">
                        <label>
                            Stay-at-home orders have kept most of the natio...
                </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
