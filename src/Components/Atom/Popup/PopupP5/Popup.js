import React from 'react'
import './Style.css'

export default function Popup() {
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
                            Get Ready for Running: Tips to Avoid Foot and Ankle Injuries this Spring
                     </lable>
                    </div>
                    <div className="Pop_1_lable_3">
                        <lable>
                            Spring is here and thousands of runners of vari...
                    </lable>
                    </div>
                </div>
            </div>
        </div>
    )
}
