import React from 'react'
import './Style.css'

export default function SerchBtn(props) {
    let { setshowCloseSerch } = props;
    return (
      
        <div className="Nav_serch_1">
            <div className="Nav_Serch_img_adj" >


                <div className="inut">
                    <input type="text" id="fname" name="fname"></input>
                </div>
                <div className="Nav_Img-S1" onClick={() => {
                setshowCloseSerch(false)
            }}>
                    <img src={require('../../../../Assets/Images/shape-copy.svg')} alt="Shape"

                    />
                </div>
            </div>
        </div>
    )
}
