import React, { useState } from 'react'
import Nav from '../../Components/Molecule/NavBar/Nav'
import Body1 from '../../Components/Molecule/BodyOne/BodyO'
import BodyT from '../../Components/Orginism/BodyTow/BodyTow'
import BodyThree from '../../Components/Molecule/BodyThree/BodyThree'
import BodyFour from '../../Components/Orginism/BodyFour/BodyFour'
import BodyFive from '../../Components/Orginism/BodyFive/BodyFive'
import Footer from '../../Components/Orginism/Footer/Footer'
import BtnPop from '../../Components/Atom/PopupBtn/BtnPopup'
import './Style.css'

export default function Home(props) {
    const [BtnShowClose,setBtnShowClose]=useState(false);
    return (
        <div>
            <Nav />
            <Body1 />
            <BodyT />
            <BodyThree />
            <BodyFour />
            <BodyT />
            <BodyFive />
            <Footer />
           {BtnShowClose && <BtnPop setBtnShowClose={setBtnShowClose}/> }
            {/* onClick={showpannel} */}
            <div className="movers d-none d-xl-block" onClick={()=>{
                setBtnShowClose(true)
            }}>
          <button className="btn-fixed btn-purple">
            <strong>MAKE APPOINTMENT</strong>
          </button>
          <button className="btn-fixed btn-blue" >
            <strong>FIND A SPECIALIST</strong>
          </button>
        </div>

        <div className="res-movers d-xl-none">
          <button className="btn-fixed btn-purple">
            <strong>MAKE APPOINTMENT</strong>
          </button>
          <button className="btn-fixed btn-blue">
            <strong>FIND A SPECIALIST</strong>
          </button>
        </div>

        </div>
    )
}
