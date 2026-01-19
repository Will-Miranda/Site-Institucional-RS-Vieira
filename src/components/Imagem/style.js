import styled from "styled-components";

export const Image = styled.div`
    margin-right: auto;
    margin-left: 10rem;
    width: 350px;
    height: 300px;
    padding-bottom: 5rem;
    img {
        width: 100%;
        height: 100%;
        image-rendering: pixelated;
        display: block;
        border-radius: 15px;
        object-fit: cover;
        
        box-shadow: 
        15px 10px 0px rgba(255, 254, 254, 0.2),
        30px 20px 0px rgba(138, 138, 138, 0.15),
        45px 30px 0px rgba(0,0,0,0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    h4{
        color: #fff;
        font-size: 1.2rem;
        line-height: 4rem;
    }

    span{
        padding-top: 3rem;
        color: #fff;
        font-size: 1.1rem;
    }


`