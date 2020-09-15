import React from 'react'

import './Style.css'

export default function BodyThree() {
    // if(typeof window !=='undefined')
    // {
    //     gsap.registerPlugin(ScrollTrigger);
    // }
    //     let chart1=useRef(null);
    //     let chart2 = useRef(null);
       
    //     useEffect(() => {
    //         TweenMax.from(chart1, {scrollTrigger:{trigger:chart1, toggleActions:"restart reverse restart resume"}
    //     ,x:-200, opacity:0,duration:0.6});
    //     TweenMax.from(chart2,{scrollTrigger:{trigger:chart2,toggleActions:"restart reverse restart resume"}
    //     ,x:200,opacity:0,duration:0.6});
      
    //     })
    return (
        <div className="Body_3">
            <div className="Body_3_img">
                {/* <img src={require('../../../Assets/Images/croudnew.jpeg')}></img> */}
            </div>

            <div className="B3_L1" >
                <label className="B3_L1_lbl">PREMIER SPORTS MEDICINE. <span> THE PHILADELPHIA UNION.</span></label>

                <div className="B3_L1_1">


                    <label>A WINNING TEAM</label>
                    <div className="B3_Bar">

                    </div>
                    <div className="B3_L1_1_2">
                        <label>
                            Premier Orthopaedics has been the official orthopaedic and
                            physical therapy provider of the Philadelphia Union since the
                            team's founding, in 2010. Our orthopaedic surgeons are on the
                            sidelines of every home game, ready to assist at a moment's
                            notice. Our specialists provide expert care to these elite athletes,
                            keeping them in top physical form and playing at their best. We'll
                            treat you and your family with the same
                            level of high-quality care and personalized attention.
                        </label>
                    </div>
                    <div className="B3_Btn">
                       <div className="B3_Btn_Adj_1">
                       <button className="B3_Btn_1">
                            PREMIER SPORTS MEDICINE
                        </button>
                       </div>
                      
                        <div className="B3_Btn_Adj_2">
                        <button className="B3_Btn_2">
                            MEET THE TEAM
                        </button>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}
