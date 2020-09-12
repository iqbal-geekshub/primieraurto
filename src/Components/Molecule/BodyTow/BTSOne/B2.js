import React from 'react'
import './Style.css'
// import src from '*.bmp'

export default function B2() {
    return (
        <div className="B2">
            <div className="B2-img">
                
                <img src={require('../../../../Assets/Images/physicaltherapydesktop.jpg')} />

            </div>
            <div className="B2-text">
              <h2>
              PHYSICAL THERAPY
              </h2>
                <p>
                At Premier Orthopedics, we recognize that
                    every person’s injury is unique.
                </p>
                <button className="B2-Btn">
                VIEW MORE
                </button>

            </div>

        </div>
    )
}
