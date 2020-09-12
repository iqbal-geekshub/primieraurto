import React from 'react'
import './Style.css'

export default function PopThree() {
    return (
        <div className="Pop_1">
            <div className="Pop_1_Adj">
                <div className="Pop_1_img">
                    <img src={require('../../../../Assets/Images/group-6.png')}>
                    </img>
                </div>
                <div className="Pop_1_lable">
                    <div className="Pop_1_lable_1">
                        <lable>
                            Post by <span>Admin</span>
                        </lable>
                    </div>

                    <div className="Pop_1_lable_2_1">
                        <lable>
                            In the midst of a pandemic, when seeing a doctor in person is your only hope
                 </lable>
                    </div>
                    <div className="Pop_1_lable_3_1">
                        <lable>
                            Stay-at-home orders have kept most of the natio...
                </lable>
                    </div>
                </div>
            </div>
        </div>
    )
}
