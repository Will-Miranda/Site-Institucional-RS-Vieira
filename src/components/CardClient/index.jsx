import React from "react"
import Slider from "react-slick"
import Title from "../Title"

import { 
    CardsClient, 
    ClientImage, 
    Container
} from "./style"

import {
    GridCarousel
} from "./stylecarousel"

import C1 from "../../assets/C1.webp"
import C2 from "../../assets/C2.webp"
import C3 from "../../assets/C3.webp"
import C4 from "../../assets/C4.webp"
import C5 from "../../assets/C5.webp"
import C6 from "../../assets/C6.webp"
import C7 from "../../assets/C7.webp"
import C8 from "../../assets/C8.webp"


const Clients = [
    {id: 1, img: C1},
    {id: 2, img: C2},
    {id: 3, img: C3},
    {id: 4, img: C4},
    {id: 5, img: C5},
    {id: 6, img: C6},
    {id: 7, img: C7},
    {id: 8, img: C8}
]

const SampleNextArrow = (props) => {
    const { className, onClick } = props
    return <div className={className} onClick={onClick} style={{ right: 15, zIndex: 1}} />
}

const SamplePrevArrow = (props) => {
    const { className, onClick } = props
    return  <div className={className} onClick={onClick} style={{left: 15, zIndex: 1}}/>
}

const CardClient = () => {
    
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed:2000,
            cssEase: "linear",
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            responsive: [
                {
                    breakpoint: 900, 
                    settings: { slidesToShow: 6, slidesToScroll: 1}
                },
                {
                    breakpoint: 600, 
                    settings: { slidesToShow: 2, slidesToScroll: 1}}
            ]
        }
    
    return(

        <Container>

            <Title>EMPRESAS PARCEIRAS E CLIENTES</Title>

            <GridCarousel>
                
                <Slider {...settings}>
                    {Clients.map(({id, img}) => (
                        <CardsClient key={id}>
                            <ClientImage src={img} />
                        </CardsClient>
                    ))}
                </Slider>

            </GridCarousel>

        </Container>
        
    )

}

export default CardClient