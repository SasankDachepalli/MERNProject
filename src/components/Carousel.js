import React from 'react'
import { Container } from 'react-bootstrap'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain", objectPosition:"center"}}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-item active">
                        <img alt="pizza" src="pizza.jpg" className="d-block w-100" style={{filter:"brightness(50%)"}}/>
                    </div>
                    <div className="carousel-item">
                        <img alt="biryani" src="biryani.webp" className="d-block w-100" style={{filter:"brightness(50%)"}}/>
                    </div>
                    <div className="carousel-item">
                        <img alt="burger" src="burger.webp" className="d-block w-100" style={{filter:"brightness(50%)"}}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
