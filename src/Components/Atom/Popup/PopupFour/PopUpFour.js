import React from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Style.css'

export default function PopUpFour() {
    return (


        <div className="container  p-3 d-xl-none">


            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showIndicators={false}
                showThumbs={false}
                swipeable={true}
                showStatus={false}


            >


                <div>
                    {/* <img src="assets/1.jpeg"p /> */}
                    <img src={require('../../../../Assets//Images/tom-holland.png')} alt="tom-holland"/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    {/* <img src="assets/2.jpeg" /> */}
                    <img src={require('../../../../Assets//Images/sheilahoist.jpeg')} alt="sheilahoist"/>

                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    {/* <img src="assets/3.jpeg" /> */}
                    <img src={require('../../../../Assets//Images/blog-placeholder.jpg')} alt="blog-placeholder.jpg"/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>

            </Carousel>
        </div>
    )
}
