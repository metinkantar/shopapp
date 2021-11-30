import React from 'react'
import Image from 'next/image'
//import profilePic from '../../public/images/football.png'


const Slider = () => {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner align-item-center" >
                    <div className="carousel-item active">
                        <Image
                            src="/images/1.png"
                            alt="Landscape picture"
                            width={1200}
                            height={300}
                        />
                    </div>
                    <div className="carousel-item">
                        <Image
                            src="/images/2.png"
                            alt="Landscape picture"
                            width={1200}
                            height={300}
                        />
                    </div>
                    <div className="carousel-item" >
                        <Image
                            src="/images/3.png"
                            alt="Landscape picture"
                            width={1200}
                            height={300}
                        />
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
       
        </div>
    )
}

export default Slider
