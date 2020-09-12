import React from 'react'
import FiveOne from '../../Molecule/BodyFive/FiOne/FiOne'
import FiveTow from '../../Molecule/BodyFive/FiTow/FiTow'
import FiveThree from '../../Molecule/BodyFive/FiThree/FiThree'
import Fivefour from '../../Molecule/BodyFive/FiFoure/FiFour'


import './Style.css'
export default function BodyFive() {
    return (
        // <div>
        //     <FiveOne/>
        //     <FiveTow/>
        //     <FiveThree/>
        //     <Fivefour/>



        // </div>
        <div className="BodyFive">
            <div className="BodyFive_Text">
                <div className="BodyFive_Text_1">
                    <label>
                        NEWS and BLOG
               </label>
                </div>
                <div className="BodyFive_Text_2">
                    <label>
                        FROM THE BLOG
               </label>
                </div>

                <div className="BodyFive_Text_Bar">

                </div>
                <div className="BodyFive_Text_Bar_2">

                </div>

            </div>
            {/* <div className="BodyFive_Item" >
                <FiveOne />
                <FiveTow />
                <FiveThree />



            </div> */}
            <div className="BodyFive_Item">
                    <div className="BodyFive_Item_1">
                        <FiveOne />
                    </div>
                    <div className="BodyFive_Item_2">
                        <FiveTow />
                    </div>
                    <div className="BodyFive_Item_3">
                        <FiveThree />
                    </div>

                </div>


        </div>

    )
}
