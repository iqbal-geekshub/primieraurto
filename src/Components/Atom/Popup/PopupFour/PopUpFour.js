import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Style.css'

export default function PopUpFour() {
    return (

        // <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        //     <div class="carousel-inner d-xl-none">
        //         <div class="carousel-item active">
        //             <img src={require('../../../../Assets//Images/dickstarly-header.png')} className="d-block w-100" >
        //             </img>
        //             <img class="d-block w-100" src="..." alt="Second slide"/>

        //         </div>
        //         <div class="carousel-item">
        //             <img class="d-block w-100" src="..." alt="Secojkjlkjlnd slide"/>
        //             <img src={require('../../../../Assets//Images/tom-holland.png')} className="d-block w-100"> */}
        //              </img>
        //         </div>
        //         <div class="carousel-item active">
        //             <img src={require('../../../../Assets//Images/sheilahoist.jpeg')} className="d-block w-100" > */}
        //              </img>
        //         </div>
        //         <div class="carousel-item">
        //             <img src={require('../../../../Assets//Images/blog-placeholder.jpg')} className="d-block w-100">
        //             </img>
        //             <img class="d-block w-100" src="..." alt="Third slide"/>
        //         </div>
        //     </div>
        //     <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span class="sr-only">Previous</span>
        //     </a>
        //     <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span class="sr-only">Next</span>
        //     </a>
        // </div>
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
                    <img src={require('../../../../Assets//Images/tom-holland.png')} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    {/* <img src="assets/2.jpeg" /> */}
                    <img src={require('../../../../Assets//Images/sheilahoist.jpeg')} />

                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    {/* <img src="assets/3.jpeg" /> */}
                    <img src={require('../../../../Assets//Images/blog-placeholder.jpg')} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>

            </Carousel>
        </div>
    )
}
