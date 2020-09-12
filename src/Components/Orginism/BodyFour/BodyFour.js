import React from 'react'
import './Style.css'
import BFourOne from '../../Molecule/BodyFour/BdyFourOne/BdyFourOne'
import BFourTwo from '../../Molecule/BodyFour/BFourTow/BdyFourTow'
import BFourThree from '../../Molecule/BodyFour/BFourThree/BdyFourThree'
import BFourFour from '../../Molecule/BodyFour/BFourFour/BdyFourFour'
import CarPop from '../../Atom/Popup/PopupFour/PopUpFour'

export default function BodyFour() {
    return (
        <div className="BodyFour">
            <div className="BodyFour_Text">
                <div className="BodyFour_Text_1">
                    <label>
                        PICTURES OF HEALTH
           </label>
                </div>
                <div className="BodyFour_Text_2">
                    <label>
                        PATIENT STORIES
           </label>
                </div>

                <div className="BodyFour_Text_Bar">

                </div>

            </div>
            <div  className=" d-none d-xl-block" >

                <div className="BodyFour_Item">
                    <div className="BodyFour_Item_1">
                        <BFourOne />
                    </div>
                    <div className="BodyFour_Item_2">
                        <BFourTwo />
                    </div>
                    <div className="BodyFour_Item_3">
                        <BFourThree />
                    </div>

                </div>
                <div className="BodyFour_Item_4">
                    <div>
                        <BFourFour />
                    </div>

                </div>
            </div>
            <div>
                <CarPop />
            </div>

            <div className="B4_Btn">
                <button className="B4_Btn_1">
                    READ MORE
            </button>
            </div>

        </div>
    )
}
