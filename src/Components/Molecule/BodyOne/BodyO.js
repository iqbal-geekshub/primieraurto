import React, { useState } from 'react'
import './Style.css'
import PopNav from '../../Atom/NavPop/SSSS/Navpop'


export default function BodyO(props) {
    const [showClose, setShowClose] = useState(false)
    return (
        <div className="Bdy_1">
            {/* <label value="GOODBYE PAIN.
                            HELLO PLAYTIME"/>
            <label value="Get back to what you love doing most. With a full spectrum of orthopaedic services in locations throughout the 
                            Greater Philadelphia region, we'll help you through it." /> */}
              <div className="mobile-nav" >
                    <div className="res-nav-logo">
                        <img src={require('../../../Assets/Images/premier-logo-resp.png')} alt="res-nav-logo" />
                    </div>
                    <div className="toggler">
                        <img src={require('../../../Assets/Images/group-2.png')} alt="res-nav-toggler" onClick={() => {
                            setShowClose(true)
                        }} />
                    </div>
                </div>
                {showClose ? <PopNav setShowClose={setShowClose} /> : ""}
            <div className="Bdy_1_Adj">

              
                <h1>
                    GOODBYE PAIN.
                    HELLO PLAYTIME
                            </h1>
                <p>
                    Get back to what you love doing most. With a full spectrum of orthopaedic services in locations throughout the
                    Greater Philadelphia region, we'll help you through it.
                            </p>
                <button className="Bdy_1_Btn" >
                    FIND A SPECIALIST
            </button>
            </div>

        </div>
    )
}
