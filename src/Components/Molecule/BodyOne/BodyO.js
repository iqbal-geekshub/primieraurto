import React from 'react'
import './Style.css'
import Lable from '../../Atom/Lable/Lable'

export default function BodyO() {
    return (
        <div className="Bdy_1">
            {/* <Lable value="GOODBYE PAIN.
                            HELLO PLAYTIME"/>
            <Lable value="Get back to what you love doing most. With a full spectrum of orthopaedic services in locations throughout the 
                            Greater Philadelphia region, we'll help you through it." /> */}
            <div className="Bdy_1_Adj">


                <h1>
                    GOODBYE PAIN.
                    HELLO PLAYTIME
                            </h1>
                <p>
                    Get back to what you love doing most. With a full spectrum of orthopaedic services in locations throughout the
                    Greater Philadelphia region, we'll help you through it.
                            </p>
                <button className="Bdy_1_Btn" active>
                    FIND A SPECIALIST
            </button>
            </div>

        </div>
    )
}
