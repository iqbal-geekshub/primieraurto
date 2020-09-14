import React from 'react'
import './Style.css'

export default function Popup() {
    return (
        <div className="Pop_1">
            <div className="Pop_1_Adj">
                <div className="Pop_1_img">
                    <img src={require('../../../../Assets/Images/group-6.png')} alt="group-6">
                    </img>
                </div>
                <div className="Pop_1_label">
                    <div className="Pop_1_label_1">
                        <label>
                            Post by <span>Admin</span>
                        </label>
                    </div>

                    <div className="Pop_1_label_2">
                        <label>
                            Get Ready for Running: Tips to Avoid Foot and Ankle Injuries this Spring
                     </label>
                    </div>
                    <div className="Pop_1_label_3">
                        <label>
                            Spring is here and thousands of runners of vari...
                    </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
