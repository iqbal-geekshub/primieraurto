import React from 'react'
import './Style.css'
import BodyTowIone from '../../Molecule/BodyTow/BTSOne/B2'
import BodyTowITow from '../../Molecule/BodyTow/BTSTOW/Tow'
import BodyTowIThree from '../../Molecule/BodyTow/BtsThree/BtThree'
import BodyTowIFour from '../../Molecule/BodyTow/BtsFour/BtsFour'

export default function BodyTow() {
    return (

        <div className="BodyTow">
            <div className="BodyTow_Text">
                <div className="BodyTow_Text_1">
                    <label>
                    PREMIER ORTHOPAEDICS
               </label>
                </div>
                <div className="BodyTow_Text_2">
                    <label>
                        SERVICESF
               </label>
                </div>

                <div className="BodyTow_Text_Bar"> 

                </div>

            </div>
            <div className="BodyTow_Item" >
                <BodyTowIone />
                <BodyTowITow />
                <BodyTowIThree />
                <BodyTowIFour />
            </div>

        </div>
    )
}
