import React from 'react'
import './Style.css'

export default function SerchBtn(props) {
    let { setshowCloseSerch } = props;
    return (
      
        <div className="Nav_serch_1">
            <div className="Nav_Serch_img_adj" onClick={() => {
                setshowCloseSerch(false)
            }}>


                <div className="inut
                ">
                    <input type="text" id="fname" name="fname"></input>
                </div>
                <div className="Nav_Img-S1">
                    <img src={require('../../../../Assets/Images/shape-copy.svg')} alt="Shape"

                    />
                </div>
            </div>
        </div>
    )
}
