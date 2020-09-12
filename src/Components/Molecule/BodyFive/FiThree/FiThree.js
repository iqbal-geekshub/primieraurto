import React from 'react'
import PopUpThree from '../../../Atom/Popup/PopupThree/PopThree'
import './Style.css'

export default function FiTow() {
    return (
        <div className="F5_1">
        <div className="F5_1_adj">
            <div className="F5_img">
                <img src={require('../../../../Assets/Images/servicehead.jpeg')}>
                </img>
            </div>
            <div className="F5_2">
                <div className="F5_2_1">
                    <div className="F5_2_Orange">
                        <lable>
                            02 
                        </lable>
                        <label>
                        Apr
                         </label>
                    </div>
                    <div className="F5_date">
                        <lable>
                            20
                            
                        </lable>
                        <label>
                            20
                         </label>
                    </div>
                    <div className="F5_dot">
                    <label>
                           . . .
                         </label>
                    </div>

                </div>
                {/*  */}
                <div className="F5_Pop_1">
                   <div  className="F5_Pop_1_2">

                   <PopUpThree/>
                   </div>

                </div>

            </div>


        </div>

    </div>
    )
}
