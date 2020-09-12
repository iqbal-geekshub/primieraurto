import React from 'react'
import './Style.css'

export default function PopUptow() {
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

                    <div className="Pop_1_lable_2">
                        <lable>
                        Premier Orthopaedics Now Offering Telemedicine Visits
                     </lable>
                    </div>
                    <div className="Pop_1_lable_3">
                        <lable>
                        As the coronavirus crisis continues to evolve, ...
                    </lable>
                    </div>
                </div>
            </div>
        </div>
    )
}
